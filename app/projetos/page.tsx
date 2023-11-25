import React from "react";
import background from "../assets/background.svg";
import styles from "./page.module.css";
import Card from "../components/Card/Card";
import Perfil from "../assets/perfil.png";
import Escavatto from "../assets/Escavatto.png";
export default function Page() {
  return (
    <div className={styles.containerBg}>
      <div className="grid place-items-center w-full h-full">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Card 
            ProjectName="ESCAVATTO"
            ProjectDescription="Nullam fermentum nulla nunc, vitae condimentum nisi sodales nec. Phasellus a nulla justo. Nulla metus risus, vehicula at aliquet vel, tempor vel libero. Donec vel luctus eros, ut dapibus eros. Suspendisse ullamcorper mi et elit placerat, blandit pulvinar augue mattis."
            Tags={["React", "NextJS", "TypeScript", "TailwindCSS"]}
            image={Escavatto}
          />
          <Card 
            ProjectName="ESCAVATTO"
            ProjectDescription="Nullam fermentum nulla nunc, vitae condimentum nisi sodales nec. Phasellus a nulla justo. Nulla metus risus, vehicula at aliquet vel, tempor vel libero. Donec vel luctus eros, ut dapibus eros. Suspendisse ullamcorper mi et elit placerat, blandit pulvinar augue mattis."
            Tags={["React", "NextJS", "TypeScript", "TailwindCSS"]}
            image={Escavatto}
          />
          <Card 
            ProjectName="ESCAVATTO"
            ProjectDescription="Nullam fermentum nulla nunc, vitae condimentum nisi sodales nec. Phasellus a nulla justo. Nulla metus risus, vehicula at aliquet vel, tempor vel libero. Donec vel luctus eros, ut dapibus eros. Suspendisse ullamcorper mi et elit placerat, blandit pulvinar augue mattis."
            Tags={["React", "NextJS", "TypeScript", "TailwindCSS"]}
            image={Escavatto}
          />
          <Card 
            ProjectName="ESCAVATTO"
            ProjectDescription="Nullam fermentum nulla nunc, vitae condimentum nisi sodales nec. Phasellus a nulla justo. Nulla metus risus, vehicula at aliquet vel, tempor vel libero. Donec vel luctus eros, ut dapibus eros. Suspendisse ullamcorper mi et elit placerat, blandit pulvinar augue mattis."
            Tags={["React", "NextJS", "TypeScript", "TailwindCSS"]}
            image={Escavatto}
          />
          
        </div>
      </div>
    </div>
  );
}