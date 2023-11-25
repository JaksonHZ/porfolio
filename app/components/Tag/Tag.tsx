
interface TagProps {
  name: string;
}

export default function Tag({name}: TagProps){
  return(
    <div className="px-6 bg-[rgba(208, 188, 255, 0.12)] h-7 grid items-center border border-[#D0BCFF] border-solid rounded-full hover:bg-[#D0BCFF]">
      <p className="text-xs font-semibold text-[#D0BCFF] hover:text-black">{name}</p>
    </div>
  )
}