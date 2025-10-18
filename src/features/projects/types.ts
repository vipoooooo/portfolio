export interface ProjectSummary {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  locked?: boolean;
}

export interface ProjectHero {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ProjectMeta {
  title: string;
  items: string[];
}

export type ProjectActionSpan = "full" | "half-left" | "half-right";

export interface ProjectAction {
  label: string;
  url: string;
  span?: ProjectActionSpan;
}

export type ProjectContentBlock =
  | { type: "description"; text: string }
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; alt?: string }
  | { type: "section"; title: string; subtitle: string }
  | { type: "divider" }
  | { type: "action"; action: ProjectAction };

export interface ProjectDetail {
  slug: string;
  summary: ProjectSummary;
  hero: ProjectHero;
  meta: ProjectMeta[];
  actions?: ProjectAction[];
  content: ProjectContentBlock[];
}
