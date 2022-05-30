import React from 'react'

const Filter = ({filters,currentfilterby,updatedfilters}) => {
  return (
    <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options">
                {
                        Object.entries(filters).map(([key,value])=>(
                            <div key={key} className="restaurant-option" onClick={()=>updatedfilters(key)} >
                                {value}
                            </div>
                           ))
                }     
            </div>
        </div>
  )
}

export default Filter