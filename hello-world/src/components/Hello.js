import React from "react";

const Hello = () => {
    // return (
    //     <div><h1>Hello Pere</h1></div>
    // )
    return React.createElement('div', {id:'hello'}, <h1>Hello boo</h1>)
}

export default Hello