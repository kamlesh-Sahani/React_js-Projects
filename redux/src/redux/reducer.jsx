import  {createReducer} from "@reduxjs/toolkit";

export const changeNumber = createReducer({
  coin:0,
},
{

    increment : (state,action) =>{
        state.coin += 1;
    },

    decrement : (state,action) =>{
        state.coin -= 1;
    }
})