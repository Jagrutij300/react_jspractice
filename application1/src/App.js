
//fuctional componenet creation
import { useState } from "react";
import InputContainer from "./Component/InputContainer"
import  TaskContainer from "./Component/TaskContainer"
// import Counter from "./Component/Counter";
function App(){

  const [input , setInput] = useState("");

  let styleobj = {width:"400px",height:"500px",backgroundColor:"black"};
  return(

    <div style={styleobj}>
      {/* <Counter/> */}
      {/* {/* {console.log("hello world")}
      {console.log("styleobj")} */}
      <InputContainer setInput={setInput}/>
      <TaskContainer task={input}/>
       
    
    </div>
  )
}
export default App;