import { useReducer } from "react";

function reducer(state, action){
  if(action.type === "DECREASE"){
    return state - action.data;
  }else if(action.type === "INCREASE"){
    return state + action.data;
  }
}




export default function B(){

  const [count, dispatch] = useReducer(reducer, 0);

  return (
      <div>
        <h4>{count}</h4>
        <div>
          <button onClick={()=>{
            dispatch({
              type : "DECREASE",
              data : 1
            });
          }}>-</button>
          <button onClick={()=>{
            dispatch({
              type : "INCREASE",
              data : 1
            });
          }}>+</button>
        </div>
      </div>
  )
}