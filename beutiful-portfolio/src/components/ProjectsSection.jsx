import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fiflix Movie website",
    description: "Developed a Netflix-inspired web app with React.js, offering a responsive and mobile-friendly interface. It dynamically fetches movie data using Axios, providing a smooth, Netflix-like browsing experience with a clean and modern design.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Firebase"],
    demoUrl: "https://firoliyos.github.io/Firflix-movie-app/",
    githubUrl: "https://github.com/firoliyos/Firflix-movie-app",
  },
  {
    id: 2,
    title: "Expense Tracker with AI",
    description:
      "Designed an AI-powered Expense Tracker app with Next.js, Tailwind CSS, Clerk, and Neon. It delivers a smooth, responsive experience with secure authentication and intelligent features like automated expense classification, spending predictions, analytics dashboard and personalized financial insights.",
    image: "/projects/project2.png",
    tags: ["Next.js","TypeScript", "Clerk","Neon", "AI" ],
    demoUrl: "https://expense-f-tracker-ai.vercel.app/",
    githubUrl: "https://github.com/firoliyos/Expense-Tracker-AI",
  },
  {
    id: 3,
    title: "AI-Powered Sleep Tracker",
    description:
      "Designed and deployed an AI-powered Sleep Tracker using Next.js 15, Tailwind CSS, Prisma, and Clerk. The app intelligently monitors sleep patterns, provides actionable insights, and delivers a seamless, user-friendly experience across devices.",
    image: "/projects/project3.png",
    tags: ["Next.js","TypeScript", "Clerk","Prisma", "AI" ],
    demoUrl: "https://next-js-sleep-tracker-ai.vercel.app/",
    githubUrl: "https://github.com/firoliyos/Next-js-Sleep-Tracker-AI",
  },
  {
    id: 4,
    title: "Let's Talk - Video Conferencing App",
    description:
      "Designed and implemented Let’s Talk, a Zoom-inspired video conferencing app built with Next.js 15, TypeScript, and Clerk. The app delivers real-time video communication through a clean, intuitive, and scalable interface, featuring meeting scheduling, upcoming and previous meetings, session recording, real-time chat with emojis, and the ability to invite friends via shareable links, ensuring a seamless and collaborative user experience.",
    image: "/projects/project4.png",
    tags: ["Next.js","TypeScript", "Clerk",],
    demoUrl: "https://lets-talk-coral.vercel.app/",
    githubUrl: "https://github.com/firoliyos/lets-talk",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, carefully crafted for performance, detail, and user experience. Each includes links to a live demo and GitHub repository. I’d love to hear from anyone interested in collaborating on these projects!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/firoliyos"
          >
            My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
