import '../Components/Thirdcont.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import i1 from '../assets/img12.jpg';
import i2 from '../assets/img17.jpg';
import i3 from '../assets/airpot.webp';
import i4 from '../assets/img5.png';
import i5 from '../assets/img8.jpg';
import i6 from '../assets/img10.webp';
import i7 from '../assets/img6.jpg';
import i8 from '../assets/img21.avif';
import i9 from '../assets/img22.avif';
import i10 from '../assets/img23.avif';
import i11 from '../assets/img7.jpeg';
import i12 from '../assets/lukhnowcity.jpg';


export default function Thirdcont() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [])
  return (
    <div>
      
      <div className="thirdcont">
        <h2 id='hea1'>Find Your Property in Your Preferred City</h2>

        <div data-aos="fade-up" className="smallcforsmalldiv">
        <div data-aos="zoom-in-down" className="smcont"><img src={i1} alt="error" /><br /><p>Pay on Credit</p></div>
        <div data-aos="zoom-in-down" className="smcont"><img src={i2} alt="error" /><br /><p>Personal Loans</p></div>
        <div data-aos="zoom-in-down" className="smcont"><img src={i3} alt="error" /><br /><p>Line of Crdit</p></div>
        <div data-aos="zoom-in-down" className="smcont"><img src={i4} alt="error" /><br /><p>Home Interiors</p></div>
        <div data-aos="zoom-in-down" className="smcont"><img src={i5} alt="error" /><br /><p>Home Loans</p></div>
        <div data-aos="zoom-in-down" className="smcont"><img src={i6} alt="error" /><br /><p>Housing Protect</p></div>
      </div>

      <div data-aos="zoom-in-down" className="smallcforsmalldiv">
      <div data-aos="zoom-in-down" className="smcont"><img src={i7} alt="error" /><br /><p>Pay on Credit</p></div>
      <div data-aos="zoom-in-down" className="smcont"><img src={i8} alt="error" /><br /><p>Personal Loans</p></div>
      <div data-aos="zoom-in-down" className="smcont"><img src={i9} alt="error" /><br /><p>Line of Crdit</p></div>
      <div data-aos="zoom-in-down" className="smcont"><img src={i10} alt="error" /><br /><p>Home Interiors</p></div>
      <div data-aos="zoom-in-down" className="smcont"><img src={i11} alt="error" /><br /><p>Home Loans</p></div>
      <div data-aos="zoom-in-down" className="smcont"><img src={i12} alt="error" /><br /><p>Housing Protect</p></div>
      </div>


      </div>


    </div>
  )
}
