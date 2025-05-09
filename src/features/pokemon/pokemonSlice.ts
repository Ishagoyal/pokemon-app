import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Pokemon } from "../../types"; // Import the shared type

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
    setSelectedPokemon(state, action: PayloadAction<Pokemon>) {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
