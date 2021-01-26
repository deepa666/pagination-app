import React from "react";

function ImageHolder(props) {
    return (
        <div className="imageholder">
            <img className='images' src={props.url} alt={props.title} />
        </div>
    )
}

export default ImageHolder;