'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Logo from "./assets/logo.svg"
import { FaSquareGithub,FaLinkedin } from "react-icons/fa6"
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi"
import Perfil from './assets/perfil.png';
import WhoIAm from './components/WhoIAm/WhoIAm';
export default function Home() {

  const [loaded, setLoaded] = useState(false);
  const [option, setOption] = useState("none");

  useEffect(() => {
    setLoaded(true);
  }, []);


  return (
    <WhoIAm />
  )
}
