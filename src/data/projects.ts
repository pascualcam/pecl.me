export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Family Tree Generator",
    techs: ["SQLite", "JavaScript", "Java", "React"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "ML at Stanford",
    techs: ["Pandas", "Jupyter"],
    link: "https://github.com/pascualcam",
  },
  {
    title: "World Cup Data",
    techs: ["Python"],
    link: "https://github.com/pascualcam",
    isComingSoon: true,
  },
  {
    title: "Tour de France",
    techs: ["Python", "Jupyter", "Pandas"],
    link: "https://github.com/pascualcam",
    isComingSoon: true,
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
