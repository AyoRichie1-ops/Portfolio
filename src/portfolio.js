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
    livelinks: "https://dph-frontend.vercel.app/",
  },
  {
    _id: 2,
    image: img2,
    title: "Git Meal",
    description:
      "A Website used in checking recipes, also the ingredients, and watch quick prep videos!",
    technologies: {
      frontEnd: ["React", "Redux", "Material UI", "Vanilla Css"],
      backEnd: ["Node.js", "Express", "MongoDB"],
    },
    livelinks: "https://gitub-meal.vercel.app/",
    repo: "https://github.com/AyoRichie1-ops/Gitub-Meal",
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
    livelinks: "https://readify-eight.vercel.app/",
    repo: "https://github.com/AyoRichie1-ops/Readify",
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
    livelinks: "https://task-web-amber.vercel.app/",
    repo: "https://github.com/AyoRichie1-ops/Task-Web",
  },
];
