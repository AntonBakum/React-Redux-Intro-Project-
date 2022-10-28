import { createSlice } from "@reduxjs/toolkit";


/*The slice function handles requests to change the application's state. This tsx. file contains the initial state for this functionality (opening-closing the sidebar)
,an interface that provides strict typing. 
The sidebarSlice includes the initial state value, function name, and the logic of reducers for changing the state*/ 

export interface sideBarState 
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