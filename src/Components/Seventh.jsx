import './Seventh.css';
import slidepic1 from '../assets/img001.jpg';
import slidepic2 from '../assets/img003.jpg';
import slidepic4 from '../assets/img14.jpg';
import slidepic5 from '../assets/img4.jpg';
import slidepic6 from '../assets/you1.webp';
import slidepic7 from '../assets/img17.jpg';
import slidepic8 from '../assets/img16.jpg';
import slidepic9 from '../assets/img15.jpg';
import slidepic10 from '../assets/img14.jpg';

export default function Seventh() {


  return (
    <div>
      <div className="seventhcont">
        <h2>Recently Added Properties</h2>
      
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active">
        <div className="seventhpercent">
        <div className="seventhhalfthree">
          <img src={slidepic1} alt="error" />
          <p>Get regestered</p>
          <h3>Get regestered and get a quote for your property.</h3>
            <button><a href="">See Details</a></button>
        </div>
      <div className="seventhhalfthree"> <img src={slidepic2} alt="error" />
          <p>Get regestered</p>
          <h3>Get regestered and get a quote for your property.</h3>
            <button><a href="">See Details</a></button>
          </div>
      <div className="seventhhalfthree"> <img src={slidepic4} alt="error" />
          <p>Get regestered</p>
          <h3>Get regestered and get a quote for your property.</h3>
            <button><a href="">See Details</a></button>
          </div>
    </div>
    </div>



    <div className="carousel-item">
        <div className="seventhpercent">
    
        <div className="seventhhalfthree">
          <img src={slidepic5} alt="error" />
          <p>Get regestered</p>
          <h3>Get regestered and get a quote for your property.</h3>
            <button><a href="">See Details</a></button>
        </div>
      <div className="seventhhalfthree"> <img src={slidepic6} alt="error" />
          <p>Get regestered</p>
          <h3>Get regestered and get a quote for your property.</h3>
            <button><a href="">See Details</a></button>
          </div>
      <div className="seventhhalfthree"> <img src={slidepic7} alt="error" />
          <p>Get regestered</p>
          <h3>Get regestered and get a quote for your property.</h3>
            <button><a href="">See Details</a></button>
          </div>

    </div>
    </div>

    <div className="carousel-item">
      <div className="seventhpercent">     
      <div className="seventhhalfthree">
          <img src={slidepic8} alt="error" />
          <p>Get regestered</p>
          <h3>Get regestered and get a quote for your property.</h3>
            <button><a href="">See Details</a></button>
        </div>
      <div className="seventhhalfthree"> <img src={slidepic9} alt="error" />
          <p>Get regestered</p>
          <h3>Get regestered and get a quote for your property.</h3>
            <button><a href="">See Details</a></button>
          </div>
      <div className="seventhhalfthree"> <img src={slidepic10} alt="error" />
          <p>Get regestered</p>
          <h3>Get regestered and get a quote for your property.</h3>
            <button><a href="">See Details</a></button>
          </div>
    </div>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </div>

    </div>
  )
}
