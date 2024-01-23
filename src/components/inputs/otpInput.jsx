import {useState} from "react";

function OtpInput({  placeHolder, className ,  register }) {

    const [segments, setSegments] = useState(["", "", "", ""])

    function onPaste(event) {
        const pasted = event.clipboardData.getData("text/plain")
        setSegments(pasted.split("").slice(0, segments.length))

    }

    function update(index) {
        return event => {

            if ((event.target.value).length === 1){
                index <3 && event.target.nextElementSibling.focus()
            }else{
                index >0 && event.target.previousElementSibling.focus()
            }

            setSegments([
                ...segments.slice(0, index),
                event.target.value,
                ...segments.slice(index + 1)
            ])
        }
    }

    return (
        <div className="w-full border rounded-[15px] py-2 flex justify-evenly items-center">
            {
                segments?.map((item, index) => (
                    <input
                        autoFocus={index === 0 }
                        key={index}
                        value={item}
                        onInput={update(index)}
                        onPaste={onPaste}
                        maxLength={1}
                        {...register(`code${index}` , {required : true})}
                        className={`w-[45px] p-2 text-center h-[40px] outline-transparent focus:border-b-amber-500 border-b duration-100 ${className}`}
                        placeholder={placeHolder}
                    />
                ))
            }
        </div>
    );
}

export default OtpInput;