import PokemonList from "./components/PokemonList";
import Details from "./components/Details";

const App = () => (
  <div className="flex gap-8 p-6 bg-gray-50 min-h-screen">
    <PokemonList />
    <Details />
  </div>
);

export default App;
