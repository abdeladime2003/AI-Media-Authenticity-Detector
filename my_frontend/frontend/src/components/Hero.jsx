import React, { useEffect } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-[85vh] place-content-center overflow-hidden bg-gray-950 px-4 py-24 md:py-32 text-gray-200"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-10">
          <span className="inline-block rounded-full bg-gray-600/50 px-4 py-1.5 text-sm md:text-base">
            AI-Powered Detection
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent leading-tight px-4">
            Unmask Deepfakes with Cutting-Edge AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl px-4">
            Our AI-model can tell you whether an image is real or fake.
          </p>
          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center justify-center gap-1.5 rounded-full bg-gray-950/10 px-8 py-4 text-gray-50 text-lg font-medium w-fit mx-auto"
          >
            Try Free Demo
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;