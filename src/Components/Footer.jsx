import './Footer.css';
import playstorepic from '../assets/playstore.png';
import applelogo from '../assets/applelogo.jpeg';
import webapp from '../assets/webapplogo.jpeg';
import fb from '../assets/fblogo.jpeg';
import x from '../assets/x.png';
import insta from '../assets/insta.jpeg';
import link from '../assets/linkedln.png';
import you from '../assets/youtube.png';

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="smallfooterlink">
            <a href="/">About Us</a>
            <a href="/">Careers</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Testimonials</a>
            <a href="/">Sitemap</a>
            <a href="/">FAQs</a>
        </div>

        <div className="secondoffooter">
            <button><img src={playstorepic} alt="error" /><p>Google Play</p></button>
            <button><img src={applelogo} alt="error" /><p>Apple Store</p></button>
            <button><img src={webapp} alt="error" /><p>Web App</p></button>

            <div className="lastoffooter">
                <a href=""><img src={fb} alt=""/></a>
                <a href=""><img src={x} alt=""/></a>
                <a href=""><img src={insta} alt=""/></a>
                <a href=""><img src={link} alt=""/></a>
                <a href=""><img src={you} alt=""/></a>
            </div>
          <p id='lastpara'>All the copyrights are reserved so be happy to use our platform</p>
        </div>

      </div>

    </div>
  )
}
