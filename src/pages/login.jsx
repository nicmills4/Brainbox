import * as React from "react";
import { useState } from "react"; 
import { createUserWithEmailAndPassword,
onAuthStateChanged,
signOut,
signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase-config';
import '../styles/styles.css';


export default function Login() {
  
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
    // user currently logged in
  const [user, setUser] = useState({});
  
    // user logs into other acct or signs out
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const logout = async () => {
    await signOut(auth);
  };
  
  return (
    <div className="App">
      <div>
        <h2 className="title">Sign up!</h2>
        <h4> Register User </h4>
        <input placeholder="Email..." onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}/>
        <input placeholder="Password..." onChange={(event) => {
          setRegisterPassword(event.target.value);
          }}/>
        <button onClick={register}> Create User </button>
      </div>
      
      {/*<div>
        <h4> Login </h4>
        <input placeholder="Email..." onChange={(event) => {
          setLoginEmail(event.target.value);
          }}/>
        <input placeholder="Password..." onChange={(event) => {
          setLoginPassword(event.target.value);
          }}/>
        <button onClick={login}> Login </button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email} {" "}

      <button> Sign Out </button> */}
    </div>
  );
}