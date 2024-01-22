import MobileForm from "../forms/mobileForm.jsx";

function MobileModal() {

    return (
        <section className="w-full px-8 md:px-0 flex justify-center items-center p-2  flex-wrap  overflow-hidden">
           <MobileForm defaultValue={null} placeHolder={"شماره موبایل خود را وارد کنید.."}/>
        </section>
    );
}

export default MobileModal;