import React, {useEffect, useState} from 'react';

function JackpotItem({data , winIndex =  false}) {
    const [randomIndex, setRandomIndex] = useState(0)

    useEffect(() => {
        let totalIndex = data?.length
        setInterval(() => {
            setRandomIndex(Math.floor(Math.random() * totalIndex))
        } , 300)

        }, [data]);


    return (
      data?.map((item) => (
          <div
              style={{
                  backgroundColor : 'rgba(255,255,255,0.52)' ,
                  transform : `translateY(-${100 * (winIndex ? winIndex : randomIndex)}%)`
              }}
              key={item?.id} className="w-full backdrop-blur rounded-xl overflow-hidden flex justify-center items-center p-1 flex-wrap   h-full">
              <img  className="object-contain h-full" src={item?.media} alt=""/>
          </div>
      ))
    )
}

export default JackpotItem;