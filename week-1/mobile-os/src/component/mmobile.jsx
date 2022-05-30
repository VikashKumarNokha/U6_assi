 import "./mmobile.css";

 export const MMobile = ({p})=>{
     return (
         <div>
             <h1>Mobile Manufaturers</h1>
             <ul style={{listStyle:"square"}}>
             {
               p.map((e,i)=>(
                   <li style={ {listStyle: (i==2 || i==3) ?   i==2 ? "disc": "circle"  : "" }} >{e}</li>
               ))  
             }
             </ul>
         </div>
     )
 }