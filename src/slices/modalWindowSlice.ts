import { createSlice } from '@reduxjs/toolkit';

export interface State {
  createModalOpen: boolean;
  updateModalOpen: boolean;
  deleteModalOpen: boolean;
}

const initialState = {
  createModalOpen: false,
  updateModalOpen: false,
  deleteModalOpen: false,
};

export const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    toggleCreateModalStatus(state, action) {
      state.createModalOpen = action.payload;
    },
    toggleUpdateModalStatus(state, action) {
      state.updateModalOpen = action.payload;
    },
    toggleDeleteModalStatus(state, action) {
      state.deleteModalOpen = action.payload;
    },
  },
});

export const { toggleCreateModalStatus, toggleUpdateModalStatus, toggleDeleteModalStatus} = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
