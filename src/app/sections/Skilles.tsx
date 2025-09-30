import Image from "next/image"
import React from '../../../public/Images/rect.png'
import Css from '../../../public/Images/css.png'
import Java from '../../../public/Images/js.png'
import Type from '../../../public/Images/type.png'
import Html from '../../../public/Images/html.png'
import Tailwind from '../../../public/Images/tailwind.png'
import Next from '../../../public/Images/next.png'
import Github from '../../../public/Images/git.png'
import Command from '../../../public/Images/command.png'
import Firebas from '../../../public/Images/fire.png'
import Apis from '../../../public/Images/api.png'

const Skilles = () => {

    const data = [
        {
            icon:Css,
            name:"CSS",
            persent:"96%"
        },
        {
            icon:React,
            name:"React",
            persent:"94%"
        },
        {
            icon:Github,
            name:"Github",
            persent:"90%"
        },
        
        {
            icon:Type,
            name:"TypeScript",
            persent:"90%"
        },
        {
            icon:Html,
            name:"HTML",
            persent:"98%"
        },
        {
            icon:Tailwind,
            name:"Tailwind CSS",
            persent:"90%"
        },
        {
            icon:Next,
            name:"Next JS",
            persent:"94%"
        },
        {
            icon:Java,
            name:"JavaScript",
            persent:"92%"
        },
        {
            icon:Command,
            name:"Command Line",
            persent:"88%"
        },
        {
            icon:Firebas,
            name:"Firebase",
            persent:"93%"
        },
        {
            icon:Apis,
            name:"API's",
            persent:"98%"
        },
    ]

    const dataList = data.map((skill,index)=>{
        return (
            <div key={index} className="min-w-[150px] p-4 bg-[#111827] 
            flex flex-col items-center justify-center gap-4 rounded-xl skill-box transition-all duration-400 hover:bg-[#1c6dc5]">
                <Image src = {skill.icon} alt = {skill.name}  className="w-20 bg-transparent"/>
                <span className="text-xl font-bold text-white">{skill.name}</span>
                <div className="bg-[#0b0b0bc1] p-2 text-center w-1/1 rounded-xl">
                    <span className="text-[#7a7a7a] font-bold">{skill.persent}</span>
                </div>
            </div>
        )
    })

    return (
        <section id="skills" className="bg-gradient-to-b from-[#1b0d27] to-[#30285a] min-h-[100vh] py-14 pt-22" >
            <h2 className="text-white bg-[#1c6dc5] w-fit p-4 mx-auto font-[500] text-3xl rounded-md mb-20">My Skills</h2>
            <div className="collect  overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] max-sm:[mask-image:linear-gradient(to_bottom,transparent,black,transparent)]">
                <div className="flex gap-6 main-skill  max-sm:flex-col max-sm:w-1/1 max-sm:h-250 ">
                    {dataList}
                    {dataList}
                    {dataList}
                    {dataList}
                    {dataList}
                </div>
            </div>
        </section>
    )
}

export default Skilles