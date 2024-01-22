import React from 'react';

function MobileInput({register , placeHolder , className}) {
    return (
        <input
            autoFocus
            className={`w-full p-2 text-center h-[48px] rounded-[15px] outline-transparent focus:outline-amber-600 border duration-100 ${className}`}
            placeholder={placeHolder}
            {...register}
        />

    );
}

export default MobileInput;