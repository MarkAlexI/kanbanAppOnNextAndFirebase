import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  currentBoardName: "",
  isAddAndEditBoardModal: {
    isOpen: false,
    variant: "",
  },
};

export const features = createSlice({
  name: "features",
  initialState,
  reducers: {
    setCurrentBoardName: (state, action: PayloadAction<string>) => {
      state.currentBoardName = action.payload;
    },
    openAddAndEditBoardModal: (state, { payload }) => {
      state.isAddAndEditBoardModal.isOpen = true;
      state.isAddAndEditBoardModal.variant = payload;
    },
    closeAddAndEditBoardModal: (state) => {
      state.isAddAndEditBoardModal.isOpen = false;
      state.isAddAndEditBoardModal.variant = "";
    },
  },
});

export const {
  setCurrentBoardName,
  openAddAndEditBoardModal,
  closeAddAndEditBoardModal,
} = features.actions;

export const getCurrentBoardName = (state: RootState) => {
  return state.features.currentBoardName;
};

export const getAddAndEditBoardModalValue = (state: RootState) => {
  return state.features.isAddAndEditBoardModal.isOpen;
};

export const getAddAndEditBoardModalVariantValue = (state: RootState) => {
  return state.features.isAddAndEditBoardModal.variant;
};

export default features.reducer;
