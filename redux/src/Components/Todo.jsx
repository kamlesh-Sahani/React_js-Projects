import React from "react";
import "../style/todo.css";
import userSlice from "../Store/Slice/userSlice";
import { addUser ,deleteUser} from "../Store/Slice/userSlice";
import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
const Todo = () => {
  //daata access
  const data = useSelector((state) => {
    return state.user;
  });

  const dispatch = useDispatch();
  const addNum = (num) => {
    dispatch(addUser(num));
  };

  const remUser = (index)=>{
    dispatch(deleteUser(index));
  }

  const generateNum = () => {
    return Math.floor(Math.random() * 1000000000);
  };

  return (
    <div className="todo">
      <button onClick={() => addNum(generateNum())}>Click Me</button>
      <div className="item">
        {data.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            <span className="btn" onClick={()=>remUser(index)}>delete</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
