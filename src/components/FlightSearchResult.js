import { Link } from "react-router-dom";
import map from '../img/map1.jpg';
import { ControlSelect } from "./ControlSelect";
import { useSelector } from "react-redux";
import { place } from "../data/data";
import { SearchFor } from "../data/data";
import { useState } from 'react';
import datas from "../data/datas";
import Main from "./Main";
import Basket from "./Basket";

export function FlightSearchResult(props) {
    const {products} = datas;
    const [cartItems, setCarItems] = useState([]);
    const onAdd = (product) =>{
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist){
        setCarItems(cartItems.map((x) => 
            x.id === product.id ? { ...exist, qty: exist.qty} : x
            )
        );
        } else{
            setCarItems([ ...cartItems,{ ...product, qty: 1}]);
        }
    };
    const onRemove = (product) =>{
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist.qty === 1){
          setCarItems(cartItems.filter((x) => x.id !== product.id));
        } else{
          setCarItems(cartItems.map(x => 
            x.id === product.id ? {...exist, qty: exist.qty - 1} : x
            )
          );
        }
      }
    const departure = useSelector((state)=>state.flightSearch.depatureValue);
    const arrival = useSelector((state)=>state.flightSearch.arrivalValue);
    function distance(lat1, lon1, lat2, lon2) {
        const p = 0.017453292519943295;
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p)/2 + 
                c(lat1 * p) * c(lat2 * p) * 
                (1 - c((lon2 - lon1) * p))/2;
        return 5990 * Math.asin(Math.sqrt(a));
    }
    
    const distanceValue = Math.round(distance(departure.lat, departure.long, arrival.lat, arrival.long)).toFixed();
    
    return (
        <>
            
            <div className="wrapper">
                <div className="col-left">
                        <div className="result-wrapper">
                            <ControlSelect />
                        </div>
                    </div>
            </div>
            
            {distanceValue > 0 ? 
                <div className="wrapper">
                <div className="col-left">
                    <h4>Choose a <span className="primary-color">departing</span> flight</h4>
                    <div className="flight-info">
                        {typeof departure === "object" && typeof arrival === "object" &&
                            <div className="flight-info-title">
                                <p>{departure.value} ({departure.label})</p>
                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                <p>{arrival.value} ({arrival.label})</p>
                            </div>
                        }
                        <div className="departure-flight-wrapper">
                            <Main products={products} onAdd={onAdd}/>

                        </div>
                    </div>
                </div>
                <div className="col-right">
                    <Basket cartItems={cartItems} onAdd={onAdd} onRemove = {onRemove} />
                    <div className="cart">
                        <div className="btn-group">
                            <button className="save"><Link to="/flight-summary">Save and Close</Link></button>
                        </div>
                    </div>
                    
                </div>
            </div>
            : <p className="warn"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Unsuitable flight</p>
            }

            
            <div className="wrapper">
                <div className="col-left">
                    <div className="map-img">
                        <img src={map} alt=""/>
                    </div>
                </div>
                <div className="col-right">
                    <div className="price-rating">
                        <div className="heading">
                            <h4>Price rating</h4>
                            <p><span>Buy soon</span></p>
                        </div>
                        <div className="content">
                            <p>
                                We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks.
                            </p>
                            <p>
                                Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            

           {distanceValue > 0 && 
             <div className="stay p-y">
                <div className="heading stay-heading">
                    <div className="heading-left"><p>Find <span className="primary-color">places to stay</span> in {arrival.city}</p></div>
                    <div className="heading-right"><Link to="">All <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
                </div>
                <div className="stay-content">
                    {place.map((item, index)=>
                        <div className="stay-item item" key={index}>
                            <img src={item.img} alt=""/>
                            <div className="item-content">
                                <h6 className="primary-color">{item.title}</h6>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
           }

            {distanceValue > 0 && 
                <div className="flight p-y">
                    <div className="heading flight-heading">
                        <div className="heading-left"><p>People in <span>{departure.city}</span> also searched for</p></div>
                        <div className="heading-right"><Link to="">All <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></div>
                    </div>
                    <div className="flight-top">
                    {SearchFor.map((item, index)=>
                            <div className="flight-top-item item" key={index}>
                                <img src={item.img} alt=""></img>
                                <div className="item-content">
                                    <h6>
                                        <div className="text-left">{item.city}, <span>{item.country}</span></div>
                                        <div className="text-right">{item.price}</div>
                                    </h6>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                    )}
                    </div>
                    </div>
            }
                    

        </>
    )
}