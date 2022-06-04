   import React from 'react'
    import { Link } from 'react-router-dom'
   import axios from "axios"
    import { useState, useEffect } from 'react'

   export const Products = () => {
        const [items, SetItems] = useState([]);
        console.log("items :",items);

        useEffect(()=>{
          axios.get("http://localhost:8080/products")
          .then(function (response) {
            // handle success
            console.log(response.data);
            SetItems(response.data);
            // var Data = response.data;

          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
            
          });
          //  const fetchData = async ()=>{
          //    let r = await fetch("http://localhost:8080/products");
          //    let d =  await r.json();
          //     console.log("DD:",d);
          //    SetItems(d);
          //    console.log( "items: ",items);
          //  };
          //  fetchData();
        
        },[]);
        
     return (
       <div>
            <table style={{width:"100%"}}>
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>Price</th>
    <th>Details</th>
  </tr>
              {
              items.map((e,i)=>{
                return   <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td><Link style={{margin:"5px",}} key={i} to={`/product/${e.id}`}>more details</Link> </td>
              </tr>
                 
              })
            } 
 
  
</table>
           
       </div>
     )
   }
   