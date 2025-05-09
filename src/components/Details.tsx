import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const Details = () => {
  const pokemon = useSelector((state: RootState) => state.pokemon.selected);

  if (!pokemon) {
    return (
      <div className="bg-white border rounded-xl shadow p-6 h-full flex items-center justify-center text-gray-500">
        Select a Pokémon to see details
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-xl shadow p-6 flex flex-col items-center text-center">
      <img
        src={pokemon.sprite}
        alt={pokemon.species}
        className="w-32 h-32 object-contain mb-4 drop-shadow"
      />
      <h2 className="text-2xl font-bold text-indigo-700 mb-2">
        {pokemon.species}
      </h2>
      <p className="text-sm text-gray-600 mb-2">Dex Number: #{pokemon.num}</p>

      <div className="mt-4 text-left w-full">
        <p className="text-md text-gray-800 mb-1">
          <span className="font-semibold">Key:</span> {pokemon.key}
        </p>
        {/* You can expand this with more fields like types, abilities, etc. if available */}
      </div>
    </div>
  );
};

export default Details;
