import { NishidhAbout } from "@/data/personal"
import SectionTitle from "./SectionTitle";

const AboutMe = () => {
    return <section className="flex flex-col gap-2 mt-5 w-full text-amber-50">
        <div className="flex flex-col gap-2 sm:w-9/12 mt-0">
            <SectionTitle text="About Me." className="text-xl font-semibold" />
            <div dangerouslySetInnerHTML={{ __html: NishidhAbout }}  className="flex flex-col gap-2 text-lg">
            </div>
        </div>
    </section>
}

export default AboutMe;