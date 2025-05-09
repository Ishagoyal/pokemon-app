import { useQuery, gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setSelectedPokemon } from "../features/pokemon/pokemonSlice";

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

const PokemonList = () => {
  const { loading, data } = useQuery(GET_ALL_POKEMON, {
    variables: { offset: 92, take: 20 },
  });

  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.getAllPokemon.map((p: any) => (
        <div
          key={p.key}
          onClick={() => dispatch(setSelectedPokemon(p))}
          className="cursor-pointer border border-gray-300 hover:shadow-lg p-4 rounded-xl bg-white transition"
        >
          <img src={p.sprite} alt={p.species} className="mx-auto w-20 h-20" />
          <p className="text-center mt-2 font-semibold">{p.species}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
