import React from "react";
import ImageGallery from 'react-image-gallery';
import cover from "../assets/cover.jpg";
import firstpage from "../assets/firstpage.jpg";
import list from "../assets/list.jpg";
import friedrice from "../assets/friedrice.jpg";
import paella from "../assets/paella.jpg";
import ricebowl from "../assets/ricebowl.jpg";

const images = [
  {
    original: `${cover}`,
    thumbnail: `${cover}`,
  },
  {
    original: `${firstpage}`,
    thumbnail: `${firstpage}`,
  },
  {
    original: `${list}`,
    thumbnail: `${list}`,
  },
  {
    original: `${friedrice}`,
    thumbnail: `${friedrice}`,
  },
  {
    original: `${paella}`,
    thumbnail: `${paella}`,
  },
  {
    original: `${ricebowl}`,
    thumbnail: `${ricebowl}`,
  },
];

function ComidaPhotoGallery() {
    const ref = React.createRef() 
    return (
        <div>
          <ImageGallery items={images} ref={ref} />
        </div>
    )
}

export default ComidaPhotoGallery;