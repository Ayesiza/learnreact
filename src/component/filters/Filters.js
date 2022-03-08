import React from 'react'
import Filter from './Filter'

const Filters = () => {
  return (
    <div  className='borderedContainer'>
    <b>Choose Category: </b>
    {["computer", "phone", "suits"]
    .map(category =>(
        <Filter category={category}
        isActive={true}
        />
    ))
    }
    </div>
  )
}

export default Filters