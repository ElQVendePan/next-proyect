"use client"

import React, { useEffect, useState } from 'react';
import WebHeader from "@/components/WebHeader";
import AttractionCard from "@/components/AttractionCard";
import { useDestinationStore } from "@/store/destinations";
import { notFound } from "next/navigation";
import useDestinationData from '@/hooks/useDestinationData';
import MainTitles from '@/components/MainTitles';

interface DestinationPage {
    params: {
        destinationId: string;
    };
}

const Page: React.FC<DestinationPage> = ({ params }) => {
    const destinations = useDestinationStore((state: any) => state.destinations);
    const cityId = params.destinationId;
    const destination = destinations.find((destination: any) => String(destination.cityId) === cityId);

    const [destinationData, setDestinationData] = useState({
        description: ""
    });

    const [attractionsList, setAttractionsList] = useState([
        {
            name: "",
            image: "",
            location: ""
        }
    ]);

    useEffect(() => {
        const fetchDestinationData = async () => {
            try {
                const { destinationData, attractionsList } = await useDestinationData(cityId);
                setDestinationData(destinationData);
                setAttractionsList(attractionsList);
            } catch (error) {
                console.error('Error fetching destination data:', error);
            }
        };

        if (destination) {
            fetchDestinationData();
        }
    }, [cityId, destination]);

    if (!destination) {
        notFound();
    }
    return (
        <>
            <WebHeader title={destination.name} subtitle={destination.location} image={destination.image} />
            <p className="mx-auto w-3/5 text-center mt-8 text-zinc-200">{destinationData.description}</p>
            {attractionsList[0] && (
                <>
                    <MainTitles title="Atracciones Turísticas" subtitle={`Descubre lo que puedes hacer en ${destination.name}`} />
                    <div className="w-4/5 mx-auto grid grid-cols-4 gap-6">
                        {attractionsList.map(attraction => (
                            <AttractionCard key={attraction.name} name={attraction.name} image={attraction.image} />
                        ))}
                    </div>
                </>
            )}

        </>
    );
};

export default Page;
