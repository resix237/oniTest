import React from 'react';
import {
    Ripple,
    initTE,
} from "tw-elements";

initTE({ Ripple });

function CardHome({ url, text }: any) {
    return (
        <div className={`lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]  flex flex-col justify-center mx-5`}>
            <div className={`${url === 1 ? "bg-[url('./assets/images/domicile.jpeg')]" : url === 2 ? "bg-[url('./assets/images/visio.jpeg')]" : "bg-[url('./assets/images/present.jpeg')]"}  bg-no-repeat bg-cover bg-center w-full h-5/6 rounded-lg drop-shadow-2xl hover:drop-shadow-md cursor-pointer shadow-2xl`}>

            </div>
            <p className=' text-2xl font-Roboto tracking-[.20em] text-black font-semibold text-center py-5 cursor-pointer'>{text}</p>
        </div>
    )
}

export default CardHome;
