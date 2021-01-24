import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function StarRating () {
  const [rating, setRating] = useState(null);
  const [hover, setHover] =useState(null)
  

    
    return (
        <div>
            <form>
            {[...Array(5)].map((star, i) =>{
                const ratingValue = i + 1;
                return  (
            <label>
               <input 
               type="radio"
                name=''
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
               
                />
               <FaStar 
               class="star" 
               color={ratingValue <= (hover || rating) ? "orangered" :"black"}
               size={50} 
               onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
               />
              
            </label>
               
                );
                

            })}
          <p>The Rating is { rating}</p>
          <input type="text"  name="description" placeholder="Describe your experience..."/>
            </form>
           
        </div>


    );
          
  
    };

export default StarRating
