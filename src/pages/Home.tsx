import { useState, useEffect } from 'react'
import ButtonHomeOni from '../components/home/ButtonHomeOni';
import CardHome from '../components/home/CardHome';
import DropDownLang from '../components/home/DropDownLang';
import Navbar from '../components/home/Navbar.jsx'

function Home() {
    const [pairSeconds, setPairSeconds] = useState<any>(true);
    const [user, setUSer] = useState<any>(localStorage.getItem("user") ? true : false);
    async function changeBg(seconds: number) {
        setPairSeconds(seconds % 10 === 0);
    }


    function setuser() {
        localStorage.setItem("user", "loger")
        setUSer(true);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            const seconds = new Date().getSeconds();
            changeBg(seconds);
        }, 10000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <div className="main-page w-full flex flex-col  bg-[url('./assets/images/bg-home.jpg')] bg-no-repeat bg-fixed bg-cover bg-center transi duration-100  ">

                <Navbar setuser={setuser} />
                {
                    user ? (
                        <div className='flex-col flex justify-center place-items-center mt-40'>
                            <h1 className='lg:text-5xl text-3xl  font-Roboto font-bold text-neutral-800 tracking-widest lg:px-5 px-5 py-5'>Trouvez votre profesionnel en un clic </h1>

                            <div className='flex lg:flex-row flex-col gap-10 w-full h-full justify-center place-items-center'>
                                <div className='flex flex-col'>

                                    <CardHome url={1} text={"À DOMICILE"} />
                                </div>
                                <div className='flex flex-col'>
                                    <div className=' h-28 hidden lg:block'></div>
                                    <CardHome url={2} text={"EN VISIO"} />
                                </div>
                                <div className='flex flex-col '>
                                    <div className='h-40 hidden lg:block'></div>
                                    <CardHome url={3} text={"EN PRESENTIEL"} />
                                </div>

                                <div className=' relative lg:absolute lg:right-32  lg:bottom-20 bottom-10  animate-bounce transition-all duration-1000'>
                                    <ButtonHomeOni text={"à propos"} bold={true} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={`flex-grow w-full grid relative place-content-center justify-items-center  ${pairSeconds ? "md:bg-[url('./assets/images/homme-bg.png')]  bg-[url('./assets/images/homme-bg-small.png')] " : "md:bg-[url('./assets/images/femme-bg.png')] bg-[url('./assets/images/femme-bg-small.png')]"} bg-no-repeat bg-center bg-bottom transition-all duration-500`}>
                            <h1 className='lg:text-6xl text-3xl  font-Roboto font-bold text-neutral-800 tracking-widest lg:px-5 px-5'>Trouvez votre profesionnel en un clic </h1>
                            <div className=' absolute lg:right-32  lg:bottom-20 bottom-10  animate-bounce transition-all duration-1000'>
                                <ButtonHomeOni text={"à propos"} bold={true} />
                            </div>
                        </div>
                    )
                }

            </div>
            <div className="main-page w-full flex flex-col  bg-[url('./assets/images/bg-home.jpg')] bg-no-repeat bg-fixed bg-cover bg-center transi duration-100  "></div>
        </>
    )
}

export default Home;
