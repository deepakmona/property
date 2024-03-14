import './Fourthcont.css';
import giff1 from '../assets/qa.gif';
import giff2 from '../assets/quoate.gif';
import giff3 from '../assets/regester.gif';


export default function Fourthcont() {
  return (
    <div>
      <div className="fourthcont">
        <h2 id='fourhead'>Everything should be easy</h2>

      <div className="fourthcontsmall"><img src={giff1} alt="" />
      <p>Answer-Questions</p>
      <h3>Get answers to your questions quickly and easily.</h3>
      </div>
      <div className="fourthcontsmall"><img src={giff2} alt="" />
      <p>Select a quoate</p>
      <h3>
        Select a quoate and get a quote for your property.</h3>
      </div>
      <div className="fourthcontsmall"><img src={giff3} alt="" />
      <p>Get regestered</p>
      <h3>Get regestered and get a quote for your property.</h3>
      </div>

      </div>
      
    </div>
  )
}
