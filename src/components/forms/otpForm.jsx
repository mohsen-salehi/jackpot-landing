import {useForm} from "react-hook-form";
import OrangeButton from "../buttons/orangeButton.jsx";
import OtpRequired from "../messages/errors/otpRequired.jsx";
import OtpInput from "../inputs/otpInput.jsx";
import TimerComponent from "../timer/timerComponent.jsx";
import ResendOtpBtn from "../buttons/resendOtpBtn.jsx";

function OtpForm() {

    const {
        setValue, register, setError, handleSubmit, formState: {errors},
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }


    return (<form className="w-[382px] md:w-[412px] bg-white flex flex-wrap rounded-[20px] shadow p-5"
                  onSubmit={handleSubmit(onSubmit)}>

        <OtpInput register={register} setter={setValue} setError={setError}/>
        {
            (errors.code0 || errors.code1 || errors.code2 || errors.code3) && (
                <OtpRequired/>
            )
        }

        <OrangeButton className="w-full mt-5 h-[39px] items-center rounded-[15px] text-white" text={"برو بریم"}/>
        <div className="w-full justify-between flex text-[#4949C6] mt-5">
            <TimerComponent
                icon={<img src="/icons/clock.svg" className="object-cover m-0 p-0" alt=""/>}
            />
            <ResendOtpBtn  text={"ارسال مجدد کد تایید"}/>
        </div>

    </form>);
}

export default OtpForm;