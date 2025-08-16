"use client"
import SectionTitle from "../SectionTitle"
import ProjectBox from "../ProjectBox"
import { VisibleProjects } from "@/data/personal"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md"
import { useState } from "react"

const Projects = () => {
    const showAllVis = VisibleProjects.length > 2;
    const [showAll, setShowAll] = useState(false)
    let delayValue = 0;

    return <div id="projects" className="flex flex-col gap-3">   
        <SectionTitle text="Projects" className="text-xl font-semibold" />
        <div className=" flex flex-col md:gap-2.5 gap-3.5">
            {
                VisibleProjects.map((project) => (
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
        <div>
            <div>
        {showAllVis && (
          <button
            className=" showMore-btn "
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
    </div>
}

export default Projects;