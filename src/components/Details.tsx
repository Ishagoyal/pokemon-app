import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const Details = () => {
  const pokemon = useSelector((state: RootState) => state.pokemon.selected);

  if (!pokemon) return <p>Select a Pokémon</p>;

  return (
    <div className="p-4 border rounded shadow">
      <img src={pokemon.sprite} alt={pokemon.species} />
      <h2>{pokemon.species}</h2>
      <p>Number: {pokemon.num}</p>
    </div>
  );
};

export default Details;
