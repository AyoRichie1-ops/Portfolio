import img1 from "./assets/dph.png";
import img2 from "./assets/gitmeal.png";
import img3 from "./assets/readify.png";
import img4 from "./assets/task.png";

export const Projects = [
  {
    _id: 1,
    image: img1,
    title: "Digital Prescence Hub",
    description:
      "A digital platform for businesses to create a strong online presence",
    technologies: {
      frontEnd: ["React", "Redux", "Material UI", "Tailwind Css"],
      backEnd: ["Node.js", "Express", "MongoDB"],
    },
  },
  {
    _id: 2,
    image: img2,
    title: "Git Meal",
    description:
      "A Platform used to check out type of foods, ingredients used and also a short video on how to prepare it ",
    technologies: {
      frontEnd: ["React", "Redux", "Material UI", "Vanilla Css"],
      backEnd: ["Node.js", "Express", "MongoDB"],
    },
  },
  {
    _id: 3,
    image: img3,
    title: "Readify",
    description:
      "A Website which lends out books for people that love to read online",
    technologies: {
      frontEnd: ["React", "Redux", "Material UI", "Vanilla Css"],
    },
  },
  {
    _id: 4,
    image: img4,
    title: "Task App Website",
    description:
      "Use for creating tasks which you need to do whether it is important or urgently",
    technologies: {
      frontEnd: ["React", "Redux", "Material UI", "Vanilla Css"],
      backEnd: ["Node.js", "Express", "MongoDB"],
    },
  },
];
