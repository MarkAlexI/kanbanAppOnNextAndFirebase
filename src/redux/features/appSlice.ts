import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  currentBoardName: "",
};

export const features = createSlice({
  name: "features",
  initialState,
  reducers: {
    setCurrentBoardName: (state, action: PayloadAction<string>) => {
      state.currentBoardName = action.payload;
    },
  },
});

export const {
  setCurrentBoardName
} = features.actions;

export const getCurrentBoardName = (state: RootState) => state.features.currentBoardName;

export default features.reducer;
