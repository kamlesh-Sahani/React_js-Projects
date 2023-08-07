import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement} from './redux/reducer';
const App = () => {
  const dispatch = useDispatch();

  const addBtn  = () =>{
    dispatch({
      type:"increment",
    })
  }

  const subBtn = () =>{
    dispatch({
      type:"decrement",
    })
  }
  return (
    <Provider store={store}>
<div>
  <h1 class="">34</h1>
  <button onClick={()=>addBtn} >increment</button>
  <button onClick={()=>subBtn} >decrement</button>
</div>
    </Provider>
    
  )
}

export default App