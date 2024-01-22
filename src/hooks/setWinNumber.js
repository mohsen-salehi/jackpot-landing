import {useEffect, useState} from 'react';

function useSetWinNumber(number) {
    const [winIndex, setWinIndex] = useState(false)
    const [winNumbers, setWinNumbers] = useState([])


    useEffect(() => {
        setTimeout(() => {
            setWinIndex(number)
            setWinNumbers(Array.from(String(winIndex), Number))
        }, 3000)
    }, [winIndex]);

    return [winIndex , winNumbers]
}

export default useSetWinNumber;