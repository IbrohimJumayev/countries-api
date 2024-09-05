import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountriesDetails {
    common: string,
    png: string
}

interface Country {
    name: CountriesDetails,
    cca2: string
    flags: CountriesDetails,
}

interface CountriesState {
    countries: Country[],
    search: string
}

const initialState: CountriesState = {
    countries: [],
    search: ''
}

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        render: (state, action: PayloadAction<Country[]>) => {
            state.countries = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        }
    }
})

export const {render, setSearch} = countriesSlice.actions
export default countriesSlice.reducer