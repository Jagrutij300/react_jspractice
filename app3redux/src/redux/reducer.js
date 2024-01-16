const initialstate =[];
const reducerhandler=(state=initialstate,action)=>{
if(action.type==="PRODUCT LIST"){
    return[{color:"yellow",size :"xl"},
           {color:"pink",size :"l"},
           {color:"blue",size :"m"}]
}}