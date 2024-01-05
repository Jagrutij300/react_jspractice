import React from "react"
import SingleTask from "./SingleTask"

let arr =["go to gym","read some books","cook your meal","read newspaper"]

const TaskContainer =({task}) =>{

    arr.push(task)
    return(
        <div style={{border:"5px solid blue", marginTop:"50px"}} >

            {arr.map(function(ele, index){
                return <SingleTask task={ele} taskno={index+1}/>
            }

            )}


           {/* < SingleTask task={arr[0]} taskno={1}/>
           < SingleTask task={arr[1]}  taskno={2}/>
           < SingleTask task={arr[2]}  taskno={3}/>
           < SingleTask task={arr[3]}  taskno={4}/> */}


        </div>
    )
}
export default TaskContainer;