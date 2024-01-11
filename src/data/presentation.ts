type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "me@pascualcam.com",
  title: "Hi, I’m Pascual 👋",
  // profile: "/profile.webp",
  description:
    "Hola, I'm a *Mexican* engineer and previous founder with over *3 years* of experience in data. Outside of work I love to ride bikes around the Bay Area and read books.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/pascualcmch",
    },
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/pascualcam",
    },
    {
      label: "Github",
      link: "https://github.com/pascualcam",
    },
    {
      label: "Literal",
      link: "https://literal.club/ecam",
    },
    {
      label: "Strava",
      link: "https://www.strava.com/athletes/18664359",
    },
  ],
};

export default presentation;
