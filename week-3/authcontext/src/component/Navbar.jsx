  
  import { Authcontext } from "../context/Authcontext";
  import { useContext } from "react"
  
export const Navbar = ()=>{
    const {IsAuth,toggle} = useContext(Authcontext);
     
    return (
        <div>
            {console.log(IsAuth)}
            <button onClick={()=>toggle()} >{IsAuth ? "login": "logout"}</button>
        
        </div>
    )
}
