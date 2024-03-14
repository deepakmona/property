import {useState} from 'react';
import './Navbar.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';



export default function Navbar() {


  const [active, setActive] = useState('navBar')
  // Function to toggle navbar.....
  
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }

  // Function to remove navbar.....
  
  const removeNav =()=>{
    setActive('navBar')
  }
  return (
    <>
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="/" className="logo flex"> 
        <h1 id='portfoilo'>P@roperty</h1>
          </a>
        </div>


        <div className={active}>
          <div className="navLists flex">
        <div className="navItem">
          <a style={{color:'red'}} href="/" className="navlink">Home</a>  
        </div>

        <div className="navItem">
          <a style={{color:'black'}} href="/" className="navlink">About</a>  
        </div>

        <div className="navItem">
          <a style={{color:'black'}} href="https://www.propertyfinder.ae/en/find-agent" className="navlink">Agent</a>  
        </div>

        <div className="navItem">
          <a style={{color:'black'}} href="/Projects" className="navlink">Projects</a>  
        </div>

        <div className="navItem">
          <a style={{color:'black'}} href="/Exprience" className="navlink">Exprience</a>  
        </div>
          
          <div className="navItem">
          <button id='loginbutton'>Login Here</button>
          </div>
          
       
          </div>

          <div onClick={removeNav} className="colseNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>

    </>
  )
}
