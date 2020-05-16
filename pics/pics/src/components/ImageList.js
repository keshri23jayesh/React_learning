import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';


const ImageList = (props) => {
    // console.log(props.ImageUrls);
    // const images = props.ImageUrls.map(eachImage => {
    //     return <div key={eachImage.id} >
    //              <img alt={}src={eachImage.urls.regular} />
    //            </div>;
    // });

    const images = props.ImageUrls.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });


return <div className='image-list'>{images}</div>
}

export default ImageList;