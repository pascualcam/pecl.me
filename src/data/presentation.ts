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
  title: "Hi, I’m Pascual 😁",
  // profile: "/profile.webp",
  description:
    "Hola, I'm an *engineer* and *previous founder* with *3 years* of experience in data. On the side, I write code for fun. I love road cycling and running around the Bay Area and reading books.",
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
