import { ScreenProps } from "@/types/project"
import { DiCelluloid } from "react-icons/di"


const Screen = ({children}: ScreenProps) => {

    return <div className="h-screen w-screen px-5 sm:px-20 py-10 pb-5">{children}</div>
}

export default Screen;