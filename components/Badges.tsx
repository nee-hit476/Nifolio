import { BadgesProps } from "@/types/project"

const Badges = ({icon, text, link}: BadgesProps) => {

    return <div>
    <a target={link ? "_blank" : ""} href={link || "#"} className="bg-gray-200/10 flex w-max px-2 py-2 rounded-sm border border-gray-300/20 hover:bg-gray-200/20">
        {icon}
        <span  className=" font-semibold">{text}</span>
    </a>
    </div>
}

export default Badges;