import { configureStore } from "@reduxjs/toolkit";
import authReducer, { initUser } from "../features/auth/authSlice";
import groupReducer from "../features/groups/groupSlice";
import countryReducer from "../features/country/countrySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    groups: groupReducer,
    country: countryReducer,
  },
});

store.dispatch(initUser());

export default store;
