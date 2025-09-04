import { motion } from "framer-motion";
import { Monitor, Server, Database, Layers } from "lucide-react";

const services = [
  { name: "Frontend", Icon: Monitor, color: "text-indigo-500", bg: "bg-indigo-50" },
  { name: "Backend", Icon: Server, color: "text-green-500", bg: "bg-green-50" },
  { name: "Database", Icon: Database, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "Full-Stack", Icon: Layers, color: "text-purple-500", bg: "bg-purple-50" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
  <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="space-y-6">
          <motion.h3
            className="text-2xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Creative Web Developer
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="bg-background/80 border border-primary/20 rounded-xl shadow-lg p-6 mb-2"
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              I am a passionate Fullstack Developer who believes that technology is more than just code—it’s a way to create meaningful impact. My academic journey has equipped me with a strong foundation in programming, problem-solving, and modern software development practices, while my personal projects and continuous learning drive me to explore new frameworks and technologies, constantly pushing the boundaries of what I can create.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="bg-background/80 border border-primary/20 rounded-xl shadow-lg p-6"
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              I specialize in building end-to-end web solutions, combining modern frontend frameworks like React.js and Next.js with robust backend technologies such as Node.js, Express.js, and databases. I enjoy transforming complex ideas into intuitive, responsive, and scalable applications that make a real difference for users.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <motion.a
              href="#contact"
              className="cosmic-button"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              {" "}
              Get In Touch
            </motion.a>

            <motion.a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4 }}
            >
              Download CV
            </motion.a>
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 mt-15 text-primary tracking-wide drop-shadow-lg">My Services</h3>
        
  {/* End container mx-auto max-w-5xl */}

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-8">
      {services.map(({ name, Icon, color, bg }, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.1, y: -8 }}
          whileTap={{ scale: 0.95 }}
          className={`flex flex-col items-center justify-center rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 ${bg}`}
        >
          
          {/* Animated Icon */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],       // gentle pulse
              rotate: [0, 5, -5, 0],     // small tilt
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.3,
              rotate: 360,              // spin on hover
              transition: { duration: 0.6 },
            }}
            className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md"
          >
            <Icon className={`w-10 h-10 ${color}`} />
          </motion.div>

          {/* Label */}
          <h4 className="mt-4 font-semibold text-gray-800">{name}</h4>
        </motion.div>
      ))}
    </div>
 
  </div>
  </section>
  );
};
