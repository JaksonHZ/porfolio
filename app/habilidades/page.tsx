import React from "react";
import background from "../assets/background.svg";
import styles from "./page.module.css";
import Image from "next/image";
import C from "../assets/c.png";
import CPP from "../assets/cpp.png";
import CSS from "../assets/CSS3.png";
import Docker from "../assets/docker.png";
import Figma from "../assets/figma.svg";
import HTML from "../assets/HTML5.png";
import JS from "../assets/JavaScript.png";
import Nodejs from "../assets/nodejs.png";
import Python from "../assets/python.svg";
import react from "../assets/React.svg";
import tailwind from "../assets/tailwind.svg";
import typeScript from "../assets/Typescript.png";

export default function Page() {
  return (
    <div className={styles.containerBg}>
      <div className="grid place-items-center w-full h-full">
        <div className="flex flex-wrap items-center justify-center gap-10">
          <div className="grid place-items-center gap-4">
            <Image src={HTML} alt="HTML5" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">HTML 5</span>
          </div>
          <div className="grid place-items-center gap-4">
            <Image src={CSS} alt="CSS3" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">CSS 3</span>
          </div>
          <div className="grid place-items-center gap-4">
            <Image src={react} alt="React" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">React</span>
          </div>
          <div className="grid place-items-center gap-4">
            <Image src={tailwind} alt="TailwindCSS" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">TailwindCSS</span>
          </div>
          <div className="grid place-items-center gap-4">
            <Image src={Figma} alt="Figma" width={100} height={100}/>
            <span className="font-Raleway font-bold text-base">Figma</span>
          </div>
          <div className="grid place-items-center gap-4">
            <Image src={JS} alt="JS" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">JavaScript</span>
          </div>
          <div className="grid place-items-center gap-4">
            <Image src={typeScript} alt="TS" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">Typescript</span>
          </div>
          <div className="grid place-items-center gap-4">
            <Image src={Python} alt="Python" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">Python</span>
          </div>

          <div className="grid place-items-center gap-4">
            <Image src={C} alt="C" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">Linguagem C</span>
          </div>

          <div className="grid place-items-center gap-4">
            <Image src={CPP} alt="C++" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">Linguagem C++</span>
          </div>

          <div className="grid place-items-center gap-4">
            <Image src={Nodejs} alt="NodeJS" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">NodeJS</span>
          </div>

          <div className="grid place-items-center gap-4">
            <Image src={Docker} alt="Docker" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">Docker</span>
          </div>
        </div>
      </div>
    </div>
  );
}