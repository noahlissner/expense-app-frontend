import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: { code: "SE", dial_code: "+46", name: "Sweden" },
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const { setCountry } = countrySlice.actions;
export default countrySlice.reducer;
