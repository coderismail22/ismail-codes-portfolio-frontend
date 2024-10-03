import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
// import { cn } from "shadcn/utils"; // for dynamic classNames
const Skills = () => {
  const skills = [
    { name: "HTML", icon: "🔥" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🌿" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "MongoDB", icon: "🍃" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">My Skills</h2>
        <p className="text-gray-400">
          These are the tools I use to build modern web applications.
        </p>
      </div>

      {/* Motion Container */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group"
            variants={skillVariants}
            // whileHover={{ scale: 1.1 }}
            whileHover={{
              boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              filter: "brightness(1.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="h-20 flex items-center justify-center bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 text-center rounded-lg transition-transform duration-300 ease-in-out">
              <div className="text-6xl mb-2">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
