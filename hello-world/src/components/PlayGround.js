import React from 'react'

function PlayGround(props) {
    if (props.name){
        return (
            <div class='bg-red-500'><h1>Hello, {props.name}</h1></div>
            
        )
    }else  return (
        <h1>Not found</h1>
       
      )
    }
    
 
export default PlayGround