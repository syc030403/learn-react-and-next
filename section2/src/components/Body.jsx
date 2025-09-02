
import { useState } from "react";


export default function Body(){

  const [state, setState] = useState(
    {
      name : "",
      gender : "",
      bio : "",
    }
  )

  const onChange = (e) => {
    
    setState({
      ...state,
      [e.target.name]: e.targer.value,
    })
  }

  return (
    <div className="body">
      <div>
        <input 
          name={"name"}
          value={state.name}
          onChange={onChange}
        />
      </div>
      <div>
        <select 
          name={"gender"}
          value={state.gender} 
          onChange={onChange}
        >
          <option  value="" >밝히지 않음</option>
          <option  value="female" >여성</option>
          <option  value="male" >남성</option>
        </select>
      </div>
      <div>
        <textarea 
          name={"bio"}
          value={state.bio} 
          onChange={onChange} 
          />
      </div>
    </div>
  )
}
