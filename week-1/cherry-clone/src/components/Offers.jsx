import React from 'react'

const Offers = (props) => {
  return (
    <section className="offers">
        <div className="container">
            {
                props.offer.map((e,i)=>(
                    <img key={i} className="offer" src={e}/>
                ))
            }    
           
        </div>
    </section>
  )
}

export default Offers