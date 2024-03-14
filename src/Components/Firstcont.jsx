import './First.css';
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';

export default function Firstcont() {

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!name.trim()) {
      alert(errors.name = 'Name is required');
    }
    if (!email.trim()) {

      alert(errors.email = 'Email is required');

    } 
    else if 
    (!/\S+@\S+\.\S+/.test(email)) 
    {
      errors.email = 'Email is invalid';
    }
    if (Object.keys(errors).length === 0) {
    
      console.log('Form submitted:', { name, email });
    } else {
     
      setErrors(errors);
    }
    console.log({ name, email});
  };


  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div>

      <div className="firstcont">
        
      <form data-aos="fade-right" onSubmit={handleSubmit} className="Card">
      <h2 id='head'>Enter  your details to get started!</h2>
      <h3>Enter Your Name Here</h3>
      <input type="text"  onChange={(event) => setName(event.target.value)} value={name} placeholder='Enter Your Name Here' />
      <h3>Enter your Email</h3>
      <input type="email" value={email} onChange={(event)=> setemail(event.target.value)} placeholder='Enter your email here' /><br /><br /><br />
      {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      <button>For Enquarie</button>
      </form>
      </div>
      
    </div>
  )
}
