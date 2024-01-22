import React from 'react';

function ButtonLink({text , className , link}) {
    return (
        <a href={`/${link}`} className={`text-shadow-manual font-bold text-white ${className}`}>{text}</a>
    );
}

export default ButtonLink;