import React from "react"
import Image, { StaticImageData } from "next/image"
import Perfil from "../../assets/perfil.png"
import Tag from "../Tag/Tag"
interface CardProps {
  ProjectName: string;
  ProjectDescription: string;
  Tags: string[];
  image: StaticImageData;
}

export default function Card({ProjectName, ProjectDescription, Tags, image}: CardProps){
  return(
    <div className="w-[40%] max-w-[774px] min-w-[400px] h-[auto] bg-[#1D192B] p-8 rounded-3xl">
      <div className="flex flex-row gap-8 w-full max-xl:flex-col">
        <Image className=" w-[167px] h-[171px] rounded-3xl self-center" src={image} alt="Perfil" />
        <div className="w-full">
          <h2 className="text-2xl font-Raleway">{ProjectName}</h2>
          <p className="text-sm leading-5 mt-2 text-justify font-Raleway">
            {ProjectDescription}
          </p>
        </div>
      </div>
        <div className="flex flex-row flex-wrap gap-3 mt-4 max-xl:items-center">
          {
            Tags.map((item, index) => {
              return(
                <Tag key={index} name={item} />
              )
            })
          }
        </div>
    </div>
  )
}