import './Sixth.css';
import { useState,useEffect } from 'react';
import sample1 from '../assets/propertiespic.png';
import sample2 from '../assets/propertylistedpic.png';
import sample3 from '../assets/sellerspic.png';

export default function Sixthcont() {
  const [count65000, setCount65000] = useState(0);
  const [count40000, setCount40000] = useState(0);
  const [count20000, setCount20000] = useState(0);

  useEffect(() => {
    const interval65000 = setInterval(() => {
      setCount65000(prevCount => {
        if (prevCount >= 65000) {
          clearInterval(interval65000); // Stop the interval when count reaches 65000
          return prevCount; // Return the current count without incrementing
        }
        return prevCount + 3; // Increment the count by 3
      });
    },); // Interval in milliseconds

    const interval40000 = setInterval(() => {
      setCount40000(prevCount => {
        if (prevCount >= 40000) {
          clearInterval(interval40000); // Stop the interval when count reaches 40000
          return prevCount; // Return the current count without incrementing
        }
        return prevCount + 3; // Increment the count by 3
      });
    },); // Interval in milliseconds

    const interval20000 = setInterval(() => {
      setCount20000(prevCount => {
        if (prevCount >= 20000) {
          clearInterval(interval20000); // Stop the interval when count reaches 20000
          return prevCount; // Return the current count without incrementing
        }
        return prevCount + 3; // Increment the count by 3
      });
    },); // Interval in milliseconds

    return () => {
      clearInterval(interval65000);
      clearInterval(interval40000);
      clearInterval(interval20000);
    };
  }, []);


  return (
    <div>
      <div className="sixthcont">
        <div className="sixthcontpercent">
        <div className="threeofsixth"><img src={sample1} alt="error" /><p id='numbers'>{count65000}+</p><p id='headofprop' >Properties Listed</p><p id='hrs' >In last 24 hours</p></div>
        <div className="threeofsixth"><img src={sample2} alt="error" /><p id='numbers'>{count40000}+</p><p id='headofprop' >Properties Listed</p><p id='hrs' >In last 24 hours</p></div>
        <div className="threeofsixth"><img src={sample3} alt="error" /><p id='numbers'>{count20000}+</p><p id='headofprop' >Properties Listed</p><p id='hrs' >In last 24 hours</p></div>
        </div>  

      </div>

    </div>
  )
}
