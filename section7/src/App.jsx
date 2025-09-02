import Header from "./components/Header";
import "./App.css";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { useReducer, useRef, useCallback } from "react";
import {TodoContext} from "./TodoContext";

const mockData = [
  {
    id: 0, /*자료를 식별 할 식별자*/
    isDone : true,
    content : "React 공부하기",
    createdDate : new Date().getTime(),
  },
  {
    id: 1, /*자료를 식별 할 식별자*/
    isDone : false,
    content : "빨래 널기",
    createdDate : new Date().getTime(),
  },
  {
    id: 2, /*자료를 식별 할 식별자*/
    isDone : true,
    content : "음악공부하기",
    createdDate : new Date().getTime(),
  },
]

function reducer(state, action){
  switch(action.type){
    case 'CREATE' : {
      return [...state, action.data]
    }
    case 'UPDATE' : {
      return state.map((it) => 
        it.id === action.data
        ? {...it, isDone: !it.isDone} 
        : it
      )
    }
    case 'DELETE' : {
      return state.filter((it) => it.id !==action.date)
    }
  }
}



function App() {
  
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)

  const onCreate = (content)=>{ //content 에 새로 입력받은 Todo 를 만듬
    dispatch({
      type : "CREATE",
      data : { // mockData를 만들 때 객체로 만들었기 때문에 newTodo도 객체로 만듬
        id : idRef.current++,
        isDone : false,
        content : content, //content, 이렇게 작성가능, 변수명만 입력하면 이 변수의 이름으로 프로퍼티의 키 설정 변수의 값으로는 프로퍼티듸 값이 설정됨
        createdDate : new Date().getTime()
      },
    })
    // setTodos(
    //   [...todos, newTodo]//기존 배열에 newTodo를 추가로 붙여서 배열을 만듬, 뒤에 추가됨, 앞에 추가하고 싶으면 newTodo를 앞에 작성
    // )
  }

  const onUpdate = useCallback( (targetId) => {
    dispatch({
      type : "UPDATE",
      data : targetId,
    }
    )
    // setTodos(
    //   todos.map((todo)=> todo.id === targetId 
    //     ? {...todo, isDone: !todo.isDone}
    //     : todo
    //   )
    // )
  }, [])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type : "DELETE",
      data: targetId,
    })
    
    // setTodos(
    //   setTodos(todos.filter((todo) => todo.id !== targetId))
    // )
  }, [])

  return (
    <div className="App">
      <Header />
        <TodoContext.Provider value={{
          todos,
          onCreate,
          onDelete,
          onUpdate,
        }}>
          <TodoEditor />
           <TodoList 
            
           />
          </TodoContext.Provider>
    </div>
  )
}

export default App
