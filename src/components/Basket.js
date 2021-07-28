import React from 'react';
import {useSelector } from "react-redux";
import { Mychart } from './Chart';
export default function Basket(props) {
  const seatValue = useSelector((state)=>state.flightSearch.adultsCount) + useSelector((state)=>state.flightSearch.minorsCount);
  const { cartItems, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const Subtotal = itemsPrice * 0.806;
  const TaxesFees  = Subtotal * 0.24;
  const totalPrice = Subtotal + TaxesFees;
  return (
    <aside>
      <div>
        {cartItems.length === 0 && <Mychart />}
        {cartItems.map((item) => (
          <div>
            <div key={item.id} className="departure-flight custom">
              <div className="start">
                <div className="logo"><img src={item.img} alt=""/></div>
                <div className="content">
                    <p>{item.name}</p>
                    <p>{item.fig}</p>
                </div>
              </div>
              <div className="cols">
                <p>{item.time} (+ {seatValue})</p>
                <p>{item.title_4}</p>
                <p>2h 45m in HNL</p>
              </div>
              <button type="button" class="close" aria-label="Close" onClick={() => onRemove(item)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="cart">
              <div className="ticket-content">
                  <div>Subtotal</div>
                  <div>${Subtotal.toFixed(0)}</div>
              </div>
              <div className="ticket-content">
                  <div>Taxes and Fees</div>
                  <div>${TaxesFees.toFixed(0) }</div>
              </div>
              <div className="ticket-content">
                  <div>Total Price</div>
                  <div>${totalPrice.toFixed(0)}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
