
const InfoTipProject = ({children, text}: any) => {

    return <div className="relative flex items-center select-none ">
        <div className="group relative flex">
            {children}
        </div>
        <span className="absolute bottom-6 left-1/2 transform transition-all -translate-x-1/2 mb-2 w-max bg-white text-black font-medium text-sm rounded-md py-1 px-1.5 scale-0 group-hover:scale-100 duration-100">
        {text}
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-white"></span>
        </span>

    </div>
}

export default InfoTipProject;