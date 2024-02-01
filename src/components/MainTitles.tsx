interface MainTitlesProps {
    title: string;
    subtitle?: string;
}

const MainTitles: React.FC<MainTitlesProps> = ({ title, subtitle }) => {
    return (
        <div className="text-center my-20">
            <h2 className="font-extrabold text-4xl">{title}</h2>
            {subtitle && <p className="text-zinc-400 mt-1">{subtitle}</p>}
        </div>
    );
};

export default MainTitles;
