'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../assets/logo.svg"
import { FaSquareGithub,FaLinkedin } from "react-icons/fa6"
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi"
import Perfil from '../../assets/perfil.png';

const Sidebar = () => {

  return(
    <header className='h-full w-full'>
      <nav className='h-full bg-[#310573] sticky overflow-hidden z-10'>
        <ul className='flex flex-col w-full h-full'>
            <Image 
              alt='logo'
              src={Logo}
              width={180}
              height={180}
              className='self-center'
            />
          <Link href={"/"}><li className='mt-10 w-full px-8 py-6 hover:text-[#5E17EB] text-center cursor-pointer'>QUEM SOU</li></Link>
          <Link href={"/projetos"}><li className='w-full px-8 py-6 hover:text-[#5E17EB] text-center cursor-pointer'>PROJETOS</li></Link>
          <Link href={"/habilidades"}><li className='w-full px-8 py-6 hover:text-[#5E17EB] text-center cursor-pointer'>HABILIDADES</li></Link>
          <div className='w-full h-[1px] bg-black'/>
          <li className='mt-4 flex flex-row text-center justify-center gap-x-2'>
            <Link href={"https://github.com/JaksonHZ"} target='_blank'><BiLogoGithub size={28}/></Link>
            <Link href={"https://www.linkedin.com/in/jakson-huang-zheng-a6370b207/"} target='_blank'><BiLogoLinkedin size={28}/></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Sidebar;