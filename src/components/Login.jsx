import React, { useState } from "react";
import '../App.css';
import { BsFillLockFill, BsFillEnvelopeOpenFill, } from "react-icons/bs"; 

const Login = () => {

    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const ButtonOnclick = (event) => {
        event.preventDefault('')
      }

    return (
     <>
    <section className="section">
     <div className="Logincolor">
        <from onClick={ButtonOnclick}>
            <h1>Login</h1>
            <hr></hr>
            <br/>
        <label htmlFor="email"><BsFillEnvelopeOpenFill/></label>
          <input
          className="loginmargin"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => {setemail (e.target.value)}}
            />
            <label htmlFor="password"><BsFillLockFill/></label>
          <input
           className="loginmargin"
            type="text"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => {setpassword (e.target.value)}}
            />

            <button type="submit" className="button">Login</button>
        </from>
        </div>
      </section>
     </>
    );


}

export default Login
  