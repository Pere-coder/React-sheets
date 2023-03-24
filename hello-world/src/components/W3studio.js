import React from 'react'
import { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
function W3studio(props) {
    const [name, setName] = useState("");

    const handleSubmit = (event)=> {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
    )
    
}




export default W3studio


//     const [count, setCount] = useState(0);
    
//     useEffect(() => {
//         setTimeout(()=>{
//             setCount((count) => count + 1 );
//         }, 1000);
//     }, []);

//     return <h1>I've rendered {count} times!</h1>;
    
// }

// const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });
  
// const updateColor = () => {
//     setCar(previousState => {
//         return {...previousState, color: "blue"}
//     })
// }
//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button class="bg-red-500 p-5 " onClick={updateColor}>Click me</button>
//     </>
//   )