interface WebHeaderProps {
    title: string,
    subtitle?: string,
    image?: string,
    video?: string
}

const WebHeader: React.FC<WebHeaderProps> = ({title, subtitle, image, video}) => {
    return (
        <div className="w-full h-[42rem] overflow-hidden relative ">
            {video ? <video src={video} className="w-full h-full absolute top-0 left-0 object-cover" autoPlay muted loop></video> : <img src={image ? image : "/landing-page.jpg"} className=' absolute w-full h-full object-cover' alt="cover" /> }
            <div className="w-full h-full bg-gradient-to-b from-transparent to-zinc-900 to-100% grid items-center text-center relative">
                <div>
                    <h1 className="text-7xl font-black text-white uppercase">{title}</h1>
                    <p className="mt-4 text-zinc-200">{subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default WebHeader