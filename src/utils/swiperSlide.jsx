
import { Swiper, SwiperSlide  } from 'swiper/react';
import 'swiper/css';
import Brand from "../components/banners/brand.jsx";
import "swiper/css/autoplay"
import {Autoplay} from "swiper/modules";

function SwiperSliderComponent({data = []}) {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay : 1500
            }}
            spaceBetween={50}
            slidesPerView={9}
            loop={true}
        >
            {
                data?.map((item , index)=> (
                    <SwiperSlide  key={index}>
                        <Brand title={item?.title} srcImage={item?.image}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default SwiperSliderComponent;

