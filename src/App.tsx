import React from "react";
import PokemonList from "./components/PokemonList";
import Details from "./components/Details";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="overflow-y-auto">
          <PokemonList />
        </div>
        <div className="flex items-center justify-center">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default App;
