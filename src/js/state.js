import { STACK_OPTIONS } from "./constants";

const copy = {
  title: "Zyqq's Portfolio",
  subtitle: "This website built using Vue.JS and Node.JS",
  introduction: "Hiii!! I'm a fullstack developer. This is my portfolio."
};

const projects = [
    {
      title: "Online Food Store",
      image: "http://i.ibb.co/ph6x1mq/2650401.jpg",
      description: "An online store that sells food.",
      techStack: [
        STACK_OPTIONS.VUE,
        STACK_OPTIONS.PHP
      ]
    },
    {
      title: "E-commerce",
      image: "https://image.freepik.com/free-photo/top-view-blooming-flowers_23-2148882255.jpg",
      description: "An ecommerce website.",
      techStack: [
        STACK_OPTIONS.VUE,
        STACK_OPTIONS.NODE
      ]
    },
  ];

  export {projects, copy};