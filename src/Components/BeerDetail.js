import React from "react";

const BeerDetail = (props) => {
    console.log(props);
    // specific selected beer object is passed in as props to show the description and the image

        return (
            <div className="beer-card">
                <img alt="" src={props.selectedBeer.image_url} />
                <p>{props.selectedBeer.description}</p>
            </div>
        );
    };

export default BeerDetail;
