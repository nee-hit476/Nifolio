import { BadgesProps } from "@/types/project"

const Badges = ({icon}: BadgesProps) => {

    return <div className="bg-gray-300/10 flex w-max px-2 py-2 rounded-sm">
        {icon}
    </div>
}

export default Badges