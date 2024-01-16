import {createStore, createstore} from "redux"
import  reducerhandler from "./reducer";

const store = createStore(reducerhandler);

export default store;