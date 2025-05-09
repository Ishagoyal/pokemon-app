import PokemonList from "./components/PokemonList";
import Details from "./components/Details";

const App = () => (
  <div className="flex gap-8 p-6">
    <PokemonList />
    <Details />
  </div>
);

export default App;
