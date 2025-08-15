import SectionTitle from "./SectionTitle";
import { NishidhSkills } from "@/data/personal";
import Badges from "./Badges";

const Skills = () => {

    return <section className="flex flex-col gap-2 mt-5 w-full text-amber-50">
        <SectionTitle text="Tools & Technologies." className="text-xl font-semibold" />
        <div className="flex flex-row gap-2 flex-wrap w-9/12">
            {NishidhSkills.map((skill, index) => (
               <Badges key={index} icon={<skill.icon className="text-amber-50 size-6 mr-2" />} text={skill.name} />
            ))}
        </div>
    </section>
}

export default Skills;