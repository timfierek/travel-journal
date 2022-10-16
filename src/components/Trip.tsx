import React from "react";

function Trip(props: any) {
    return (
        <div className="trip">
            <img src={props.imageUrl} alt="" className="trip-picture"/>
            <div className="trip-info">
                <div className="location">
                    <img src="/location-pin-icon.png" alt="" />
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                
                <h1 className="title">{props.title}</h1>
                <p className="dates">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
}

export default Trip;