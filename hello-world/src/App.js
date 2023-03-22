import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Deleted from './components/Delete';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';
import TodoList from './TodoComponent/TodoList';
import React, { useState, useRef } from 'react';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css';

function App() {

  
return (  
    <>
      <div className="App">
        <h1 className='error'>Error</h1>
        <h1 className={styles.success }>Success</h1>
      </div>
    
    </>
  )
}

export default App;


{/* <Stylesheet primary={true}/>
    
<Inline/> */}

{/* <div className="App"><NameList/> </div>  */}

  // const [todos, setTodos] = useState([ ])
  // const todoNameRef = useRef()
  // function handleAddTodo(e) {
  //   const name = todoNameRef.current.value
  //   if (name === ' ')return 
  //   setTodos(prevTodos => {
  //     return [...prevTodos, {id:1, name:name, complete: false}]})
  //   todoNameRef.current.value = null
  // }
  // return (
  //   <div className="App">
  //     <> 
      
  //     <TodoList todos = {todos}/>
  //     <input ref= {todoNameRef} type="text"/>
  //     <button onClick={handleAddTodo}>Add Todo</button>
  //     <button>Clear Completed Todos</button>
  //     <div>0 left todo</div>
  //     </>
      


      {/* <Person/> */}

      
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/>
      <FunctionClick/> */}
      {/* <Deleted reason="its a test component"/> */}
      
       {/* <Welcome name="Bruce" heroName="Batman"/> */}
      {/* <Counter/> */}
      {/* <Greet name="Clark" heroName="Superman"/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
     
      <button>Action</button>
      <Greet name="Diana" heroName="Wonderwoman"/>
     
      <p>This is a class property</p>
      <Welcome />
      <Welcome /> */}
      {/* <Hello/> */}

