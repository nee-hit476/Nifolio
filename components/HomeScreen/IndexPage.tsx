import Screen from "@/layout/Screen"
import InfoTip from "../InfoTip";
import LocalTime from "@/utils/LocalTime";
import AboutMe from "../AboutMe";
import AnimatedWrapper from "@/utils/AnimatedWrapper";
import ReachOut from "../ReachOut";
import Skills from "../Skills";
import Projects from "../ProjectComponent/Projects";
import Footer from "../PageComponent/Footer";
import OSS from "../OSSComponent/OSS";
import License from "../LicenseComponent/License";


const IndexPage = () => {

    return <Screen> 
        <div className="absolute top-5 right-5">
            <LocalTime />
        </div>
        <InfoTip />
        <AnimatedWrapper delay={0.15}>
            <AboutMe />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.25}>
            <ReachOut />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.35}>
            <Skills />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.45}>
            <Projects />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.55}>
            <OSS />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.65}>
            <License />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.75}>
            <Footer />
        </AnimatedWrapper>


    </Screen>
}

export default IndexPage;