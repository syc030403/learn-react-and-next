import { TodoContext } from "../TodoContext";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useState, useMemo, useContext } from "react";

export default function TodoList(){
  
  const {todos} = useContext(TodoContext)

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

    const filterTodos = () => {
    if(search === ""){
      return todos;
    }

    return todos.filter((todo)=>
      todo.content.toLowerCase().includes(search.toLowerCase())
    )
  }



  const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
    
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length
    const notDoneCount = totalCount - doneCount
    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
  }, [todos])
  
   return (
    <div className="TodoList">
      <h4>Todos</h4>
      <div>
        <div>전체 투두 : {totalCount}</div>
        <div>완료 투두 : {doneCount}</div>
        <div>미완 투두 : {notDoneCount}</div>
      </div>
      <input 
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="Todos_wrapper">
        {
          filterTodos().map((todo)=>(
              <TodoItem 
                
              /> //map 메서드로 html요소나 리액트 컴포넌트를 렌더링 할떄는 고유 식별자를 전달해야한다 
            )
          )
        }
      </div>
    </div>
  )
}