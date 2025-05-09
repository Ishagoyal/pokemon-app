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
          className="cursor-pointer border p-4 rounded shadow"
          onClick={() => dispatch(setSelectedPokemon(p))}
        >
          <img src={p.sprite} alt={p.species} />
          <p>{p.species}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
