"use client"

import React, { useEffect, useState } from 'react';
import WebHeader from "@/components/WebHeader";
import PokeDex from "@/components/PokeDex";
import Button from '@/components/Button';
import usePokedexData from '@/hooks/usePokedexData';
import useFetch from '@/hooks/useFetch';

interface Pokemon {
    id: number;
    name: string;
    image: string;
    types: string[];
}

const Page = () => {
    const [pagination, setPagination] = useState(0);
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [totalPokemons, setTotalPokemons] = useState(0);

    const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${pagination}&limit=100`;

    const handlePagination = (value: number) => {
        if (value < 0 && pagination === 0) {
            return;
        }
        setPagination(pagination + value);
    };

    useEffect(() => {
        const fetchPokedexData = async () => {
            try {
                const { count }: { count: number } = await useFetch(pokeApiUrl);
                setTotalPokemons(count);

                const { PokedexList }: { PokedexList: Pokemon[] } = await usePokedexData(pokeApiUrl);
                const sortedPokemonList = PokedexList.sort((a, b) => a.id - b.id);
                setPokemonList(sortedPokemonList);
            } catch (error) {
                console.error('Error fetching pokedex data:', error);
            }
        };

        fetchPokedexData();
    }, [pagination]);

    return (
        <>
            <WebHeader title="Pokedex" image="https://www.chromethemer.com/download/hd-wallpapers/pokemon-3840x2160.jpg" />
            <div className="w-10/12 mx-auto mt-8">
                <div className='text-right'>
                    <span className='mr-6 text-zinc-400'>Mostrando Pokemons {pagination} - {pagination + 100} de {totalPokemons}</span>
                    <div className='inline-block mr-4'>
                        <Button type="button" text="<" onClick={() => handlePagination(-100)} disabled={pagination === 0} />
                    </div>
                    <div className='inline-block'>
                        <Button type="button" text=">" onClick={() => handlePagination(100)} />
                    </div>
                </div>
                {/* Intenté agregar una pantalla de carga con Suspense pero no deja :( */}
                <PokeDex pokemons={pokemonList} />
                <div className='text-right'>
                    <span className='mr-6 text-zinc-400'>Mostrando Pokemons {pagination} - {pagination + 100} de {totalPokemons}</span>
                    <div className='inline-block mr-4'>
                        <Button type="button" text="<" onClick={() => handlePagination(-100)} disabled={pagination === 0} />
                    </div>
                    <div className='inline-block'>
                        <Button type="button" text=">" onClick={() => handlePagination(100)} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;