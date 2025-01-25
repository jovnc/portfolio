export type Project = {
  imageSrc: string; // URL to the image
  title: string; // Title of the project
  subtitle: string; // Subtitle of the project
  description: string; // Description of the project
  techStack: string[]; // List of technologies used
  date: string; // Date of the project, can be more specific like Date type if needed
  github: string; // URL to the GitHub repository
  youtube?: string; // URL to the YouTube video
};
