import React from 'react';
import Imageholder from './ImageHolder';


function ImageContainer(props) {

    return (
        <div className="mainContainer">
            {
                props.imageArr.map((imgObj) => <Imageholder key={imgObj.id} url={imgObj.url} title={imgObj.title} />)
            }
        </div>
    )
}

export default ImageContainer;