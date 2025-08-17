import { LicenseBoxProps } from "@/types/project";
import Image from "next/image";


const LicenseBox = ({text, img, link} : LicenseBoxProps) => {

    return <div className="text-amber-50 mt-2 flex items-center justify-center font-semibold md:w-[250px] rounded-md bg-gray-400/10 cursor-pointer hover:bg-gray-300/10 border border-zinc-700 p-2">
        <a href={link ? link : "#"} target={link ? "_blank" : ""}>
            <h1 className="text-center text-md mb-2">{text}</h1>
        <div>
            <Image width={250} height={250} className="w-full md:width-[250px] rounded-md" src={img} alt={"certificate:  " + text} />
        </div>
        </a>
    </div>
}

export default LicenseBox;