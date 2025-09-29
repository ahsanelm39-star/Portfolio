import Image from "next/image"
import Computer from '../../../public/Images/computer.png'
import Ecommerce from '../../../public/Images/Ecommerce.png'
import APIs from '../../../public/Images/api.png'
import User from '../../../public/Images/user.png'
import Real from '../../../public/Images/realTime.png'
import Spead from '../../../public/Images/spead.png'
import Web from '../../../public/Images/web.png'

const Services = () => {

  const data = [
    {
      img:Computer,
      title:"Web Applications",
      dis:"Tailored web apps built with the latest technologies."
    },
    {
      img:Ecommerce,
      title:"E-commerce Websites",
      dis:"Secure online stores with user-friendly shopping and payments."
    },
    {
      img:APIs,
      title:"API Integration",
      dis:"Engaging, responsive front-end designs for better user experiences."
    },
    {
      img:Real,
      title:"Real-Time Features",
      dis:"Add live chat, notifications, and real-time data updates."
    },
    {
      img:Spead,
      title:"Speed Optimization",
      dis:"Boost performance with faster load times and optimization."
    },
    {
      img:Web,
      title:"Web Applications",
      dis:"Tailored web apps built with the latest technologies."
    },
    {
      img:User,
      title:"Website Management",
      dis:"Easy content management systems with flexible controls."
    },
    
  ]

  const dataList = data.map((serve,index)=>{
    return (
      <div key={index} className="box border-2 border-[#0f0715] hover: transition duration-300 p-6 flex flex-col gap-4 bg-[#7246ca] w-[300px] rounded-xl">
        <Image src={serve.img} alt={serve.title} className={`w-17 ${serve.title == "Website Management" ? "w-22" :""} `} />
        <h3 className=" bg-gradient-to-r from-[#1d187a] to-[#5f1183] text-transparent bg-clip-text font-bold text-2xl">{serve.title}</h3>
        <p className="text-white">{serve.dis}</p>
      </div>
    )
  })


  return (
    <section id="services" className="min-h-[100vh] bg-[#130321] py-14 pt-22">
      <h2 className="text-white bg-[#1c6dc5] w-fit p-4 mx-auto font-[500] text-3xl -rotate-11 mb-24">My Services</h2>
      <div className="collect flex flex-wrap gap-6 justify-center items-center up">
        {dataList}
      </div>
    </section>
  )
}

export default Services