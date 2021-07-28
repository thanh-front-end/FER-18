import { useSelector } from "react-redux";
import creditcard from '../img/creditcard.jpg';
import map from '../img/map2.jpg';
import { hotel } from "../data/data";
import { exper } from "../data/data";
import logo from '../img/arline.jpg';


export  function FlightSummary() {
    const arrival = useSelector((state)=>state.flightSearch.arrivalValue);
    const costValue = "250.51";
    const adults = useSelector((state)=>state.flightSearch.adultsCount);
    const minors = useSelector((state)=>state.flightSearch.minorsCount);

    return (
        <div className="flight-summary-container p-y">
            <div className="flight-summary-content">
                <div className="content-left">
                    <div className="notification">
                        <p>Your flight has been booked successfully!</p>
                        <p>
                            Thank you for booking your travel with Tripma! Below is a summary of your trip to <span>{arrival.label}</span> airport in <span>{arrival.city}</span>, Việt Nam. 
                            We’ve sent a copy of your booking confirmation to your email address. 
                            You can also find this page again in My trips.
                        </p>
                    </div>
                    <div className="summary">
                        <h3>Flight summary</h3>
                        <div className="departure-flight">
                            <div className="start">
                                <div className="logo"><img src={logo} alt=""/></div>
                                <div className="cols">
                                    <p>16h 45m</p>
                                    <p>Vietnam Airlines</p>
                                </div>
                            </div>
                            <div className="cols">
                                <p>7:00AM - 4:15PM</p>
                                <p>Value</p>
                            </div>
                            <div className="cols">
                                <p>1 stop</p>
                                <p>2h 45m in HLN</p>
                            </div>
                            <div className="cols">
                                <p>$624</p>
                                <p>Round trip</p>
                            </div>
                        </div> 
                    </div>
                    <div className="bill">
                        <h3>Price breakdown</h3>
                        <div className="bill-row">
                            <p>Departing Flight</p>
                            <p>${costValue}</p>
                        </div>
                        <div className="bill-row">
                            <p>Adults</p>
                            <p>{adults}</p>
                        </div>
                        <div className="bill-row">
                            <p>Minors</p>
                            <p>{minors}</p>
                        </div>
                        <div className="bill-row">
                            <p>Total</p>
                            <p>${costValue*(adults + minors)}</p>
                        </div>
                    </div>
                    <div className="payment">
                        <h3>Payment method</h3>
                        <div>
                            <img src={creditcard} alt=""/>
                        </div>
                    </div>
                    <div className="input-group">
                        <h3>Share your travel itinerary</h3>
                        <p>You can email your itinerary to anyone by entering their email address here.</p>
                        <form>
                            <input placeholder="Email address"></input>
                            <input placeholder="Email address"></input>
                            <input placeholder="Email address"></input>
                        </form>
                        <div className="sudmit-btn-group">
                            <button>Email itinerary</button>
                            <button>Add another</button>
                        </div>
                    </div>
                    <div className="flight-route">
                        <h3>Flight Route</h3>
                        <img src={map} alt=""/>
                    </div>
                </div>
                <div className="content-right">
                    <div className="hotel">
                        <h3>Shop <span>hotels</span></h3>
                        <p>
                            Tripma partners with thousands of hotels to get you the best deal. 
                            Save up to 30% when you add a hotel to your trip.
                        </p>
                        <div className="stay-cotent">
                            {hotel.map((item, index)=>
                                <div className="stay-item item" key={index}>
                                    <img src={item.img} alt=""/>
                                    <div className="item-content">
                                        <h6>{item.title}<span>{item.price}</span></h6>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button className="all">Shop all hotels</button>
                    </div>

                    <div className="hotel">
                        <h3>Find unique <span>experiences</span></h3>
                        <p>
                            Find events and authentic cultrual experiences available exclusively to Tripma users.
                        </p>
                        <div className="stay-cotent">
                            {exper.map((item, index)=>
                                <div className="stay-item item" key={index}>
                                    <img src={item.img} alt=""/>
                                    <div className="item-content">
                                        <h6>{item.title}<span>{item.price}</span></h6>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <button className="all">View all experiences</button>
                    </div>
                </div>
            </div>
        </div>
    )
}