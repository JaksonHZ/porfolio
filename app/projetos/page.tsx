import React from "react";
import background from "../assets/background.svg";
import styles from "./page.module.css";
import Card from "../components/Card/Card";
import Perfil from "../assets/perfil.png";
import Escavatto from "../assets/Escavatto.svg";
import Cazappi from "../assets/Cazappi.svg";
import Farmacia from "../assets/Farmacia.svg";
import Viva from "../assets/Viva.jpeg";
export default function Page() {
  return (
    <div className={styles.containerBg}>
      <div className="grid place-items-center w-full h-full">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Card 
            ProjectName="ESCAVATTO"
            ProjectDescription="Projeto de um sistema capaz de alugar máquinas pesadas para construção civil. O sistema é capaz de gerenciar os aluguéis, as máquinas e os clientes."
            Tags={["React", "TypeScript", "SCSS", "SASS"]}
            image={Escavatto}
          />
          <Card 
            ProjectName="CAZAPPI"
            ProjectDescription="Projeto de um sistema de marketplace de produtos alimenticios com entregas a domicilio. O sistema é capaz de gerenciar os produtos, os pedidos, os clientese e os lojistas."
            Tags={["React Native", "Expo", "JavaScript", "NodeJS"]}
            image={Cazappi}
          />
          <Card 
            ProjectName="+VIDA"
            ProjectDescription="Projeto de um sistema de recomendações médicas com base na medicina oriental. O sistema é capas de gerenciar os profissionais de saúde e os tratamentos."
            Tags={["React Native", "Expo", "JavaScript", "NodeJS"]}
            image={Viva}
          />
          <Card 
            ProjectName="FARMÁCIA DA CONSTRUCÃO"
            ProjectDescription="Projeto de um sistema marketplace que conecta lojistas de materiais de construção com clientes. O sistema é capaz de gerenciar os produtos, os pedidos, os clientes e os lojistas."
            Tags={["React", "Vite", "TypeScript", "CSS"]}
            image={Farmacia}
          />
          
        </div>
      </div>
    </div>
  );
}