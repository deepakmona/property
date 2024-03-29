import './First.css';
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Firstcont() {

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [errors, setErrors] = useState({});

  
  const form = useRef();

  const sendEmail = (e) => {
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

         e.preventDefault();

        emailjs
          .sendForm('service_7nga6vq', 'template_yc4e13e', form.current, {
            publicKey: 'cFochbQ771rQN3gwe',
          })
          .then(
            () => {
              alert('Thankyou for connect with me.Now you have sucessfully connected.');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
            );
            form.current.reset();
    
    };



  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div>

      <div className="firstcont">
        
      <form ref={form} data-aos="fade-right" onSubmit={sendEmail} className="Card">
      <h2 id='head'>Enter  your details to get started!</h2>
      <h3>Enter Your Name Here</h3>
      <input name='user_name' type="text"  onChange={(event) => setName(event.target.value)} value={name} placeholder='Enter Your Name Here' />
      <h3>Enter your Email</h3>
      <input name='user_email' type="email" value={email} onChange={(event)=> setemail(event.target.value)} placeholder='Enter your email here' /><br /><br /><br />
      {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      <button type='submit' value="Send" >For Enquarie</button>
      </form>
      </div>
      
    </div>
  )
}
