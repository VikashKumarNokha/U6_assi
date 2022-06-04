    import React, { useState,useEffect } from 'react'
    import { useParams } from 'react-router-dom';
    import axios from 'axios';
    
    export const ProductDetails = () => {
      
        
         const {id} = useParams();
        console.log("ID: ", id);
        const [pro ,setPro] = useState({});
        console.log( "ppppp:",pro);
        const [err, setErr] = useState(false);
         
       useEffect(()=>{
        axios.get(`http://localhost:8080/products/${id}`)
        .then(function (response) {
          // handle success
          console.log( "RES : ",response);
          setPro(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log( "ERR: ",error);
           setErr(true);

        })
        .then(function () {
          // always executed
        });
      
      },[id]);

      return  (
        <div>
        <h1>{pro.id}</h1>
        <h1>{pro.name}</h1>
        <h1>{pro.price}</h1>
        { err ?  <div><h1>Request failed with status code 404</h1></div> : <div></div>}
        </div>);

        // return   err ? 
        //     (
        // <div>
        // <div>{pro.name}hello</div>
        // <div>{pro.id}</div>
        // <div>{pro.price}</div>
        // </div>
        //  ) :  (<div><p>{errvalue}</p></div>) ;
            
    }
    