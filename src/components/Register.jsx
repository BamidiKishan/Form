import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import '../App.css';
import { BsFillLockFill, BsFillPersonFill, BsFillEnvelopeOpenFill, } from "react-icons/bs"; 
import { FiPhone } from "react-icons/fi";

const Register = () => {
const history = useHistory()
const [records, setRecords] = useState([]);
 const [userRegistration, setUserRegistration] = useState({
   username: "",
   email: "",
   phone: "",
   password: "",
   male: "",
   female:""
 });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({...userRegistration, [name]: value })
  }

  const ButtonOnclick = (event) => {
    event.preventDefault('');

    // data ko console mai dikha ne k liye
    const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegistration({username: "", email: "", phone: "", password: "", male: "", female:"" });
  }


  //connect to back to front
  const PostData = async (e) => {
    e.preventDefault();

       const {username , email, phone, password, male, female } = userRegistration;

       const res = await fetch("/register", {
         method:"POST",
         headers: {
           "Content-Type" : "application/json"
         },
         body:JSON.stringify({
           username , email, phone, password, male, female 
         })
       });
   
       const data = await res.json();
   
       if(data.status === 422 || !data){
         window.alert("INvalid Registration");
         console.log("INvalid Registration");
       }else {
         window.alert("Registration Successfull");
         console.log("Successfull Registration");
   
         history.push("/login");
       }
  }

  return (
    <>
    <section className="section">
    <div className="fromcolor">
        <form onSubmit={ButtonOnclick} id="fromcolor" method="POST">
          <h1>Register</h1>
          <hr></hr>
          <br/>
          <label htmlFor="username"><BsFillPersonFill/></label>
          <input
          className="inputmargin"
            type="text"
            name="username"
            id="username"
            autoCapitalize="off"
            placeholder="username"
            value={userRegistration.username}
            onChange={handleInput}
            />
            <label htmlFor="email"><BsFillEnvelopeOpenFill/></label>
          <input
          className="inputmargin"
            type="email"
            name="email"
            id="email"
            autoCapitalize="off"
            placeholder="email"
            value={userRegistration.email}
            onChange={handleInput}
            />
            <label htmlFor="phone"><FiPhone/></label>
          <input
          className="inputmargin"
            type="text"
            name="phone"
            id="phone"
            autoCapitalize="off"
            placeholder="phone"
            value={userRegistration.phone}
            onChange={handleInput}
            />
            <label htmlFor="password"><BsFillLockFill/></label>
          <input
          className="inputmargin"
            type="password"
            name="password"
            id="password"
            autoCapitalize="off"
            placeholder="password"
            value={userRegistration.password}
            onChange={handleInput}
            />
            <br/>
            <label htmlFor="male">Male</label>
            <input
            type="radio"
            name="status"
            id="male"
            autoCapitalize="off"
            value={userRegistration.male}
            onChange={handleInput}
            />
            <label htmlFor="female">Female</label>
            <input
            type="radio"
            name="status"
            id="female"
            autoCapitalize="off"
            value={userRegistration.female}
            onChange={handleInput}
            />
            <br/>
            <br/>
            <button type="submit" className="button" onClick={PostData}>Register</button>
            </form>
      </div> 
      </section>
    </>
  );
}
export default Register;
