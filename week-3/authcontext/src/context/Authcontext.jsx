 import { createContext, useState } from "react";

 export const Authcontext = createContext();

 export const AuthContextProvider = ({children})=>{
     const [IsAuth,setIsAuth] = useState(true);
     const toggle = ()=>{
          if(IsAuth){
             setIsAuth(false);
          }else{
              setIsAuth(true);
          }
     }
     return <Authcontext.Provider value = {{IsAuth,toggle}}>
          {children}
     </Authcontext.Provider>
 }