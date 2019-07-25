import React from "react";
import "./Style.css"

function ImgCard(props){
    return (
        <div className="row">
        {
            props.beaches.map(beach =>
                (
                    <div className="card" key={beach.id}>
                        <div className="img-container">
                            <img alt={beach.name} src={beach.image} />
                        </div>
                    </div>
                )
            )
        }
    </div>
    );
};

export default ImgCard;