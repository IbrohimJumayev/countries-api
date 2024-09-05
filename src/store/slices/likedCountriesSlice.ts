import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils";

interface SelectedCountries {
  cca2: string;
}

interface SelectedCountriesState {
  liked: SelectedCountries[];
}

const initialState: SelectedCountriesState = {
  liked: getFromLocalStorage("liked") ?? [],
};

const likedCountriesSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<SelectedCountries>) => {
      state.liked.push(action.payload);
      saveToLocalStorage("liked", state.liked);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.liked = state.liked.filter((l) => l.cca2 !== action.payload);
      saveToLocalStorage("liked", state.liked);
    },
  },
});

export const { add, remove } = likedCountriesSlice.actions;
export default likedCountriesSlice.reducer;
