import React from "react";
import styles from "./WhoIAm.module.css";
import Image from "next/image";
import Perfil2 from "../../assets/perfil3.jpg";
const WhoIAm = () => {
  return(
    <div className={styles.containerBg}>
      <section className="flex items-center justify-center h-[100vh] gap-10">
        <div className="flex flex-col items-center justify-center">
          <Image src={Perfil2} alt="Jak" width={200} height={220} className={styles.perfil} />
        </div>
        <div className="flex flex-col">
          <p className="text-5xl font-bold font-Raleway">Olá👋, eu sou Jak</p>
          <p className="w-96 text-right text-lg font-semibold font-Raleway"> um desenvolvedor frontend apaixonado por tecnologia e inspirado em fazer interfaces limpas e intuitivas</p>
        </div>
      </section>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
          58-18 88-18s
          58 18 88 18 
          58-18 88-18 
          58 18 88 18
          v44h-352z"
          />
        </defs>
        <g className={styles.waves}>
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="0"
            fill="#5E17EB"
            fillOpacity=".2"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="3"
            fill="#5E17EB"
            fillOpacity=".5"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="6"
            fill="#5E17EB"
            fillOpacity=".9"
          />
        </g>
      </svg>
    </div>

  )
}

export default WhoIAm;