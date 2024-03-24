import './Second.css';
import img1 from '../assets/img2.jpg';
import img2 from '../assets/img3.jpg';
import img3 from '../assets/thanecity.png';
import img4 from '../assets/img6.jpg';
import img5 from '../assets/img7.jpeg';
import img6 from '../assets/img8.jpeg';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Secondcont() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);


  return (
    <div>
      
      <div className="secondcont">
  
      <h1 data-aos="flip-left" id='housing' >Housing Edge</h1>
      <div data-aos="fade-up" className="smallcont2">

      <div className="scont" data-aos="flip-right"><img src={img1} alt="error" /><br /><p>Pay on Credit</p></div>
      <div className="scont" data-aos="flip-right"><img src={img2} alt="error" /><br /><p>Personal Loans</p></div>
      <div className="scont" data-aos="flip-right"><img src={img3} alt="error" /><br /><p>Line of Crdit</p></div>
      <div className="scont" data-aos="flip-right"><img src={img4} alt="error" /><br /><p>Home Interiors</p></div>
      <div className="scont" data-aos="flip-right"><img src={img5} alt="error" /><br /><p>Home Loans</p></div>
      <div className="scont" data-aos="flip-right"><img src={img6} alt="error" /><br /><p>Housing Protect</p></div>

      </div>

      </div>
      </div>
  )
}
