import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiRedux,
} from "react-icons/si";
const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "JavaScript", level: 90, category: "frontend", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "React.js", level: 90, category: "frontend", icon: <SiReact className="text-blue-400" /> },
  { name: "Next.js", level: 85, category: "frontend", icon: <SiNextdotjs /> },
  { name: "TypeScript", level: 85, category: "frontend", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Redux", level: 85, category: "frontend", icon: <SiRedux className="text-purple-500" /> },

  { name: "Node.js", level: 85, category: "backend", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express", level: 85, category: "backend", icon: <SiExpress /> },
  { name: "Nest.js", level: 80, category: "backend", icon: <SiNestjs className="text-red-500" /> },
  { name: "Firebase", level: 75, category: "backend", icon: <SiFirebase className="text-yellow-400" /> },

  { name: "MongoDB", level: 80, category: "database", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", level: 80, category: "database", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MySQL", level: 80, category: "database", icon: <SiMysql className="text-blue-500" /> },

  { name: "Git/GitHub", level: 90, category: "tools", icon: <SiGithub /> },
];

const categories = ["all", "frontend", "database", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
           <span className="text-primary">Skills</span>
        </h2>

        {/* Category buttons with animated underline */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative">
          {categories.map((category, key) => {
            const isActive = activeCategory === category;
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full capitalize relative overflow-hidden transition-colors duration-300",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                )}
                whileHover={{ scale: 1.1 }}
              >
                {category}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-1 bg-primary rounded-full w-full"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Skills grid with animated cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-start"
              >
                {/* Icon + Name */}
                <motion.div
                  className="flex items-center gap-3 mb-4"
                  animate={{ y: [0, -5, 0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                >
                  <span className="text-2xl text-primary">{skill.icon}</span>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </motion.div>

                {/* Animated progress bar with stagger */}
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                    className="h-2 rounded-full origin-left"
                    style={{
                      background: (() => {
                        switch (skill.name) {
                          case "HTML/CSS": return "linear-gradient(to right, #e44d26, #f16529)";
                          case "JavaScript": return "linear-gradient(to right, #f7df1e, #ffd700)";
                          case "React.js": return "linear-gradient(to right, #61dafb, #21a1f1)";
                          case "Next.js": return "linear-gradient(to right, #000000, #434343)";
                          case "TypeScript": return "linear-gradient(to right, #3178c6, #007acc)";
                          case "Tailwind CSS": return "linear-gradient(to right, #38b2ac, #0ea5e9)";
                          case "Node.js": return "linear-gradient(to right, #68a063, #3c873a)";
                          case "Express": return "linear-gradient(to right, #000000, #434343)";
                          case "Nest.jS": return "linear-gradient(to right, #e0234e, #c81d45)";
                          case "Firebase": return "linear-gradient(to right, #ffcb2b, #f57c00)";
                          case "MongoDB": return "linear-gradient(to right, #47a248, #1a6b30)";
                          case "PostgreSQL": return "linear-gradient(to right, #336791, #003366)";
                          case "MySQL": return "linear-gradient(to right, #00758f, #005073)";
                          case "Git/GitHub": return "linear-gradient(to right, #f05032, #24292f)";
                          case "VS Code": return "linear-gradient(to right, #007acc, #1e40af)";
                          default: return "#0ea5e9";
                        }
                      })(),
                    }}
                  />
                </div>

                {/* Skill percentage */}
                <div className="text-right mt-1 w-full">
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
