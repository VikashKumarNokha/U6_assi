     import    "./Todoitems.css";
   export const Todoitems = ({p})=>{
    
       return (   
           <div>
            {
                p.map((e)=>(
                    <div id="dis">
                    <h3>{e.value}</h3> 
                    </div>
                ))
            }
           </div>
       )
   }