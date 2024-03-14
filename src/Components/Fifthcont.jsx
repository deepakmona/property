import './Fifthcont.css';
import phoneversion from '../assets/phoneversion.webp'
import { useState } from 'react';


export default function Fifthcont() {

  const [, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    alert('Please wait, This feature is under in progress when it will complete then will notify you');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div>
      <div className="fifthcont">
      <div className="phoneversion">
      <div className="phoneverhalf"><img src={phoneversion} alt="error" /></div>
      <div className="phoneverhalf">
        <p>Switch To The Fast Lane</p>
        <p id='chcolor'>Find homes and get detailed insight anytime, anywhere</p>
        <button  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>App On Play Store</button>
      </div>
      </div>

      </div>
      
    </div>
  )
}
