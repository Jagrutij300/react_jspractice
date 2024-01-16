import React from "react";
import{useDispatch,useSelector} from "react"

const product = () =>{
    const dispatch = useDispatch();
    const state = useSelector(state=>state)
    console.log(state);
 return (
    <div>
     <button onClick={()=>{
      dispatch({type:"PRODUCT LIST"})
     }}>Click1</button>

    <button onClick={()=>{
      dispatch({type:"PRODUCT COST"})
     }}>Click2</button>

     
    </div>
 )
}
export default product