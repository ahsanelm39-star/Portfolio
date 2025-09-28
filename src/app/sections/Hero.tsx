/// commponent
import Header from "./Header"
/// photos
import Image from 'next/image'
import myPhoto from '../../../public/Images/6708c99d-d3a0-4bbb-abbf-415b188cfe36.png'
import HeroPhoto from '../../../public/Images/person-1.png'
/////icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons"


const Hero = () => {
    return (
        <section className="min-h-[100vh] max-lg:pt-30 bg-[#0f0715] flex justify-center items-center">
            <Header/>
            <div className="collect flex justify-between items-center flex-wrap gap-10 max-lg:flex-col ">
                <div className="w-[58%] max-lg:w-1/1 max-lg:text-center">
                    <div className="relative w-fit pr-3 mb-6 max-lg:mx-auto">
                        <Image src={myPhoto} alt = {"my Photo"} className="w-25 rounded-full"/>
                        <FontAwesomeIcon icon={faSquareCheck} className="w-4 bg-blue-400 rounded-full h-4 absolute right-0 bottom-0 text-white" />
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
        </section>
    )
}

export default Hero