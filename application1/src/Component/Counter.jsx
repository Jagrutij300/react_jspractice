import React, { useState } from "react";

const Counter = () => {
    //let value = 1;
    const [value, SetValue] = useState(1)
    return (

        <div style={{color:"white"}}>
<h1> Counter</h1>
<p style={{fontSize:"24px", marginLeft:"70px"}}>{value}</p>
<button onClick={function(){
    SetValue(value +1)
    console.log(value)
    console.log("Increment")
}}>Increament</button>
<button onClick={function(){
    SetValue(value -1)
    console.log(value)
    console.log("Decrement")
}}>Decrement</button>
        </div>
    )
}
export default Counter