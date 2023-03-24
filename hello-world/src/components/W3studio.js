import React from 'react'
import { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
function W3studio(props) {
    const[myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volve">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
   

}
export default W3studio


// const [textarea, setTextarea] = useState(
//     "The content of a textarea goes in the value attribute"
//    );

//    const handleChange = (event) => {
//         setTextarea(event.target.value)
//    }

//    return (
//     <form>
//       <textarea value={textarea} onChange={handleChange} />
//     </form>
//   )


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