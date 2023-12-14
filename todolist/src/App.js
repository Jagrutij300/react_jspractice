//How to create a component
//functional component
//First letter should be capital of a component
import Navigation from "./Componenet/Navigation";
import Main from "./Componenet/Main";

function App(){
  //JSX => javascript xml(simple language)
  
  return(
    <div>
      {/* <h1>This is my Application</h1> */}
      <Navigation/>
      <Main/>

    </div>
    
  )
 
}
export default App;

