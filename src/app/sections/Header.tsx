"use client"

/// commponent
import Nave from "./Nave"
/// photos
import Image from 'next/image'
import myPhoto from '../../../public/Images/me.png'
import HeroPhoto from '../../../public/Images/person-1.png'
import Google from '../../../public/Images/google.png'
import Git from '../../../public/Images/git.png'
import Face from '../../../public/Images/face.png'
import Wat from '../../../public/Images/wats.png'
/////icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons"
import Link from "next/link"
import { useEffect } from "react"


const Header = () => {


    useEffect(()=>{
            const text = document.querySelector(".text") as HTMLElement
            text.style.transform='translatey(0)'
            text.style.opacity='1'
            const image = document.querySelector(".image") as HTMLElement
            image.style.transform='translatey(0)'
            image.style.opacity='1'
            const me = document.querySelector(".me") as HTMLElement
            me.style.transform='translatey(0)'
            me.style.opacity='1'
        
    },[])



    return (
        <header id="hero" className="min-h-[100vh] max-lg:pt-28 bg-gradient-to-b from-[#1b0d27] to-[#30285a] flex justify-center items-center">
            <Nave/>
            <div className="collect flex justify-between items-center flex-wrap gap-10 max-lg:flex-col 
            transition duration-500 ">
                <div className="w-[58%] max-lg:w-1/1 max-lg:text-center">
                    <div className="relative w-fit pr-3 mb-8 max-lg:mx-auto max-lg:flex max-lg:items-center max-lg:flex-col me transition duration-700">
                        <Image src={myPhoto} alt = {"my Photo"} className="w-25 rounded-full"/>
                        <FontAwesomeIcon icon={faSquareCheck} className="h-[10px] bg-blue-400 rounded-full absolute
                        right-2 bottom-2 text-white max-lg:bottom-11 max-lg:right-11" />
                        <div className="flex gap-4 items-center absolute -bottom-4 -right-48 max-lg:relative max-lg:-right-2">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ahsan.elm.39@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Image src={Google} alt="gmail" className="w-5 h-5" />
                            </a>

                            <a href="https://github.com/ahsanelm39-star" target="_blank" rel="noopener noreferrer">
                                <Image src={Git} alt="github" className="w-6 h-6" />
                            </a>
                            <a href="https://www.facebook.com/ahmed.mohamed.311371/" target="_blank" rel="noopener noreferrer">
                                <Image src={Face} alt="facebook" className="w-8 h-8" />
                            </a>
                            <a href="https://wa.me/201014453260" target="_blank" rel="noopener noreferrer">
                                <Image src={Wat} alt="whatsapp" className="w-9 h-9 mt-1" />
                            </a>
                        </div>
                    </div>
                    <div className=" transition-all duration-700 text">
                        <h1 className="text-5xl max-md:text-4xl font-bold mb-6 
                        bg-gradient-to-r from-[#9b47e4] to-[#ffffff] text-transparent bg-clip-text
                        ">Hi I&lsquo;am Ahmed Hassan</h1>
                        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#4f47e4] to-[#ffffff] text-transparent bg-clip-text">Front End Developer</h2>
                        <p className="text-[#ccc] text-lg">I create modern, responsive websites with clean code and strong SEO foundations to help businesses stand out online.</p>
                    </div>
                    <Link href={"#contact"}>
                        <button className="bg-gradient-to-r from-[#2e74ca] to-[#8c279b] p-2 text-white
                    rounded-xl cursor-pointer transition duration-300 hover:opacity-80 mt-4">Contact Me</button>
                    </Link>
                </div>
                <div className=" w-[37%] max-lg:w-[400px] max-sm:w-[300px] image transition-all duration-700">
                    <Image src={HeroPhoto} alt = {"Hero photo"} className="w-1/1"/>
                </div>
            </div>
        </header>
    )
}

export default Header