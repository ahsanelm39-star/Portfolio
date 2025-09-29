"use client"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [active, setActive] = useState("#hero")

    const links = [
        { href: "#hero", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ]

    return (
        <nav className="nave text-[#ccc] font-bold text-lg max-sm:text-[16px] w-fit py-4 fixed top-4 left-[50%] 
        translate-x-[-50%] rounded-full border border-[#eee] px-2 border-l-[#c07ded] border-r-[#c07ded] 
        z-50 backdrop-blur-sm">
        
        {links.map((link) => (
            <Link
            key={link.href}
            href={link.href}
            onClick={() => setActive(link.href)}
            className={`px-4 max-sm:px-2 cursor-pointer transition-all hover:text-[#b08dc7] ${
                active === link.href ? "on" : ""
            }`}
            >
            {link.label}
            </Link>
        ))}
        </nav>
    )
}

export default Header
