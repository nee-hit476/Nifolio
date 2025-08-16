import Screen from "@/layout/Screen"
import InfoTip from "../InfoTip";
import LocalTime from "@/utils/LocalTime";
import AboutMe from "../AboutMe";
import AnimatedWrapper from "@/utils/AnimatedWrapper";
import ReachOut from "../ReachOut";
import Skills from "../Skills";
import Projects from "../ProjectComponent/Projects";


const IndexPage = () => {

    return <Screen> 
        <div className="absolute top-5 right-5">
            <LocalTime />
        </div>
        <InfoTip />
        <AnimatedWrapper delay={0.25}>
            <AboutMe />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.3}>
            <ReachOut />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.35}>
            <Skills />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.4}>
            <Projects />
        </AnimatedWrapper>
    </Screen>
}

export default IndexPage;