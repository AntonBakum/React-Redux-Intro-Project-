import { createSlice } from "@reduxjs/toolkit";


export interface State 
{
    open : boolean;
}

const initialState = {
    open : true,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers : {
        toggleStatus (state, action) {
            state.open = action.payload;
        }
    }
}
)

export const {toggleStatus} = sidebarSlice.actions;
export default sidebarSlice.reducer;