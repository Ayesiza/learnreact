import React from 'react';
import ImageLightBox from './ImageLightBox';
import StarRating from './StarRating';


function Home() {


    return (
        <div className="wrapper">
             <h1 className="app-heading">Welcome  To MyGallery</h1>
             
             <StarRating  />
             <ImageLightBox />
 
     </div>
     
   
       
    )
}

export default Home
