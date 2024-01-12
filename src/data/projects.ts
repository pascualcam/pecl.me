export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Kuwi: a family tree generator",
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
    title: "Algorithms from scratch",
    techs: ["Python", "Java", "C", "MATLAB"],
    link: "https://github.com/pascualcam/algorithms",
  },
  {
    title: "Personal portfolio",
    techs: ["TailwindCSS", "TypeScript"],
    link: "https://pascualcam.com",
  },
];

export default projects;
