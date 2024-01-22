import {useForm} from "react-hook-form";
import OrangeButton from "../buttons/orangeButton.jsx";
import OtpRequired from "../messages/errors/otpRequired.jsx";
import OtpInput from "../inputs/otpInput.jsx";

function OtpForm() {
    const {
        register, handleSubmit, formState: {errors},
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (<form dir="rtl" className="w-[382px] md:w-[412px] bg-white flex flex-wrap rounded-[20px] shadow p-5"
                  onSubmit={handleSubmit(onSubmit)}>

        <OtpInput
        register={{...register("code", {required: true})} }/>
        {errors.code && <OtpRequired/>}

        <OrangeButton className="w-full mt-5 h-[48px] rounded-[15px] text-white" text={"ارسال رمز عبور"}/>
    </form>);
}

export default OtpForm;