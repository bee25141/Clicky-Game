import React from "react";

function ImgCard(props){
    return (
        <div className="card"
        style={{
            backgroundImage: props.image
        }}
        >
        </div>
    );
};

export default ImgCard;