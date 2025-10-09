import SectionTitle from "./SectionTitle"
import { NishidhReachOut } from "@/data/personal";
import Badges from "./Badges";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillSuitcaseLgFill } from "react-icons/bs";


const ReachOut = () => {

    return <section className="text-amber-50 mt-5">
        <SectionTitle text="Reach out to me ." className="text-xl font-semibold"/>
        <div dangerouslySetInnerHTML={{__html: NishidhReachOut}} className="sm:w-9/12 text-lg"></div>
        <div className="mt-2 flex flex-row gap-2">
            <Badges icon={<FaXTwitter className="text-amber-50 size-6" />} link="https://x.com/ins_Nihit" />
            <Badges icon={<FaDiscord className="text-amber-50 size-6" />} link="https://discord.gg/pA4ysQvh" />
            <Badges icon={<MdEmail className="text-amber-50 size-6" />} link="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMhsLVFJDbThhFgtMfXmHVfrPCljfxtHCHTxslHDGcwtSRssHTjtqttdcHQJGqXxDMHpdC" />
            <Badges icon={<BsFillSuitcaseLgFill className="text-amber-50 size-6 mr-2" />} text="Hire Me" link="https://docs.google.com/document/d/1jBn7Akf76fizSu37fhcgL3-vTetKC651BIF-5aWsN54/edit?usp=sharing"/>
        </div>
    </section>
}


export default ReachOut;
