import { useState, useEffect } from "react";
import "./index.css";
import { PokemonCard } from "./pokemonCard";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null); // State to hold Pokémon data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const API = "https://pokeapi.co/api/v2/pokemon?limit=200";

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const response = await fetch(curPokemon.url);
        const data = await response.json();
        return data;
      });

      const detailedResponse = await Promise.all(detailedPokemonData);
      console.log(detailedResponse);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const getPokemon = async () => {
      await fetchPokemon();
    };
    getPokemon();
  }, []);

  /* useEffect(() => {
    fetchPokemon();
  }, []); */

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <div>
          <ul className="cards">
            {pokemon.map((curPokemon) => {
              return (
                <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
