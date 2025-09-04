// AnimatedIcon.jsx
import { motion } from "framer-motion";


export default function AnimatedIcon({ Icon, color = "text-blue-500" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 8 }}
      whileTap={{ scale: 0.9 }}
      className="inline-flex"
    >
      <Icon className={`w-10 h-10 ${color}`} />
    </motion.div>
  );
}
