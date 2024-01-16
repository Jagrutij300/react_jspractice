

const initialstate =[{color:"yellow"},{color:"pink"},{color:"blue"}];
const reducerhandler=(state=initialstate,action)=>{
if(action.type==="PRODUCT LIST"){
    return[{color:"yellow",size :"xl"},
           {color:"pink",size :"l"},
           {color:"blue",size :"m"}]
}

   else if (action.type === "PRODUCT COST"){
    return[{color:"yellow",size :"xl",cost:100},
           {color:"pink",size :"l",cost:200},
           {color:"blue",size :"m",cost:300}]
        }
    }

export default reducerhandler;