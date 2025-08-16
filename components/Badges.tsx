import { BadgesProps } from "@/types/project"

const Badges = ({icon, text}: BadgesProps) => {

    return <div className="bg-gray-200/10 flex w-max px-2 py-2 rounded-sm border border-gray-300/20 hover:bg-gray-200/20">
        {icon}
        <span className=" font-semibold">{text}</span>
    </div>
}

export default Badges