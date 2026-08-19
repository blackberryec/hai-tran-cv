import profileData from "./profile.json";

export type Experience = (typeof profileData.experience)[number];
export type Project = (typeof profileData.projects)[number];
export type Capability = (typeof profileData.capabilities)[number];
export type Article = (typeof profileData.writing)[number];

export const profile = profileData;

export function getArticle(slug: string) {
  return profile.writing.find((article) => article.slug === slug);
}
