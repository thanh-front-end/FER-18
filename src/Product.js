import React from 'react';
import {useSelector } from "react-redux";
export default function Product(props) {
    const departure = useSelector((state)=>state.flightSearch.depatureValue);
    const arrival = useSelector((state)=>state.flightSearch.arrivalValue);
    const seatValue = useSelector((state)=>state.flightSearch.adultsCount) + useSelector((state)=>state.flightSearch.minorsCount);
    const distanceValue = Math.round(distance(departure.lat, departure.long, arrival.lat, arrival.long)).toFixed();
    function distance(lat1, lon1, lat2, lon2) {
        const p = 0.017453292519943295;
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;
        return 5990 * Math.asin(Math.sqrt(a));
    }
    const cost = distanceValue;
    const {product, onAdd} = props;
    return (
        <div className="departure-flight" onClick={() => onAdd(product)}>
            <div className="start">
                <div className="logo"><img src={product.img} alt=""/></div>
                    <div className="cols">
                        <p id="time">{product.time}</p>
                        <p>{product.name}</p>
                    </div>
            </div>
            <div className="cols">
                <p>{product.title_4}</p>
                <p>{product.title_1}</p>
            </div>
            <div className="cols">
                <p>{seatValue} Cost</p>
                <p>{product.title_2}</p>
            </div>
            <div className="cols">
                <p>{distanceValue === "NaN" ? "" : "$" + cost}</p>
                <p>{product.title_5}</p>
            </div>
        </div>
    )
}
