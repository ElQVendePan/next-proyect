import React from 'react'
import StrikingCard from '@/components/DestinationCard'

interface Destination {
    name: string;
    image: string;
    location: string;
    cityId: string;
}

interface DestinationsGridProps {
    destinations: Destination[];
}

const DestinationsGrid: React.FC<DestinationsGridProps> = ({ destinations }) => {
    return (
        <div className=" w-4/5 mx-auto grid grid-cols-3 gap-6">
            {destinations.map((destination) => <StrikingCard name={destination.name} image={destination.image} location={destination.location} link={destination.cityId} />)}
        </div>
    )
}

export default DestinationsGrid