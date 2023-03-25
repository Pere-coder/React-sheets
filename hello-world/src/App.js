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
import Fom from './components/Fom';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PlayGround from './components/PlayGround';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import W3studio from './components/W3studio';
import Test from './pages/Test';




function App() {

  
return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path = "test" element={<Test />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
)
}


{/* <h1>Who lives in my garage?</h1>
{cars.map((car)=> <W3studio key={car.id} brand={car.brand}/>)} */}
  // const cars = [
  //   {id: 1, brand: 'Ford'},
  //   {id: 2, brand: 'BMW'},
  //   {id: 3, brand: 'Audi'}
  // ];
  
//   <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<Layout/>}>
  //       <Route index element = {<Home />} />
  //       <Route path="blogs" element={<Blogs />} />
  //       <Route path="contact" element={<Contact />} />
  //       <Route path="*" element={<NoPage />} />

  //     </Route>
      
  //   </Routes>
  //   </BrowserRouter>
  // )

export default App;

  // <div className='App'>
      //   <PlayGround name = 'bose' />
      //   <PlayGround name = 'kkk' />
      //   <PlayGround name = 'ppp' />

      // </div>
{/* <Table>
              <Table/>
        </Table> */}
{/* <React.Fragment>
      <h1>
        <FragmentDemo/>
      </h1>
      <p>This describes the FragmentDemo</p>
    
    </React.Fragment> */}
{/* <LifecycleA/> */}
{/* <Fom/> */}
{/* <h1 className='error'>Error</h1>
<h1 className={styles.success }>Success</h1> */}
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

