"use client"
import { GoDotFill } from "react-icons/go";
import { LuLink, LuShare } from "react-icons/lu";
import Image from "next/image";
import InfoTipProject from "./InfoTipProject";
import { FiGithub } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ProjectBoxProps } from "@/types/project";

const ProjectBox = ({ title, status, img, content, url, github, skill }: ProjectBoxProps) => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (!target.closest(".project-box")) {
                setOpen(false)
            }
        }

        document.addEventListener("click", handleOutsideClick)

        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    }, [])

    return <div onClick={() => setOpen((prev) => !prev)} className="project-box bg-gray-400/10 cursor-pointer hover:bg-gray-300/10 transition-colors duration-100 border border-zinc-700 rounded-md md:w-9/12 py-3 px-2 mb-3 text-amber-50">

        <div className="flex md:flex-row flex-col gap-4">
            <div className="basis-[22%]">
                <Image
                    className="rounded-md h-[150px] md:h-full w-full object-cover"
                    src={img}
                    alt="Project Image"
                    width={200}
                    height={150}
                />
            </div>
            <div className="basis-[78%] flex flex-col md:gap-0 gap-1">
                <div className="flex justify-between w-full items-center">
                    <div className="flex gap-2 justify-between items-center truncate">
                        <h1 className="text-2xl font-semibold">{title}</h1>
                        {status ? (
                            <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-md flex items-center bg-green-400/10 text-green-400">
                                <span className="animate-pulse">
                                    <GoDotFill />
                                </span>
                                Running
                            </div>
                        ) : (
                            <div className="select-none font-medium text-xs w-fit px-1.5 py-0.5 gap-0.5 rounded-md flex items-center bg-red-400/10 text-red-400">
                                <span className="animate-pulse">
                                    <GoDotFill />
                                </span>
                                Building
                            </div>
                        )}
                        </div>
                        <div className="select-none flex gap-2 px-2 text-base">
                            {
                                url && (
                                    <InfoTipProject text="Live">
                                        <a
                                            target="_blank"
                                            className="hover:text-zinc-400 transition-colors duration-100"
                                            href={url}
                                            onClick={(e) => { e.stopPropagation() }}
                                        >
                                            <LuLink />
                                        </a>
                                    </InfoTipProject>
                                )
                            }

                            {
                                github && (
                                    <InfoTipProject text="Github">
                                        <a
                                            target="_blank"
                                            className="hover:text-zinc-400 transition-colors duration-100"
                                            href={github}
                                            onClick={(e) => { e.stopPropagation() }}
                                        >
                                            <FiGithub />
                                        </a>
                                    </InfoTipProject>
                                )
                            }
                        </div>
                    
                </div>
                <p className="opacity-80">{content}</p>
            </div>
        </div>
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    initial={{
                        opacity: 0,
                        height: 0,
                    }}
                    animate={{
                        opacity: 1,
                        height: "auto",
                    }}
                    exit={{
                        opacity: 0,
                        height: 0,
                    }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    className=" overflow-hidden"
                >
                    <div className="flex border-t border-zinc-700 w-[97%] mt-3 md:mt-3 mx-auto" />
                    <div className="flex justify-between items-center md:py-2 py-3 px-3 transition-all duration-100">
                        <div className="flex flex-wrap gap-1.5 select-none">
                            {skill.map((skill, index) => (
                                <p
                                    key={index}
                                    className="bg-gray-200/10 border border-zinc-700 px-2 py-0.5 rounded-md text-sm"
                                >
                                    {skill}
                                </p>
                            ))}
                        </div>
                        <div className="flex gap-4 items-center md:px-2 px-2.5 md:text-lg text-xl">
                            <div
                                className="cursor-pointer select-none hover:text-zinc-400 transition-colors duration-100"
                                onClick={(e) => {
                                    e.stopPropagation()
                                }}
                            >
                                <LuShare />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
}

export default ProjectBox;
