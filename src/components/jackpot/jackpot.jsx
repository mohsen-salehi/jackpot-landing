import {images} from "../../../static-data.js";
import JackpotItem from "./jackpotItem.jsx";

function Jackpot({winIndex}) {
    return (
        <section id='jackpot-section'
                 className="w-[30%] md:w-[25%] px-2 h-[60px] overflow-hidden md:h-[100px] flex justify-center flex-wrap items-center ">
            <JackpotItem winIndex={winIndex} data={images}/>
        </section>
    );
}

export default Jackpot;


{/*<div id="jackpot-item" className="w-full flex justify-center items-center">*/
}
{/*    <div className="w-[50px] md:w-[80px] h-[60px] md:h-[110px]   rounded flex flex-wrap p-2 justify-evenly">*/
}
{/*        <div className=" h-full w-[60px]">*/
}
{/*            <img*/
}
{/*                className=" w-full h-full"*/
}
{/*                src="/5.png"*/
}
{/*                alt=""*/
}
{/*            />*/
}
{/*        </div>*/
}
{/*    </div>*/
}
{/*</div>*/
}