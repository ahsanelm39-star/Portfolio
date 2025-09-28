import Link from "next/link"

const Header = () => {
    return (
        <nav className="
            text-[#ccc] font-bold text-lg max-sm:text-[16px] w-fit py-4 fixed top-4 left-[50%]
        translate-x-[-50%] rounded-full border border-[#eee] px-2 border-l-[#c07ded]
        border-r-[#c07ded] z-50
        ">
            <Link href={"#Hero"} className="on px-4 max-sm:px-2 cursor-pointer hover:text-[#b08dc7] transition-all">
                Home
            </Link>
            <Link href={"#services"} className="px-4 max-sm:px-2 cursor-pointer hover:text-[#b08dc7] transition-all">
                Services
            </Link>
            <Link href={"#skills"} className="px-4 max-sm:px-2 cursor-pointer hover:text-[#b08dc7] transition-all">
                Skills
            </Link>
            <Link href={"#projects"} className="px-4 max-sm:px-2 cursor-pointer hover:text-[#b08dc7] transition-all">
                Projects
            </Link>
            <Link href={"#contact"} className="px-4 max-sm:px-2 cursor-pointer hover:text-[#b08dc7] transition-all">
                Contact
            </Link>
        </nav>
    )
}

export default Header