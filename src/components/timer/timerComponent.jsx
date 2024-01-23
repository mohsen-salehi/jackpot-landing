import React, {useEffect, useState} from 'react';

function TimerComponent({icon}) {
    const [seconds, setSeconds] = useState(120);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => (prevSeconds === 0 ? 0 : prevSeconds - 1));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (time) => new Date(time * 1000).toISOString().substr(14, 5);

    return (
        <div className="border-[#4949C6] border h-[36px]  w-[94px] flex flex-wrap rounded-3xl items-center justify-center ">
            <span className="pt-2 px-2">
                {formatTime(seconds)}
            </span>
            {icon && icon}
        </div>
    );
}

export default TimerComponent;