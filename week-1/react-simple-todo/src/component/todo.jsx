import "./todo.css";
import { useState } from "react";
 import { Todoitems } from "./Todoitems";

 export const Todo = ()=>{
         const [valu, SetValu] = useState("");
        const [todo, SetTodo] = useState([]);
         
     return (
         <div>
              <Todoitems p={todo}/>
              <div id="input">
             <input onChange={(e)=>SetValu(e.target.value)}  className="ttodo" type="text"  placeholder="Write Something"/>
              <button onClick={()=>{SetTodo([...todo,{value : valu, id: Date.now()}]); SetValu("");}}>+</button>
              </div>
         </div>

     )
 }