import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../reducers/infoSlice";

export default configureStore({
  reducer: {
    user: infoSlice,
  },
});
