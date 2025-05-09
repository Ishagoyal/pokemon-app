import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setSelectedPokemon } from "../features/pokemon/pokemonSlice";
import type { Pokemon } from "../types"; // Import the shared type

const GET_ALL_POKEMON = gql`
  query getAllPokemon($offset: Int!, $take: Int!) {
    getAllPokemon(offset: $offset, take: $take) {
      key
      species
      num
      sprite
    }
  }
`;

const PAGE_SIZE = 20;

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState<number>(92); // Starting offset
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { loading, data } = useQuery<{ getAllPokemon: Pokemon[] }>(
    GET_ALL_POKEMON,
    {
      variables: { offset, take: PAGE_SIZE },
    }
  );

  const handleNext = () => setOffset((prev) => prev + PAGE_SIZE);
  const handlePrev = () => setOffset((prev) => Math.max(prev - PAGE_SIZE, 0));

  const filteredPokemon = data?.getAllPokemon.filter((p) =>
    p.species.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded shadow-sm"
        />
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="bg-indigo-500 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={offset === 0}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="bg-indigo-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredPokemon?.map((p) => (
            <div
              key={p.key}
              onClick={() => dispatch(setSelectedPokemon(p))}
              className="cursor-pointer border border-gray-200 p-4 rounded-xl shadow bg-white hover:bg-indigo-50 transition"
            >
              <img
                src={p.sprite}
                alt={p.species}
                className="w-20 h-20 mx-auto"
              />
              <p className="mt-2 text-center font-semibold text-gray-700">
                {p.species}
              </p>
              <p className="text-center text-sm text-gray-500">#{p.num}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
