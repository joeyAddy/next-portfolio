import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-7xl mt-48 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="5vw" />
        <Skill name="CSS" x="-5vw" y="-11vw" />
        <Skill name="JavaScript" x="18vw" y="6vw" />
        <Skill name="React JS" x="0vw" y="12vw" />
        <Skill name="Next Js" x="-23vw" y="-15vw" />
        <Skill name="Web Design" x="-32vw" y="-5vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-28vw" y="18vw" />
        <Skill name="Node JS" x="28vw" y="18vw" />
        <Skill name="Tailwind" x="17vw" y="-13vw" />
        <Skill name="Bootstrap" x="28vw" y="-3vw" />
      </div>
    </>
  );
};

export default Skills;
