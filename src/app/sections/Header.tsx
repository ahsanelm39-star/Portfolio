/// commponent
import Header from "./Nave"
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
import { faDigitalTachograph, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"


const Hero = () => {
    return (
        <header id="hero" className="min-h-[100vh] max-lg:pt-28 bg-[#1b0d27] flex justify-center items-center">
            <Header/>
            <div className="collect flex justify-between items-center flex-wrap gap-10 max-lg:flex-col ">
                <div className="w-[58%] max-lg:w-1/1 max-lg:text-center">
                    <div className="relative w-fit pr-3 mb-6 max-lg:mx-auto">
                        <Image src={myPhoto} alt = {"my Photo"} className="w-25 rounded-full"/>
                        <FontAwesomeIcon icon={faSquareCheck} className="w-4 bg-blue-400 rounded-full h-4 absolute right-0 bottom-0 text-white" />
                        <div className="flex gap-4 items-center absolute -bottom-4 -right-60">
                            <Link target="blank" href={"https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com/mail/&service=mail&ec=GBRAFw"}>
                                <Image src={Google} alt="gogle" className="w-6 h-6"/>
                            </Link>
                            <Link target="blank" href={"https://github.com/ahsanelm39-star"}>
                                <Image src={Git} alt="github" className="w-8 h-8"/>
                            </Link>
                            <Link target="blank" href={"https://www.facebook.com/ahmed.mohamed.311371/"}>
                                <Image src={Face} alt="facebocke" className="w-9 h-9"/>
                            </Link>
                            <Link target="blank" href={""}>
                                <Image src={Wat} alt="wats app" className="w-10 h-10 mt-1"/>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl max-md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#9b47e4] to-[#ffffff] text-transparent bg-clip-text">Hi I`am Ahmed Hassan</h1>
                        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#4f47e4] to-[#ffffff] text-transparent bg-clip-text">Front End Developer</h2>
                        <p className="text-[#ccc] text-lg">I create modern, responsive websites with clean code and strong SEO foundations to help businesses stand out online.</p>
                    </div>
                </div>
                <div className=" w-[37%] max-lg:w-[400px] max-sm:w-[300px]">
                    <Image src={HeroPhoto} alt = {"Hero photo"} className="w-1/1"/>
                </div>
            </div>
        </header>
    )
}

export default Hero