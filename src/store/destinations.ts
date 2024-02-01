import { create } from 'zustand'

export const useDestinationStore = create((set) => ({
    destinations: [
        {
            name: "Cartagena",
            image: "/destinations/cartagena.jpg",
            location: "Bolivar",
            cityId: "210"
        },
        {
            name: "Neiva",
            image: "/destinations/neiva.jpg",
            location: "Huila",
            cityId: "657"
        },
        {
            name: "Pasto",
            image: "/destinations/pasto.jpg",
            location: "Nariño",
            cityId: "769"
        },
        {
            name: "San Andres Isla",
            image: "/destinations/san-andres.jpg",
            location: "San Andres Isla",
            cityId: "912"
        },
        {
            name: "Santa Marta",
            image: "/destinations/santa-marta.jpg",
            location: "Magdalena",
            cityId: "709"
        },
        {
            name: "Medellín",
            image: "/destinations/medellin.jpg",
            location: "Antioquia",
            cityId: "12"
        },
    ]
}))