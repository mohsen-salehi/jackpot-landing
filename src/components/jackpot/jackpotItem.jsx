import { useMemo, useState} from 'react';

function JackpotItem({data, winIndex}) {
    const [randomIndex, setRandomIndex] = useState(0)
    useMemo(() => {
        let totalIndex = data?.length
        setInterval(() => {
            setRandomIndex(Math.floor(Math.random() * totalIndex))
        }, 200)
    }, [data]);
    
    return (
        data?.map((item) => (
            <div
                style={{
                    backgroundColor: 'rgba(255,255,255,0.52)',
                    transform: `translateY(-${100 * ( winIndex === 0 ? 0 :  winIndex ? winIndex  : randomIndex)}%)`
                }}
                key={item?.id}
                className="w-full backdrop-blur rounded-xl overflow-hidden flex justify-center items-center p-1 flex-wrap   h-full">
                <img className="object-contain h-full" src={item?.media} alt=""/>
            </div>
        ))
    )
}

export default JackpotItem;