import { SectionTitleProps } from "@/types/project"


const SectionTitle = ({text, className}: SectionTitleProps) => {

    return <span className={`text-amber-50 text-lg ${className}`}>{text}</span>
}

export default SectionTitle;