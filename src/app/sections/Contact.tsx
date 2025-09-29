import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"


const Contact = () => {
    return (
        <section className="py-14 bg-[#0f0715]">
            <div className="collect flex justify-between items-center gap-6">
                <div className="flex flex-col gap-8">
                    <div className="flex gap-6 items-center">
                        <FontAwesomeIcon icon={faPhone} className=" w-15 text-white bg-gradient-to-l 
                        from-[#9ac371] to-[#267e4e] p-3 rounded-full"/>
                        <div className="flex gap-1 flex-col">
                            <span className="text-white text-2xl font-bold">Phone</span>
                            <span className="text-white">01014453260</span>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="  w-15 text-white bg-gradient-to-l 
                        from-[#9ac371] to-[#267e4e] p-3 rounded-full"/>
                        <div className="flex gap-1 flex-col">
                            <span className="text-white text-2xl font-bold">Email</span>
                            <span className="text-white">ahsan.elm.39@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center">
                        <FontAwesomeIcon icon={faMapLocationDot} className="  w-15 text-white bg-gradient-to-l 
                        from-[#9ac371] to-[#267e4e] p-3 rounded-full"/>
                        <div className="flex gap-1 flex-col">
                            <span className="text-white text-2xl font-bold">Address</span>
                            <span className="text-white">Egypt , Alexandria</span>
                        </div>
                    </div>
                </div>
                <form className="p-8 bg-[#08010e] rounded-xl w-[500px]">
                    <h2 className="text-4xl max-sm:text-3xl bg-gradient-to-r from-[#9b47e4] to-[#ffffff] text-transparent bg-clip-text
                    font-bold mb-4
                    ">Let's work together!</h2>
                    <p className="text-white mb-6">I’d be happy to discuss your project and explore how we can work together.</p>
                    <div className="flex gap-4 mb-4 justify-between">
                        <input type="text" className="w-[48%] h-[40px] bg-[#0f0715] pl-4 outline-0 caret-amber-50 text-[#cbe1ff]" placeholder="First Nmae"/>
                        <input type="text" className="w-[48%] h-[40px] bg-[#0f0715] pl-4 outline-0 caret-amber-50 text-[#cbe1ff]" placeholder="Last Nmae"/>
                    </div>
                    <div className="flex gap-4 mb-4 justify-between">
                        <input type="text" className="w-[48%] h-[40px] bg-[#0f0715] pl-4 outline-0 caret-amber-50 text-[#cbe1ff]" placeholder="Email address"/>
                        <input type="text" className="w-[48%] h-[40px] bg-[#0f0715] pl-4 outline-0 caret-amber-50 text-[#cbe1ff]" placeholder="Phone Number"/>
                    </div>
                    <textarea className="mb-4 w-1/1 h-[150px] bg-[#0f0715] pl-4 outline-0 caret-amber-50 text-[#cbe1ff]" placeholder="Message"></textarea>
                    <button className="bg-gradient-to-r from-[#2e74ca] to-[#8c279b] p-2 text-white
                    rounded-xl cursor-pointer transition duration-300 hover:opacity-80">Send Message</button>
                </form>
                
            </div>
        </section>
    )
}

export default Contact