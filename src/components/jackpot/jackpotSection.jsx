import Jackpot from "./jackpot.jsx";
import elanzaLogo from "../../assets/images/Elanza.png"
import HeroTitle from "../titles/heroTitle.jsx";
import useSetWinNumber from "../../hooks/setWinNumber.js";


function JackpotSection() {

    const [winIndex , winNumbers] = useSetWinNumber("100")

    return (
        <section className="flex flex-wrap relative  min-h-[70vh] overflow-hidden  p-5  justify-center content-evenly">
            <HeroTitle/>
            <div
                className="w-full  absolute left-[10%] md:left-16 top-[50%] md:top-[35%]  h-[150px] md:h-[300px] flex flex-wrap justify-center items-center  bg-center bg-contain bg-no-repeat bg-jackpot-handler">
            </div>
            <section
                className="relative  bg-hero-pattern bg-contain bg-no-repeat bg-center flex flex-wrap content-between h-[250px]  md:h-[500px] w-[260px]  md:w-[500px] ">
                <div
                    className="w-full  md:mt-[50px] flex flex-wrap justify-center  items-center p-3 h-[100px] ">
                    <img className={"object-cover  md:translate-y-0 md:mt-0 w-2/4 md:w-2/3"} src={elanzaLogo}
                         alt={"Logo elanza"}/>
                </div>
                <div
                    className="w-[72%]  md:w-[70%] h-[60px] md:h-[110px] ps-1  md:ps-4 flex flex-wrap justify-between items-center absolute top-[50.5%] md:top-[52%]  left-[13.5%]">
                    <Jackpot winIndex={winIndex ? winNumbers[0] : false}/>
                    <Jackpot winIndex={winIndex ? winNumbers[1] : false}/>
                    <Jackpot winIndex={winIndex ? winNumbers[2] : false}/>
                </div>
            </section>
        </section>
    )
        ;
}

export default JackpotSection;