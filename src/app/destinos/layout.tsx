"use client"

import React, { ReactNode } from 'react';
import MainTitles from '@/components/MainTitles'
import DestinationsGrid from '@/components/DestinationsGrid'
import { useDestinationStore } from "@/store/destinations";

interface DestinosLayoutProps {
    children: ReactNode;
}

function DestinosLayout({children}: DestinosLayoutProps) {
    const destinations = useDestinationStore((state:any) => state.destinations)
    return (
        <>
            {children}
            <MainTitles title="Destinos Nacionales" subtitle='Embárcate en una aventura única y descubre la magia que Colombia tiene para ofrecer' />
            <DestinationsGrid destinations={destinations} />
        </>
    )
}

export default DestinosLayout;