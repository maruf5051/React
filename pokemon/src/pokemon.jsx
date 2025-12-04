import { useState, useEffect } from "react";
import "./index.css";
import { PokemonCard } from "./pokemonCard";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]); // State to hold Pokémon data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [search, setSearch] = useState(""); // search state

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

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

  // search functionality
  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

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
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {searchData.map((curPokemon) => {
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
