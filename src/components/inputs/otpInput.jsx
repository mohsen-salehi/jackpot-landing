import React, {useEffect, useState} from 'react';

function OtpInput({register, placeHolder, className }) {

    const [otpCode , setOtpCode] = useState([])
    const [segments, setSegments] = React.useState(["", "", "", ""])

    function onPaste(event) {
        const pasted = event.clipboardData.getData("text/plain")
        setSegments(pasted.split("").slice(0, segments.length))


    }


    useEffect(() => {
        setOtpCode(segments.join(""))
        console.log(otpCode)
    }, [otpCode, segments]);

    function update(index) {

        return event =>
            setSegments([
                ...segments.slice(0, index),
                event.target.value,
                ...segments.slice(index + 1)
            ])

    }

    return (
        <div dir="ltr" className="w-full border rounded-[15px] py-2 flex justify-evenly items-center">
            <input disabled type="hidden" {...register} value={otpCode}/>
            {
                segments?.map((item, index) => (
                    <input
                        key={index}
                        value={item}
                        onInput={update(index)}
                        onPaste={onPaste}
                        maxLength={1}
                        className={`w-[45px] p-2 text-center h-[40px] outline-transparent focus:border-b-amber-500 border-b duration-100 ${className}`}
                        placeholder={placeHolder}
                    />
                ))
            }


        </div>


    );
}

export default OtpInput;