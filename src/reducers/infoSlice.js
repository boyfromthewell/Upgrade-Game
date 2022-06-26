import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "user",
  initialState: {
    NickName: null,
    Rank: 0,
  },
  reducers: {
    ADD_USER: (state, action) => {
      state.NickName = action.payload;
    },
    UPGRADE_SUCCESS: (state, action) => {
      state.Rank += 1;
    },
    UPGRADE_FAIL: (state, action) => {
      state.Rank -= 1;
    },
  },
});

export const { ADD_USER, UPGRADE_SUCCESS, UPGRADE_FAIL } = infoSlice.actions;

export default infoSlice.reducer;
