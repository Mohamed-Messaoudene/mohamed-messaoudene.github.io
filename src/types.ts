import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { IconType } from "react-icons";

export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  status: string;
  duration: string;
  team: string;
  client: string;
  image: string;
  platform: string;
  industry: string;
  gallery: string[];
  technologies: {
    name: string;
    icon:
      | IconType
      | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
          muiName: string;
        });
    color: string;
  }[];
  demoUrl: string|null;
  githubUrl: string|null;
  color: string;
  longDescription: string;
  problem: string[];
  solution: string[];
  role: {
    title: string;
    description: string;
    responsibilities: string[];
  };
  features: string[];
};

export type SkillCategory = {
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  color: string;
  skills: {
    name: string;
    icon:
      | IconType
      | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
          muiName: string;
        });
    core: boolean;
  }[];
};

export type Language = {
  name: string;
  level: string;
};

export type Experience =
  | {
      type:string;
      title: string;
      org: string;
      location: string;
      duration: string;
      color: string;
      description: string;
      tags: string[];
      contributions?: undefined;
    }
  | {
      type: string;
      title: string;
      org: string;
      location: string;
      duration: string;
      color: string;
      contributions: string[];
      description?: undefined;
      tags?: undefined;
    };

export type ThemeMode = "dark" | "light"