import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  key: string;
  species: string;
  num: string;
  sprite: string;
}

interface PokemonState {
  selected: Pokemon | null;
}

const initialState: PokemonState = {
  selected: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSelectedPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
