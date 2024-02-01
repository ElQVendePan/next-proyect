interface AttractionCardProps {
  name: string;
  image: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ name, image }) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl relative overflow-hidden min-h-[16rem] shadow-2xl hover:shadow-sky-950 duration-200">
      <img src={image} alt="" className="absolute top-0 left-0 object-cover w-full h-full  group-hover/card:w-[120%] duration-200" />
      <div className="bg-gradient-to-b from-transparent to-zinc-900 w-full h-full mr-4 absolute bottom-0 left-0">
        <h2 className="font-bold mb-1 absolute bottom-3 left-3">{name}</h2>
      </div>
    </div>
  )
}

export default AttractionCard