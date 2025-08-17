import AnimatedWrapper from "@/utils/AnimatedWrapper"
import Badges from "./Badges";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import SectionTitle from "./SectionTitle";
import Available from "./Available";

const InfoTip = () => {

    return <AnimatedWrapper delay={0.2}>
        <div className="flex flex-row items-center gap-2 m-0 p-0">
            <SectionTitle
                text="Nishidh Singh"
                className="text-[2rem] mb-0 font-semibold"
            />
            <Available text="Available for Hire" />
            </div>
        <SectionTitle text="Software Engineer" className="text-gray-300/70 font-normal"/>
        <div className="flex flex-row gap-2 mt-3">
        <Badges icon={<FaGithub className="text-amber-50 size-6" />} link="http://github.com/nee-hit476/"/>
        <Badges icon={<FaXTwitter className="text-amber-50 size-6" />} link="https://x.com/ins_Nihit"/>
        <Badges icon={<FaLinkedin className="text-amber-50 size-6" />} link="https://www.linkedin.com/in/nishidh-s-060571291/"/>
        <Badges icon={<SiLeetcode className="text-amber-50 size-6" />} link="https://leetcode.com/u/Nihit04cancer/" />
      </div>
    </AnimatedWrapper>
}

export default InfoTip;