import ButtonLink from "../links/buttonLink.jsx";

function LoserModal() {
    return (
        <section className="w-full z-10 bg-cover bg-no-repeat h-screen  flex bg-main-loser fixed top-0 items-center justify-center">
            <div className="w-[387px]  h-[739px] rounded-20 bg-white">
                <figure className="w-full flex justify-center -translate-y-20">
                    <img className="object-cover" src="/crown.png" alt=""/>
                </figure>
                <div className="w-full flex flex-wrap justify-center -translate-y-10 items-center">
                    <h5 dir="rtl" className="w-full text-xl font-bold text-center">
                        کد تخفیف برنده شدی!
                    </h5>
                    <div dir="rtl" className="w-full  pt-3 text-center">
                        کد تخفیف 150 هزارتومانی تولد الانزا
                    </div>
                </div>
                <div className="w-full -translate-y-5">
                    <figure className="w-full flex justify-center items-center ">
                        <img src="/Frame.png" className="object-cover i w-full h-full scale-[3]" alt=""/>
                    </figure>
                </div>
                <div className="w-full mt-10 pt-10 px-10">
                    <h5 dir="rtl" className="w-full text-2xl font-bold text-center">
                        صبر کن!!!
                    </h5>
                    <h5 dir="rtl" className="w-full text-xl py-5 font-bold text-center">
                        بازم میتونی از جک پات استفاده کنی
                    </h5>
                    <div dir="rtl" className="w-full text-center">
                        فقط کافیه لینک زیر رو کپی کنی و به دوستات بدی
                        اگه اونا هم تخفیف بگیرن تو هم یه شانس دیگه برای گرفتن تخفیف داری!
                    </div>
                    <div className="w-full border-orange-500 flex items-center justify-between border-2 p-2 rounded-2xl mt-2">
                        <button className="bg-orange-500 rounded-xl p-2.5 ">
                            <img src="/icons/Upload.svg" className="object-cover" alt=""/>
                        </button>
                        <span className="pe-3 text-orange-500 pt-1">https://elanza.com/jkpt/1456</span>
                    </div>
                    <div className="w-full flex mt-3 ">
                        <ButtonLink className="bg-orange-500  rounded-xl p-2 w-full flex justify-center items-center " text="برو به سایت " />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoserModal;

