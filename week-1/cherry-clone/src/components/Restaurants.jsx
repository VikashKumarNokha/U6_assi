import React from 'react'
 import Restaurant from './Restaurant';
const Restaurants = (props) => {
  return (
    <div className="container divider">
    <div className="cards">
      {
         props.restaurant.map((eee,i)=>(
            <Restaurant key ={i} e={eee} />
         )) 
      }
     </div>
     </div>
  )
}

export default Restaurants