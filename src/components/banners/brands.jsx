import SwiperSliderComponent from "../../utils/swiperSlide.jsx";


function Brands() {

    let mockData = [
        {id : 0 , title : "brand 1 " , image : "https://static.elanza.com/media/brand/lo1go/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 1 , title : "brand 2 " , image : "https://static.elanza.com/media/brand/lo1go/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 2 , title : "brand 3 " , image : "https://static.elanza.com/media/brand/lo1go/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 3 , title : "brand 4 " , image : "https://static.elanza.com/media/brand/lo1go/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 4 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/lo1go/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 5 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/lo1go/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 6 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/lo1go/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 7 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/lo1go/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 8 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/lo1go/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 9 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/lo1go/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 10 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/l1ogo/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 11 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/l1ogo/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 12 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/l1ogo/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 13 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/l1ogo/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 14 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/l1ogo/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 15 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/l1ogo/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
        {id : 16 , title : "brand 5 " , image : "https://static.elanza.com/media/brand/l1ogo/2022/02/26/50085/conversions/734bd4072b9e8d36444894a5791f2a75-thumb.jpg"} ,
    ]


    return (
        <footer className="w-full hidden md:flex flex-wrap  p-2 ">
            <h4 dir="rtl" className="m-0 text-shadow-manual text-3xl text-white flex w-full justify-center items-center py-10 font-bold">
                شب طولانی الانزا با یک دقیقه تخفیف بیشتر!
            </h4>
            <section className="w-full flex py-20 flex-wrap p-2 ">

               <SwiperSliderComponent data={mockData}/>


            </section>
        </footer>
    );
}

export default Brands;