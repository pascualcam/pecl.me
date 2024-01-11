export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Family Tree Generator",
    techs: ["Python", "SQLAlchemy"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "ML - Stanford",
    techs: ["Pandas", "Jupyter"],
    link: "https://github.com/pascualcam",
  },
  {
    title: "Historical World Cup",
    techs: ["Python"],
    link: "https://github.com/pascualcam",
    isComingSoon: true,
  },
  {
    title: "Tour de France",
    techs: ["Python"],
    link: "https://github.com/pascualcam/tour-de-tour",
    isComingSoon: true,
  },
  {
    title: "Personal portfolio",
    techs: ["TailwindCSS", "TypeScript"],
    link: "https://pascualcam.com",
  },
  {
    title: "Algorithms from scratch",
    techs: ["Python", "C++", "C", "MATLAB"],
    link: "https://github.com/pascualcam/algorithms",
  },
];

export default projects;
