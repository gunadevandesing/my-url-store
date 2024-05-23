import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthorized: false,
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: initialState,
  reducers: {
    setAuthorization: (state, action) => {
      console.log({ action });
      state.isAuthorized = action.payload;
    },
  },
});

const { actions, reducer } = authorizationSlice;

export const { setAuthorization } = actions;

export default reducer;
