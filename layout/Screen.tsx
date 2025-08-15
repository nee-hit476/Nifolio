import { ScreenProps } from "@/types/project"
import { DiCelluloid } from "react-icons/di"


const Screen = ({children}: ScreenProps) => {

    return <div className="h-screen w-screen px-20 py-10">{children}</div>
}

export default Screen;