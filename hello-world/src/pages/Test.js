import React from 'react'
import { useState } from 'react'
import { ReactDOM } from 'react-dom/client'

export default function Test() {
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    
  return (
    <div class="mt-10 bg-blue-200 p-5">
        <label>First name</label>
        <input type="text" value={inputs.firstname} onChange={handleChange}></input>
    
        <label class="ml-10">Last name</label>
        <input type="text" value={inputs.lastname} onChange={handleChange}></input>
        <button class="bg-gray-500 p-2 ml-10 text-white b" onClick={ handleSubmit}> Submit</button>

    </div>
    
  )
}
