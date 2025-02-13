import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="WHAT ARE MY SKILLS?" des="SKILLED IN" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagist"
          des="Innovative business strategist skilled in crafting data-driven plans to optimize operations, drive growth, and achieve organizational goals. Adept at market analysis, financial planning, and building actionable strategies to help businesses stay competitive and agile in evolving markets."
         
        />
        <Card
          title="Full Stack Development"
          des="Versatile full-stack developer skilled in building dynamic, end-to-end web applications. Proficient in front-end frameworks, back-end systems, and database management, delivering seamless user experiences and scalable solutions. Adept at bridging the gap between design and functionality to create impactful digital products."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Cyber Security Analyst"
          des="Dedicated cybersecurity analyst focused on safeguarding digital assets through proactive threat detection, risk management, and security solutions. Skilled in vulnerability assessments, incident response, and implementing robust protocols to protect systems against evolving cyber threats."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile App Development"
          des="Creative mobile app developer with expertise in designing and building intuitive, user-friendly applications for iOS and Android. Proficient in modern frameworks and tools, delivering innovative solutions tailored to meet client needs and enhance user experiences.."
          icon={<FaMobile />}
        />
        <Card
          title="Data Analyst"
          des="Meticulous data analyst with expertise in transforming raw data into actionable insights. Proficient in statistical analysis, data visualization, and leveraging analytical tools to drive informed decision-making and uncover growth opportunities."
          icon={<SiAntdesign />}
        />
        <Card
          title="Web Developement"
          des="Versatile web developer skilled in creating dynamic, responsive, and visually appealing websites. Experienced in front-end and back-end technologies, delivering seamless user experiences and functional designs tailored to client and user needs."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features