import { createSlice } from '@reduxjs/toolkit';

export interface State {
  modalOpen: boolean;
}

const initialState = {
  modalOpen: false,
};

export const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    toggleStatus(state, action) {
      state.modalOpen = action.payload;
    },
  },
});

export const { toggleStatus } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
