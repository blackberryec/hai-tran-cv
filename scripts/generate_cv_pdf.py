#!/usr/bin/env python3
"""Generate the public one-page engineering CV from src/data/profile.json."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Iterable

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen.canvas import Canvas


ROOT = Path(__file__).resolve().parents[1]
PROFILE_PATH = ROOT / "src" / "data" / "profile.json"
OUTPUT_PATH = ROOT / "public" / "Hai-Tran-Nam-CV-2026.pdf"

PAGE_W, PAGE_H = A4
MARGIN_X = 36
TOP = PAGE_H - 34
BOTTOM = 26

INK = HexColor("#151817")
MUTED = HexColor("#555a57")
LINE = HexColor("#c9cbc5")
PAPER = HexColor("#fbfaf5")
ACCENT = HexColor("#ed4e2a")


def fit_text(text: str, font: str, size: float, max_width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(
    canvas: Canvas,
    text: str,
    x: float,
    y: float,
    max_width: float,
    *,
    font: str = "Helvetica",
    size: float = 8,
    leading: float = 10.5,
    color=INK,
) -> float:
    canvas.setFont(font, size)
    canvas.setFillColor(color)
    for line in fit_text(text, font, size, max_width):
        canvas.drawString(x, y, line)
        y -= leading
    return y


def draw_label(canvas: Canvas, text: str, x: float, y: float, color=ACCENT) -> None:
    canvas.setFillColor(color)
    canvas.setFont("Helvetica-Bold", 6.6)
    canvas.drawString(x, y, text.upper())


def draw_section_heading(canvas: Canvas, text: str, x: float, y: float, width: float) -> float:
    canvas.setFillColor(INK)
    canvas.setFont("Helvetica-Bold", 7.2)
    canvas.drawString(x, y, text.upper())
    canvas.setStrokeColor(INK)
    canvas.setLineWidth(0.8)
    canvas.line(x, y - 6, x + width, y - 6)
    return y - 20


def draw_bullets(
    canvas: Canvas,
    bullets: Iterable[str],
    x: float,
    y: float,
    width: float,
    *,
    size: float = 7.2,
    leading: float = 9.1,
) -> float:
    for bullet in bullets:
        lines = fit_text(bullet, "Helvetica", size, width - 12)
        canvas.setFillColor(ACCENT)
        canvas.circle(x + 2, y + 2.1, 1.25, fill=1, stroke=0)
        canvas.setFillColor(INK)
        canvas.setFont("Helvetica", size)
        for index, line in enumerate(lines):
            canvas.drawString(x + 10, y, line)
            y -= leading
        y -= 3
    return y


def generate() -> None:
    profile = json.loads(PROFILE_PATH.read_text(encoding="utf-8"))
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    canvas = Canvas(str(OUTPUT_PATH), pagesize=A4, pageCompression=1)
    canvas.setTitle(f"{profile['name']} - Engineering CV 2026")
    canvas.setAuthor(profile["name"])
    canvas.setSubject(profile["role"])

    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Header
    draw_label(canvas, "Engineering CV / 2026", MARGIN_X, TOP)
    canvas.setFillColor(INK)
    canvas.setFont("Times-Bold", 29)
    canvas.drawString(MARGIN_X, TOP - 34, profile["name"])
    canvas.setFont("Helvetica-Bold", 8.2)
    canvas.drawString(MARGIN_X, TOP - 51, profile["role"].upper())

    contact_x = PAGE_W - MARGIN_X
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    contact_lines = [
        profile["location"],
        profile["email"],
        "linkedin.com/in/haitransoftwareengineer",
        "github.com/haitrannam",
    ]
    contact_y = TOP - 9
    for line in contact_lines:
        width = stringWidth(line, "Helvetica", 7)
        canvas.drawString(contact_x - width, contact_y, line)
        contact_y -= 12
    canvas.linkURL(f"mailto:{profile['email']}", (contact_x - 190, TOP - 28, contact_x, TOP - 17))
    canvas.linkURL(profile["linkedin"], (contact_x - 190, TOP - 41, contact_x, TOP - 29))
    canvas.linkURL(profile["github"], (contact_x - 190, TOP - 53, contact_x, TOP - 42))

    canvas.setStrokeColor(INK)
    canvas.setLineWidth(2.2)
    canvas.line(MARGIN_X, TOP - 66, PAGE_W - MARGIN_X, TOP - 66)

    # Professional profile
    summary_y = TOP - 86
    draw_label(canvas, "Profile", MARGIN_X, summary_y)
    summary_y = draw_wrapped(
        canvas,
        profile["summary"],
        MARGIN_X + 58,
        summary_y,
        PAGE_W - (2 * MARGIN_X) - 58,
        font="Times-Roman",
        size=10.1,
        leading=12.4,
    )
    divider_y = summary_y - 4
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.6)
    canvas.line(MARGIN_X, divider_y, PAGE_W - MARGIN_X, divider_y)

    # Two-column body
    body_y = divider_y - 21
    main_w = 338
    gap = 20
    side_x = MARGIN_X + main_w + gap
    side_w = PAGE_W - MARGIN_X - side_x

    y = draw_section_heading(canvas, "Experience", MARGIN_X, body_y, main_w)
    for item in profile["experience"]:
        canvas.setFillColor(INK)
        canvas.setFont("Times-Bold", 11.2)
        canvas.drawString(MARGIN_X, y, item["role"])
        period_w = stringWidth(item["period"], "Helvetica-Bold", 6.3)
        canvas.setFillColor(ACCENT)
        canvas.setFont("Helvetica-Bold", 6.3)
        canvas.drawString(MARGIN_X + main_w - period_w, y + 1, item["period"])
        y -= 12
        canvas.setFillColor(MUTED)
        canvas.setFont("Helvetica-Bold", 6.8)
        canvas.drawString(MARGIN_X, y, item["company"].upper())
        y -= 13
        y = draw_bullets(canvas, item["bullets"], MARGIN_X, y, main_w, size=7.05, leading=8.8)
        y -= 6

    y = draw_section_heading(canvas, "Selected systems", MARGIN_X, y + 1, main_w)
    for project in profile["projects"]:
        draw_label(canvas, project["index"], MARGIN_X, y + 1)
        canvas.setFillColor(INK)
        canvas.setFont("Times-Bold", 9.5)
        canvas.drawString(MARGIN_X + 24, y, project["name"])
        y -= 11
        y = draw_wrapped(
            canvas,
            project["description"],
            MARGIN_X + 24,
            y,
            main_w - 24,
            size=6.75,
            leading=8.4,
            color=MUTED,
        )
        y -= 7

    # Sidebar rule
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.6)
    canvas.line(side_x - gap / 2, body_y + 4, side_x - gap / 2, BOTTOM + 22)

    sy = draw_section_heading(canvas, "Capabilities", side_x, body_y, side_w)
    for group in profile["capabilities"]:
        canvas.setFillColor(INK)
        canvas.setFont("Times-Bold", 9.5)
        canvas.drawString(side_x, sy, group["name"])
        sy -= 12
        sy = draw_wrapped(
            canvas,
            " / ".join(group["items"]),
            side_x,
            sy,
            side_w,
            font="Helvetica",
            size=6.6,
            leading=8.4,
            color=MUTED,
        )
        sy -= 12

    sy = draw_section_heading(canvas, "Certifications", side_x, sy + 2, side_w)
    for item in profile["certifications"]:
        sy = draw_wrapped(
            canvas,
            item["name"],
            side_x,
            sy,
            side_w,
            font="Times-Bold",
            size=8.1,
            leading=9.2,
        )
        sy = draw_wrapped(
            canvas,
            f"{item['issuer']} / {item['period']}",
            side_x,
            sy - 1,
            side_w,
            font="Helvetica",
            size=6.1,
            leading=7.4,
            color=MUTED,
        )
        sy -= 9

    sy = draw_section_heading(canvas, "Education", side_x, sy + 1, side_w)
    for item in profile["education"]:
        sy = draw_wrapped(
            canvas,
            item["program"],
            side_x,
            sy,
            side_w,
            font="Times-Bold",
            size=7.7,
            leading=8.8,
        )
        sy = draw_wrapped(
            canvas,
            f"{item['school']} / {item['period']}",
            side_x,
            sy - 1,
            side_w,
            font="Helvetica",
            size=5.9,
            leading=7.1,
            color=MUTED,
        )
        sy -= 8

    sy = draw_section_heading(canvas, "Languages", side_x, sy + 1, side_w)
    for language in profile["languages"]:
        sy = draw_wrapped(
            canvas,
            language,
            side_x,
            sy,
            side_w,
            font="Helvetica",
            size=6.4,
            leading=7.8,
            color=MUTED,
        )
        sy -= 5

    # Footer
    canvas.setStrokeColor(INK)
    canvas.setLineWidth(2.2)
    canvas.line(MARGIN_X, BOTTOM + 14, PAGE_W - MARGIN_X, BOTTOM + 14)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 6.3)
    canvas.drawString(MARGIN_X, BOTTOM, "HAI TRAN (JEFF) / SENIOR SOFTWARE ENGINEER / SOLUTIONS ARCHITECT / 2026")
    page_number = "01"
    canvas.drawString(PAGE_W - MARGIN_X - stringWidth(page_number, "Helvetica", 6.3), BOTTOM, page_number)

    canvas.showPage()
    canvas.save()


if __name__ == "__main__":
    generate()
