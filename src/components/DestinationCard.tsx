import Link from "next/link";

interface StrikingCardProps {
  name: string;
  image: string;
  location?: string;
  addStyles?: string,
  link?: string
}

const StrikingCard: React.FC<StrikingCardProps> = ({ name, image, location, addStyles, link = "#" }) => {
  return (
    <Link href={`http://localhost:3000/destinos/${link}`} className={`${addStyles} group/card bg-zinc-800 p-4 rounded-xl relative overflow-hidden border-2 border-transparent hover:border-sky-400 min-h-[16rem] shadow-2xl hover:shadow-sky-950 duration-200`}>
      <img src={image} alt="" className="absolute top-0 left-0 object-cover w-full h-full  group-hover/card:w-[120%] duration-200" />
      <div className=" group/data bg-zinc-900 bg-opacity-70 backdrop-blur max-w-full mr-4 p-3 rounded-xl absolute bottom-4 min-w-36 hover:bg-sky-600 group-hover/card:min-w-[calc(100%-2rem)] duration-200 cursor-pointer">
        <img src="/icons/marker.png" alt="market" className='w-3 invert absolute opacity-75 bottom-[0.95rem]' />
        <h2 className="font-bold mb-1">{name}</h2>
        <p className="text-xs opacity-75 ml-[1.1rem]">{location}</p>
        <div className="grid items-center absolute h-full right-4 top-0 opacity-0 group-hover/data:opacity-70 duration-200">
          <div>
            <p className="inline-block text-sm mr-2">Ver más</p>
            <img src="http://localhost:3000/icons/arrow.png" className=" invert w-4 inline-block " alt="Activity img" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default StrikingCard