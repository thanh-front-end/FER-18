import React, { useState } from 'react';
import Select from 'react-select';
import { DatePicker } from './DatePickrer';
import ControlPassengers from './ControlPassengers';
import { Link } from 'react-router-dom';
import { getDepatureValue, getArrivalValue } from './store/FlightSearchSlice';
import { useDispatch } from 'react-redux';
import { myArr } from '../data/data';



export function ControlSelect() {
  const [selectedOptionDepature, setSelectedOptionDepature] = useState("");
  const [selectedOptionArrival, setSelectedOptionArrival] = useState("");
  const dispatch = useDispatch();
  
  const searchOnclick = () => {
    dispatch(getDepatureValue(selectedOptionDepature));
    dispatch(getArrivalValue(selectedOptionArrival));
  }

  
  return (
    
    <div className="select">
      <Select
        className="select-item"
        defaultValue={selectedOptionDepature}
        onChange={setSelectedOptionDepature}
        options={myArr}
        placeholder={"From where?"}
      />
      <Select
          className="select-item"
          defaultValue={selectedOptionArrival}
          onChange={setSelectedOptionArrival}
          options={myArr}
          placeholder={"Where to?"}
          required
      />
   
      <DatePicker />

      <ControlPassengers
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
        The content of the SimplePopover.
      </ControlPassengers>

      <button className="search-btn" onClick={searchOnclick}>
        <Link to='/flight-search'>
          Search
        </Link>
      </button>
    
    </div>
  );
}
