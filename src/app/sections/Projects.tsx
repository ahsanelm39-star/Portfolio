
////images
import Image from "next/image"
import Github from '../../../public/Images/git.png'
///component
import Building from '../../../public/Images/building.png'
import Allwakel from '../../../public/Images/alwakel.png'
import Clinic from '../../../public/Images/clinic.png'
import Hospital from '../../../public/Images/hospital.png'
import SaaS from '../../../public/Images/saas.png'
///link
import Link from "next/link"
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Projects = () => {

    const data = [
        {
            img:Building,
            name:"Building app",
            link:"https://building-app-five.vercel.app/",
            git:"https://github.com/ahsanelm39-star/building"
        },
        {
            img:Clinic,
            name:"Clinic app",
            link:"https://clinic-01.netlify.app/",
            git:"https://github.com/ahsanelm39-star/clinic-app"
        },
        {
            img:Allwakel,
            name:"Allwakel app",
            link:"https://all-wakel-01.netlify.app/",
            git:"https://github.com/ahsanelm39-star/Programming-company"
        },
        {
            img:SaaS,
            name:"SaaS app",
            link:"https://landing-page-one-pearl-53.vercel.app/",
            git:"https://github.com/ahsanelm39-star/SaaS-landing-page-01"
        },
        {
            img:Hospital,
            name:"Hospital app",
            link:"https://html-css-project-silk.vercel.app/",
            git:"https://github.com/ahsanelm39-star/HTML-CSS-Project"
        },
    ]

    const dataList = data.map((project,index)=>{
        return (
            <div key={index} className="w-[300px] max-sm:w-1/1 box  bg-gradient-to-r from-[#9b47e45d] to-[#2259ab76] p-4 rounded-md
            hover:border-2 hover:border-blue-300 transition duration-400 
            ">
                <Image src={project.img} alt={project.name} className="border-3 border-b-white mb-4"/>
                <div className="flex justify-between mt-2">
                    <h3 className="font-bold text-xl bg-gradient-to-r from-[#4795e4] to-[#ffffff] text-transparent bg-clip-text ">{project.name}</h3>
                    <div className="flex gap-4 items-center">
                        <Link href={project.link} target="blank">
                            <div className="flex gap-4 cursor-pointer">
                                <span  className="text-sm font-bold text-blue-400 visit">Visit</span>
                                <FontAwesomeIcon icon={faArrowTrendUp} className="text-sm font-bold text-blue-400"/>
                            </div>
                        </Link>
                        <Link href={project.git} target="blank"><Image src={Github} alt="github" className="w-6" /></Link>
                    </div>
                </div>
                    <p className="text-white mt-4 tracking-tight">A modern, responsive website designed with clean code and a focus on user experience.</p>
            </div>
        )
    })

    return (
        <section id="projects" className="bg-gradient-to-b from-[#2e2659] to-[#1b0d27] min-h-[100vh] py-14 max-sm:pt-30 sm:pt-0 pb-27 -my-10">
            <h2 className="text-white bg-[#1c6dc5] w-fit p-4 mx-auto font-[500] text-3xl rounded-md mb-24">My Projects</h2>
            <div className="collect flex flex-wrap gap-6 justify-center items-center up">
                {dataList}
            </div>
        </section>
    )
}

export default Projects