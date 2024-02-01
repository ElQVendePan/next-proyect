interface BasicData {
    title: string,
    description: string,
    image: string,
    imageInvert?: boolean
}

const BasicData: React.FC<BasicData> = ({ title, description, image, imageInvert = true }) => {
    return (
        <div>
            <div className="bg-sky-400 max-w-1/5 mr-5 align-top w-12 aspect-square inline-grid items-center rounded-2xl">
                <img src={image} alt="Card Icon" className={`w-2/4 ${imageInvert ? "invert" : ''} mx-auto`} />
            </div>
            <div className="inline-block w-4/5">
                <b className="text-white">{title}</b>
                <p className="text-sm mt-1">{description}</p>
            </div>
        </div>
    )
}

export default BasicData