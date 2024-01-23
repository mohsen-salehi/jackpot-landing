import React from 'react';
import MobileModal from "../modals/mobileModal.jsx";
import ButtonLink from "../links/buttonLink.jsx";
import OtpModal from "../modals/otpModal.jsx";

function FormSection() {
    return (
        <div className="w-full flex flex-wrap">
            <div className="w-full flex justify-center items-center">


                {/*<MobileModal/>*/}
                <OtpModal/>


                {/*<OrangeButton*/}
                {/*    text="شانستو امتحان کن"*/}
                {/*    sibling={*/}
                {/*        <img width={20} height={20} src={ArrowLeftIcon} className="mx-2" alt=""/>*/}
                {/*    }*/}
                {/*/>*/}
            </div>
            <div className="w-full mt-5 flex justify-center  items-center">
                <ButtonLink
                    text={"راهنمای جک پات"}
                    link="#info"
                />
            </div>
        </div>
    );
}

export default FormSection;