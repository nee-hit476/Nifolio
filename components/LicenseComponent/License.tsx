import SectionTitle from "../SectionTitle";
import LicenseBox from "../LicenseBox";
import { LicenseCert } from "@/data/personal";

const License = () => {

    return (
        <div className="mb-4 md:w-9/12">
            <SectionTitle text="Certifications & Badges" className="text-amber-50 text-xl font-semibold"/>
            <div className="flex flex-col md:flex-row gap-5 ">
                {
                    LicenseCert && LicenseCert.map((cert) => (
                        <LicenseBox text={cert.name} img={cert.img} key={cert.id} link={cert.link}/>
                    ))
                }
            </div>
        </div>
    )
}

export default License;