interface PokemonType {
    type: {
        name: string;
    };
}

interface PokemonCardProps {
    name: string;
    types?: PokemonType[];
    image?: string;
    id: string | number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, types, image, id }) => {
    return (
        <div className="relative min-h-40 overflow-hidden bg-zinc-800 rounded-xl p-4 hover:bg-red-900 duration-200">
            <b className="absolute -bottom-2 left-1 text-5xl font-black opacity-[4%]">#{id}</b>
            <div className="absolute right-0 top-0 w-2/4 h-full text-right">
                <img src="/pokeball-icon.png" className="absolute invert opacity-5 -right-1/3 -bottom-1/3" alt="pokeball-icon" />
                <img className="w-40 absolute right-0 -bottom-2" src={image} alt="pokemon-img" />
            </div>
            <div className="inline-block relative">
                <h2 className="mb-3 capitalize font-bold text-lg">{name}</h2>
                {types
                    ? types.map(type => (
                        <span
                            className={`pokemonType ${type.type.name} capitalize inline-block bg-zinc-700 py-1 px-4 rounded-full mr-3 text-sm`}
                            key={type.type.name}
                        >
                            {type.type.name}
                        </span>
                    ))
                    : ""}
            </div>
        </div>
    );
};

export default PokemonCard;
