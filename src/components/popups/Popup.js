import React from 'react';
import './Popup.css';


function Popup(props) {
  const {trigger, setTrigger} = props;

  const handleButtonClick = ()=>{
    setTrigger(!trigger);
  }
  return ( trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            <div className='popup-btn-con'>
                <button className='close-btn' onClick={handleButtonClick}>Close</button>
            </div>
            <div className='popup-img'>
                {props.children}
            </div>
            
        </div>
    </div>
  ):"";

}

export default Popup