import { use, useEffect, useState } from "react"


const LocalTime = () => {
    const [localTime, setLocalTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setLocalTime(new Date);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return <div>
        {localTime.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
    </div>
}


export default LocalTime;