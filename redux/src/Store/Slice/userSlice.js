import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        deleteUser(state,action){
            state.splice(action.payload,1);
        },
        removeUser(state,action){

        }
    }
})

export default userSlice;
export const {addUser,deleteUser} = userSlice.actions;