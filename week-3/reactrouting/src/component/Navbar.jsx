  import React from 'react'
  import { Link } from 'react-router-dom' 
   const  data =[
           {"title":"Home",
             "link": "/"
           },
           {"title":"products" , "link":"/product" }

   ];
  
  export const Navbar = () => {
    return (
      <div>
          {
             data.map((e,i)=>
              <Link style={{margin:"5px"}} key={i} to={e.link}>{e.title}</Link>
             ) 
          }
          
      </div>
    )
  }
  