import React from "react";
import background from "../assets/background.svg";
import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <div className={styles.containerBg}>
      <div className="grid place-items-center w-full h-full">
        <div className="flex flex-wrap items-center justify-center gap-24">
          <div className="grid place-items-center gap-4">
            <img src="https://logospng.org/download/html-5/logo-html-5-1024.png" alt="HTML5" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">HTML 5</span>
          </div>
          <div className="grid place-items-center gap-4">
            <img src={"https://logospng.org/download/css-3/logo-css-3-1024.png"} alt="CSS3" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">CSS 3</span>
          </div>
          <div className="grid place-items-center gap-4">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"} alt="React" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">React</span>
          </div>
          <div className="grid place-items-center gap-4">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"} alt="TailwindCSS" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">TailwindCSS</span>
          </div>
          <div className="grid place-items-center gap-4">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"} alt="Figma" width={100} height={100}/>
            <span className="font-Raleway font-bold text-base">Figma</span>
          </div>
          <div className="grid place-items-center gap-4">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} alt="JS" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">JavaScript</span>
          </div>
          <div className="grid place-items-center gap-4">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"} alt="TS" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">Typescript</span>
          </div>
          <div className="grid place-items-center gap-4">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"} alt="Python" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">Python</span>
          </div>

          <div className="grid place-items-center gap-4">
            <img src={"https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png"} alt="C" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">Linguagem C</span>
          </div>

          <div className="grid place-items-center gap-4">
            <img src={"https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png"} alt="C++" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">Linguagem C++</span>
          </div>

          <div className="grid place-items-center gap-4">
            <img src={"https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_original_wordmark_logo_icon_146412.png"} alt="NodeJS" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">NodeJS</span>
          </div>

          <div className="grid place-items-center gap-4">
            <img src={"https://cdn.icon-icons.com/icons2/2415/PNG/512/docker_original_wordmark_logo_icon_146557.png"} alt="Docker" width={200} height={200}/>
            <span className="font-Raleway font-bold text-base">Docker</span>
          </div>
        </div>
      </div>
    </div>
  );
}