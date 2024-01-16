import React from "react";
import { useState } from "react";
import{useDispatch,useSelector} from "react-redux"

const product = () =>{
    const {num,setNum}= useState(0);
    const dispatch = useDispatch();
    const state= useSelector(state=>state)
       
    //console.log(state);
//    let state =[]
//use  effect when componenet is loded first time
    useEffect(function(){
      console.log("useeffect: "+state);
    },[state,num]) //dependanvy array =>state data
 return (
    <div>
       {console.log("application has started")} ;
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