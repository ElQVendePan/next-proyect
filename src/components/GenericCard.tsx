interface GenericCardProps {
    title?: string,
    subtitle?: string,
    description?: string,
    img?: string,
}

const GenericCard: React.FC<GenericCardProps> = ({ title = "", subtitle = "", description = "", img = "" }) => {
    return (
        <div className='bg-zinc-800 p-6 rounded-2xl pb-20 border-zinc-800 border-2 shadow-2xl hover:shadow-sky-950 hover:border-sky-400 duration-200 group'>
            <div className='overflow-hidden w-14 h-14 grid items-center rounded-[1.25rem] bg-zinc-700 group-hover:bg-sky-600 duration-200'>
                <div className=' invert absolute w-7 inline-block ml-[0.875rem]'>
                    <img src={img} alt="Card Icon" />
                </div>
            </div>
            <h2 className='font-bold mt-7 text-lg'>{title}</h2>
            {subtitle ? <p className=" text-sm text-zinc-400 mb-6 ">{subtitle}</p> : null}
            <p className='text-zinc-300 text-sm mt-6'>{description}</p>
        </div>
    )
}

export default GenericCard;