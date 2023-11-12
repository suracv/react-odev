import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface initialStateProps {
  activeSubmenuId: number | null;
  activeSubSubmenuId: number | null;
  activeSubSubSubmenuId: number | null;
  activeSubSubSubSubmenuId: number | null;
}

const initialState: initialStateProps = {
  activeSubmenuId: null,
  activeSubSubmenuId: null,
  activeSubSubSubmenuId: null,
  activeSubSubSubSubmenuId: null,
};

export const submenuSlice = createSlice({
  name: "submenu",
  initialState,
  reducers: {
    setActiveSubmenuId: (state, action) => {
      state.activeSubmenuId = action.payload;
    },
    setActiveSubSubmenuId: (state, action) => {
      state.activeSubSubmenuId = action.payload;
    },
    setActiveSubSubSubmenuId: (state, action) => {
      state.activeSubSubSubmenuId = action.payload;
    },
    setActiveSubSubSubSubmenuId: (state, action) => {
      state.activeSubSubSubSubmenuId = action.payload;
    },
  },
});

export const {
  setActiveSubmenuId,
  setActiveSubSubmenuId,
  setActiveSubSubSubmenuId,
  setActiveSubSubSubSubmenuId,
} = submenuSlice.actions;
export const selectActiveSubmenuId = (state: RootState) => {
  return state.submenu.activeSubmenuId;
};
export const selectActiveSubSubmenuId = (state: RootState) => {
  return state.submenu.activeSubSubmenuId;
};
export const selectActiveSubSubSubmenuId = (state: RootState) => {
  return state.submenu.activeSubSubSubmenuId;
};
export const selectActiveSubSubSubSubmenuId = (state: RootState) => {
  return state.submenu.activeSubSubSubSubmenuId;
};

export default submenuSlice.reducer;
