import React,{ useState} from 'react'
// import image1 from './../assets/images/maira.jpg'


function ImageLightBox() {
    

    //IMAGES
//you can also import a local file, the syntax would look like:
//import image1 from './images/imagename.jpg'
const image1 = require('./../assets/images/mugi9.jpg')
const image2 = require('./../assets/images/mugi1.jpg')
const image3 = require('./../assets/images/mugi6.jpg')
const image4 = require('./../assets/images/mugi3.jpg')
const image5 = require('./../assets/images/mugi4.jpg')
const image6 = require('./../assets/images/mugi5.jpg')
const image7 = require('./../assets/images/mugi7.jpg')
const image8 = require('./../assets/images/mugi11.jpg')
const image9 = require('./../assets/images/mugi2.jpg')
const image10 = require('./../assets/images/mugi12.jpg')
const image11 = require('./../assets/images/mugi13.jpg')
const image12 = require('./../assets/images/mugi14.jpg')





//IMAGE ARRAY
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9,image10, image11, image12];

const [imageToShow, setImageToShow] = useState("");
const [lightboxDisplay, setLightBoxDisplay] = useState(false);

//looping through our images array to create img elements
const imageCards = images.map((image) => (
  <img className="image-card" onClick={() => showImage(image)} src={image} alt="him" />
));

//function to show a specific image in the lightbox, amd make lightbox visible
const showImage = (image) => {
  setImageToShow(image);
  setLightBoxDisplay(true);
};

//hide lightbox
const hideLightBox = () => {
  setLightBoxDisplay(false);
};

//show next image in lightbox
const showNext = (e) => {
  e.stopPropagation();
  let currentIndex = images.indexOf(imageToShow);
  if (currentIndex >= images.length - 1) {
    setLightBoxDisplay(false);
  } else {
    let nextImage = images[currentIndex + 1];
    setImageToShow(nextImage);
  }
};

//show previous image in lightbox
const showPrev = (e) => {
  e.stopPropagation();
  let currentIndex = images.indexOf(imageToShow);
  if (currentIndex <= 0) {
    setLightBoxDisplay(false);
  } else {
    let nextImage = images[currentIndex - 1];
    setImageToShow(nextImage);
  }
};

return (
    <>
      <div>{imageCards}</div>
      {
        lightboxDisplay ? 
        <div className="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img className="lightbox-img" src={imageToShow} alt="him"/>
          <button onClick={showNext}>⭢</button>
        </div>
       : ""
      }
    </>
  );
}

export default ImageLightBox
