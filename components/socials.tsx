import twitter from "../public/twitter.png"
import discord from "../public/discord.png"
import instagram from "../public/instagram.png"
import Image from "next/image"
import logo from "../public/layerrlogo.png"


function socials(){
    return(
        <section className="flex bg-black flex-col gap-2 items-center lg:flex-row lg:m-8 lg:gap-8 lg:fixed lg:w-full">
        <p className="text-white font-Raleway text-center lg:hidden">Contact Us</p>
        <ul className="flex lg:order-2 gap-2">
        <li>
        <Image src={twitter} alt="twitter" className='w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]'></Image>
        </li>
        <li>
        <Image src={discord} alt="discord" className='w-[30px] h-[30px]  lg:w-[45px] lg:h-[45px]'></Image>
        </li>
        <li>
        <Image src={instagram} alt="instagram" className='w-[30px] h-[30px]  lg:w-[45px] lg:h-[45px]'></Image>
       </li>
        </ul>
        <div className="flex items-center justify-center">
        <Image src={logo} alt="layerr logo" className="w-auto mt-2 order-1 h-[20px] md:h-[30px]  lg:h-[30px]"></Image>
        </div>
        </section>
    )
}

export default socials