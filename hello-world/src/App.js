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

function App() {
  return (
    <div className="App">
      <ClassClick/>
      <FunctionClick/>
















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
    </div>
  ); 
}

export default App;
