import AnimatedWrapper from "@/utils/AnimatedWrapper"
import Badges from "./Badges";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import SectionTitle from "./SectionTitle";

const InfoTip = () => {

    return <AnimatedWrapper delay={0.2}>
        <SectionTitle text="Nishidh Singh" className="text-[2rem] mb-0 font-semibold"/>
        <br />
        <SectionTitle text="Software Engineer" className="text-gray-300/70 font-normal"/>
        <div className="flex flex-row gap-2 mt-3">
        <Badges icon={<FaGithub className="text-amber-50 size-8" />} />
        <Badges icon={<FaXTwitter className="text-amber-50 size-8" />} />
        <Badges icon={<FaLinkedin className="text-amber-50 size-8" />} />
        <Badges icon={<SiLeetcode className="text-amber-50 size-8" />} />
      </div>
    </AnimatedWrapper>
}

export default InfoTip;