import { useEffect, useState } from 'react';
import {
    Dropdown,
    Ripple,
    initTE,
} from "tw-elements";

interface lang {
    name: string;
    value: string;
}

function DropDownLang({ color }: any) {
    const [show, setShow] = useState<boolean>(false);
    const [lang, setLang] = useState<string>("FR");

    let langs: lang[] = [{ name: "FR", value: "FR" }, { name: "EN", value: "EN" }];
    useEffect(() => {
    }, []);

    return (
        <div className="relative" data-te-dropdown-ref>
            <button
                onClick={() => setShow(!show)}
                className={`flex items-center whitespace-nowrap rounded bg-transparent px-6 pb-2 pt-2.5  font-medium uppercase leading-normal text-sm ${color ? "text-" + color : " text-white"} transition duration-150 ease-in-out   focus:outline-none focus:ring-0 motion-reduce:transition-none`}>
                {lang}
                <span className="ml-2 w-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </button>
            <ul
                className={`absolute z-[1000] float-left -bottom-16 m-0 ${show ? "block" : "hidden"} min-w-max left-5 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg`}>

                {
                    langs.map((item: lang) => (<li>
                        <p
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-primaryOni hover:bg-neutral-200 cursor-pointer active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparen "
                            onClick={() => {
                                setLang(item.value);
                                setShow(false);
                            }}
                            data-te-dropdown-item-ref
                        >{item.name}</p>
                    </li>))
                }

            </ul>
        </div>
    )
}

export default DropDownLang;
