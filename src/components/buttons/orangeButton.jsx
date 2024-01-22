function OrangeButton({width = "380", className = '', text , disable = false, event, sibling = null}) {
    return (
        <button
            onClick={event}
            disabled={disable}
            className={`bg-elanza-orange flex flex-wrap items-center justify-center text-white p-3 rounded-20
            duration-100
            h-[66px]
            font-bold
            text-shadow-manual
            text-xl
            active:scale-95 active:opacity-75
            w-[${width}px] ${className}`}>
            {sibling ? (
                <>
                    {sibling}
                    {text}
                </>
            ):(
                <>
                    {text}
                </>
            )}
        </button>

    );
}

export default OrangeButton;