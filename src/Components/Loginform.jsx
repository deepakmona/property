import './Form.css';


export default function Loginform() {
  return (
    <div>
      <div className="loginform">
        <div id='blocking' className="halfoflogin"></div>
        <div id='halfoflogin' className="halfoflogin">
        <h2>Welcome Folk</h2>
        <p id='bigpara'>Welcome to our family. Please login with your personal account details letter.....</p>
        <button id='signin'>Sign in with google</button><hr/>
        <p id='or'>or</p><br/>
        <input type="email" placeholder='Email address' name="email" id="email00"/><br />
        <input type="password" placeholder='password' name="password" id="password00"/><br/>
        <a id='forgotpassword' href="">Forget password ?</a><br/>
        <button id='getstart'><a href="">Get Start</a></button>
        <button id='regester'><a href="">Regester</a></button>
        </div>

      </div>
      
    </div>
  )
}
