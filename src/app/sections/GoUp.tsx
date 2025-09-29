"use client"

import { faCircleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"


const GoUp = () => {


    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            const arow = document.querySelector(".arow") as HTMLElement
            if(scrollY > 500){
                arow.classList.add("show")
            }else{
                arow.classList.remove("show")
            }
        })
    },[])


    return ( 
        <div onClick={()=>{
            window.scrollTo(0,0)
        }} className="arow go-up fixed bottom-4 -right-12 bg-gradient-to-r from-[#9b47e4] to-[#2259ab] rounded-full text-2xl p-1 cursor-pointer text-[#ddd]">
            <FontAwesomeIcon icon={faCircleUp} />
        </div>
    )
}

export default GoUp