import { CodeIcon, CodeSquareIcon, DatabaseIcon, ServerIcon } from "lucide-react";
import { SiTailwindcss, SiReact, SiNextdotjs, SiRedux, SiJavascript, SiExpress, SiNodedotjs,  SiGit, SiGithub } from "react-icons/si";
import { FaTools } from "react-icons/fa";

export const skillData = [
  // Programming Languages
  {
    title: "Programming Languages",
    icon: 'https://img.icons8.com/3d-fluency/94/source-code.png',
    skill: [
      { icon: '', name: "C++", color: "#00599C" },
      { icon: '', name: "JavaScript", color: "#F7DF1E" },
    ],
  },

  // Frontend
  {
    title: "Frontend Development",
    icon: SiReact,
    skill: [
      { icon: '', name: "TailwindCSS", color: "#38B2AC" },
      { icon: '', name: "JavaScript", color: "#F7DF1E" },
      { icon: '', name: "React.js", color: "#61DAFB" },
      { icon: '', name: "Next.js", color: "#000000" },
      { icon: '', name: "ShadCN UI", color: "#6B7280" },
      { icon: '', name: "Redux ToolKit", color: "#764ABC" },
    ],
  },

  // Backend
  {
    title: "Backend Development",
    icon: ServerIcon,
    skill: [
      { icon: '', name: "JavaScript", color: "#F7DF1E" },
      { icon:'', name: "Express.js", color: "#000000" },
      { icon: '', name: "Node.js", color: "#339933" },
      { icon: '', name: "JWT", color: "#D63AFF" },
    ],
  },

  // Tools
  {
    title: "Tools",
    icon: FaTools,
    skill: [
      // { icon: SiVisualstudiocode, name: "VS Code", color: "#007ACC" },
      { icon: '', name: "Code::Blocks", color: "#00599C" },
      { icon: '', name: "Git", color: "#F05032" },
      { icon: '', name: "GitHub", color: "#181717" },
    ],
  },
];