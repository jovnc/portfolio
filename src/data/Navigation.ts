export interface NavRoute {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

export const navigationRoutes: NavRoute[] = [
  {
    id: "aboutme",
    label: "About Me",
    href: "#aboutme",
  },
  {
    id: "experiences",
    label: "Experience",
    href: "#experiences",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
  },
];

export const NAVBAR_CONFIG = {
  blur: "backdrop-blur-xl",
  transparency: "bg-white/5",
  border: "border-white/10",
  shadow: "shadow-2xl shadow-black/20",
  height: "h-16",
  animation: "transition-all duration-300 ease-out",
} as const;
