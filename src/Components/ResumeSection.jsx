import React from "react";
import { FaAward } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
function Card({ year, title, place }) {
  return (
    <div className="group">
      <div className="bg-[#140c1c] rounded-2xl p-5 my-4 flex flex-col gap-y-1  hover:bg-gradient-to-r hover:from-[#956ae9] hover:via-[#5c34ac] hover:to-[#311960] transition-colors duration-400">
        <div className="md:text-xl text-[16px] text-[#8c51e4] font-semibold group-hover:text-white transition-colors">
          {year}
        </div>
        <div className="md:text-2xl text-xl font-bold">{title}</div>
        <div className="md:text-[16px] text-[14px] font-normal">{place}</div>
      </div>
    </div>
  );
}

function ResumeSection() {
  return (
    <section
      id="resume"
      className="bg-[#050709] w-full mx-auto lg:px-16 px-4 py-6 text-gray-300 font-sans"
    >
      <div className="max-w-[1370px] w-full py-20 flex md:justify-between flex-wrap gap-y-12 md:px-10 lg:px-0">
        {/* Experience Section */}
        <div className="experienceSection w-full md:w-[48%] px-6 flex flex-col items-start gap-y-10">
          <div className="w-full flex items-center gap-x-2">
            <FaAward className="text-5xl" />
            <h2 className="lg:text-[40px] md:text-[33px] text-[28px] p-2 font-medium bg-gradient-to-r from-[#8c51e4] via-[#b495e4] to-[#c1a8e7] bg-clip-text text-transparent">
              My Experience
            </h2>
          </div>
          <div className="w-full">
            <Card
              year="2022 - Present"
              title="Lead Developer"
              place="Blockdots, London"
            />
            <Card
              year="2022 - Present"
              title="Full Stack Web Developer"
              place="Parsons, The New School"
            />
            <Card
              year="2020 - 2021"
              title="UI Designer"
              place="House of Life, Leeds"
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="educationSection w-full md:w-[48%] px-6 flex flex-col items-start gap-y-10">
          <div className="w-full flex items-center gap-x-2">
            <FaGraduationCap className="text-5xl" />
            <h2 className="lg:text-[40px] md:text-[33px] text-[28px] p-2 font-medium bg-gradient-to-r from-[#8c51e4] via-[#b495e4] to-[#c1a8e7] bg-clip-text text-transparent">
              My Education
            </h2>
          </div>
          <div className="w-full">
            <Card
              year="2022 - 2023"
              title="Programming Language"
              place="Harvard University"
            />
            <Card
              year="2016 - 2020"
              title="Graphic Design Course"
              place="University of Denmark"
            />
            <Card
              year="2012 - 2015"
              title="Web Design Course"
              place="University of California"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
