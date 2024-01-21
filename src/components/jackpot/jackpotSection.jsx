import React, {useEffect, useState} from 'react';
import Jackpot from "./jackpot.jsx";
import elanzaLogo from "../../assets/images/Elanza.png"
import OrangeButton from "../buttons/orangeButton.jsx";
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg"
import HeroTitle from "../titles/heroTitle.jsx";

function JackpotSection() {

    const [winIndex, setWinIndex] = useState(111)
    const [winNumbers, setWinNumbers] = useState([])


    useEffect(() => {
        setTimeout(() => {
            setWinIndex(123)
            setWinNumbers(Array.from(String(winIndex), Number))
        }, 10000)
    }, []);


    return (
        <section className="flex flex-wrap h-screen overflow-hidden p-5  justify-center content-evenly">
            <HeroTitle/>
            <section
                className="relative bg-hero-pattern bg-contain bg-no-repeat bg-center flex flex-wrap content-between h-[250px]  md:h-[500px] w-[260px]  md:w-[500px]">
                <div
                    className="w-full  md:mt-[50px] flex flex-wrap justify-center  items-center p-3 h-[100px] ">
                    <img className={"object-cover  md:translate-y-0 md:mt-0 w-2/4 md:w-2/3"} src={elanzaLogo}
                         alt={"Logo elanza"}/>
                </div>
                <div
                    className="w-full -z-10  md:left-28 left-10 h-[300px] flex flex-wrap justify-center items-center absolute top-[20%] bg-center bg-contain bg-no-repeat bg-jackpot-handler">
                </div>
                <div
                    className="w-[72%] md:w-[70%] h-[60px] md:h-[110px] ps-1  md:ps-4 flex flex-wrap justify-between items-center absolute top-[50.5%] md:top-[52%]  left-[13.5%]">
                    <Jackpot winIndex={winIndex ? winNumbers[0] : false}/>
                    <Jackpot winIndex={winIndex ? winNumbers[1] : false}/>
                    <Jackpot winIndex={winIndex ? winNumbers[2] : false}/>
                </div>
            </section>

            <div className="w-full flex flex-wrap ">
                <div className="w-full flex justify-center  items-center">
                    <OrangeButton
                        className={"py-3"}
                        text="شانستو امتحان کن"
                        sibling={
                            <img width={20} height={20} src={ArrowLeftIcon} className="mx-2" alt=""/>
                        }
                    />
                </div>
                <div className="w-full mt-5 flex justify-center  items-center">
                    <a href="/#info" className="text-shadow-manual font-bold  text-white">راهنمای جک پات</a>
                </div>
            </div>
        </section>
    )
        ;
}

export default JackpotSection;