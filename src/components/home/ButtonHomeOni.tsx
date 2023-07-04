import React from 'react'

function ButtonHomeOni({ text, bold, onClick }: any) {
    return (
        <div onClick={onClick ? onClick : null} className={`flex justify-items-center place-content-center font-Roboto w-40 ${bold ? "font-bold text-lg" : "font-semibold"}  py-2 rounded-full bg-white text-primaryOni uppercase text-sm shadow-md active:bg-primaryOni active:text-white cursor-pointer mx-3 lg:my-0 my-2 tracking-widest `}>
            <p>{text}</p>
        </div>
    )
}

export default ButtonHomeOni;
