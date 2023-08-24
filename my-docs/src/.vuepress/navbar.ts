import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "概况",
        icon: "lightbulb",
        prefix: "README.md",
        children: ["", { text: "", icon: "", link: "" }],
      },
      {
        text: "详情",
        icon: "lightbulb",
        prefix: "",
        children: ["favor.md","user.md","relation.md","chat.md","video.md", { text: "", icon: "", link: "" }],
      },
    ],
  },
]);
