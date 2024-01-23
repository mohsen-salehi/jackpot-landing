import {useEffect, useState} from "react";

function ResendOtpBtn({className , text }) {
    const [disableStatus , setDisableStatus ] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setDisableStatus(false)
        } , 120 * 1000 )
    }, []);



    const clickHandler = () => {
        console.log("ok")
    }


    return (
        <button onClick={clickHandler} disabled={disableStatus} className={`flex border border-[#4949C6] items-center justify-center rounded-3xl px-5 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300 ${className}`}>
            {text}
        </button>
    );
}

export default ResendOtpBtn;