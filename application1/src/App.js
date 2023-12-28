
//fuctional componenet creation
import InputContainer from "./Component/InputContainer"
import  TaskContainer from "./Component/TaskContainer"
function App(){
  let styleobj = {width:"400px",height:"500px",backgroundColor:"black"};
  return(

    <div style={styleobj}>
      {console.log("hello world")}
      {console.log("styleobj")}
      <InputContainer/>
      <TaskContainer/>
      
    
    </div>
  )
}
export default App;