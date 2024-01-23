import {useForm} from "react-hook-form";
import OrangeButton from "../buttons/orangeButton.jsx";
import MobileInput from "../inputs/mobileInput.jsx";
import MobileRequired from "../messages/errors/mobileRequired.jsx";

function MobileForm({placeHolder}) {


    const {
        register, handleSubmit, formState: {errors},
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (<form className="w-[382px] md:w-[412px] bg-white flex flex-wrap rounded-[20px] shadow p-5"
                  onSubmit={handleSubmit(onSubmit)}>
            <MobileInput
                className={errors.mobile && "focus:outline-red-400 border-red-500"}
                placeHolder={placeHolder}
                register={{...register("mobile", {required: true})}}
            />

            {errors.mobile && <MobileRequired/>}

            <OrangeButton className="w-full mt-5 h-[48px] rounded-[15px] text-white" text={"ارسال رمز عبور"}/>
        </form>);
}

export default MobileForm;
