"use client";
import AnimatedWrapper from "@/utils/AnimatedWrapper";
import SectionTitle from "../SectionTitle";
import { OSSProjects } from "@/data/personal";
import ProjectBox from "../ProjectBox";
import { useState } from "react";
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";

const OSS = () => {
    const showAllVis = OSSProjects.length > 2;
    const [showAll, setShowAll] = useState(false)
    let delayValue = 0;
    const visibleProjects = showAll ? OSSProjects : OSSProjects.slice(0, 2)

    return (
    <div id="projects" className="flex flex-col gap-2">   
        <SectionTitle text="Open Source Contributions." className="text-xl font-semibold" />
        <div className=" flex flex-col md:gap-2.5 gap-0.5">
            {
                visibleProjects.map((project) => (
                    <AnimatedWrapper key={project.id} delay={project.id === 1 ? delayValue : (delayValue += 0.075)}>
                        <ProjectBox
                            title={project.title}
                            img={project.img}
                            content={project.content}
                            status={project.status}
                            skill={project.skill}
                            url={project.url || ""}
                            github={project.github || ""}
                        />
                    </AnimatedWrapper>
                ))
            }
        </div>
            <div className="flex justify-center md:w-9/12">
        {showAllVis && (
          <button
            className=" showMore-btn text-gray-200 text-2xl mb-5"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? (
              <div className="flex gap-0.5 justify-center items-center">
                <div className=" animate-pulse">
                  <MdKeyboardDoubleArrowUp />
                </div>
                Show less
              </div>
            ) : (
              <div className="flex gap-0.5 justify-center items-center">
                <div className=" animate-pulse">
                  <MdKeyboardDoubleArrowDown />
                </div>
                Show all
              </div>
            )}
          </button>
        )}
      </div>
        </div>
    )
}

export default OSS;