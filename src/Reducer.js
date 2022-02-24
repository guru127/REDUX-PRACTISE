import React from 'react';
import { createStore } from "redux"
   
const initialState = {
    count: 10,
  };

function reducer(state = initialState , action){
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count+1
           }
        case 'DeCREMENT' :
            return{
                count: state.count-1
            }
         default:
             return state  
    }
}  

export const store = createStore(reducer);
