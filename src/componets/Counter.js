import React from 'react';
import { connect } from 'react-redux';
import {useSelector, useDispatch} from "react-redux";
import "./Counter.css";
export const Counter = () => {
    const count = useSelector(state => state.count)
    const disPatch =  useDispatch();
const increment=()=>{
    disPatch({
        type: "INCREMENT"
    });
}
const dicriment=()=>{
    disPatch({
        type: "DeCREMENT"
    });
}

    return (
        <div className='container'> 
           <h2>Counter</h2>          
           <button onClick={increment}>Increment</button>
           {count}
           <button onClick={dicriment}>Decrement</button>
        </div>
    )
}
 
 export default Counter;