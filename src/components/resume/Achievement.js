import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">My Best Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
           <ResumeCard
            title="Steve Tshwete Provincial Public Speaking #1 - 2020."
            des="Achieved first place in the prestigious Steve Tshwete Provincial Public Speaking competition from 2020-2022, showcasing exceptional communication skills, persuasive storytelling, and the ability to inspire and engage diverse audiences"
          />
            <ResumeCard
            title="Steve Tshwete Provincial Public Speaking #1 - 2021."
          />
                    <ResumeCard
            title="Steve Tshwete Provincial Public Speaking #1 - 2022."
          />
          <ResumeCard
            title="Mpumalanga Basketball League Championship - 2023."
            des="As a point guard, and a co-captain. I was a key contributor to the victorious Mpumalanga Basketball League Championship team in 2023, demonstrating leadership and teamwork."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Achievement;
