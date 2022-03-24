import * as React from "react";
import { useState } from "react";
import Chat from "../components/chat";
import "../styles/chat.css"

import { signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase-config';

/* following chat app tutorial at 
https://www.youtube.com/watch?v=NU-HfZY3ATQ&t=209s
again but trying to put it as part of this app idk
*/

import io from "socket.io-client";

let socket = io.connect('https://brainbox-server.glitch.me/');

setTimeout(() => {
  socket.emit("blah", {blah: "blah"})
  console.log("ent")
}, 3000)


export default function ChatApp() {
  // need to somehow connect the usernames to who is logged in on the site. 
  // rn it's just whatever u enter on the chatapp join page
  
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showChat, setShowChat] = useState(false);
  
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      if(user && (room !== "")) {
        socket.emit("join_room", room);
        setShowChat(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div className="page">
      {!showChat ? (
      <div className="joinChatContainer">
          <h3>Join Chat</h3>
          <input
            type="text"
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={login}>Join A Room</button>
        </div>
      ) : (
      <Chat socket={socket} username={loginEmail} room={room} />
      )}
    </div>
  );
}