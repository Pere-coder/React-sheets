import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message/>
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman"/>
      <button>Action</button>
      <Greet name="Diana" heroName="Wonderwoman"/>
      <Welcome name="Bruce" heroName="Batman"/>
      <p>This is a class property</p>
      <Welcome />
      <Welcome /> */}
      {/* <Hello/> */}
    </div>
  ); 
}

export default App;
