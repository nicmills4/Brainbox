import * as React from "react";
import { useState } from "react";


import io from "socket.io-client";

let socket = io.connect('https://brainbox-server.glitch.me/');

// need some kind of way to differentiate if the user is the host
// or just a player (use state?)




export default function GameTest() {
  
  function GameHost() {
    if(gameHost) {
      return (
        <div>
          <h1>ur the host 😎</h1>
        </div>
      );
    }
    else {
      return (
        <div>
          <h1>ur not the host 🎮</h1>
        </div>
      );
    }
    
  }
  
  function OpeningPage() {
  if(showOpenPage) {
    return (
      <div>
        <h1 className="title">
              choose an option 💏
        </h1>
        <button onClick={setToHost}>Host a game</button>
        <p></p>
        <button onClick={setToPlayer}>Join a game</button>
      </div>
    );
  }
  else {
    return (
      <GameHost/>
    );
  }
}
  
  const [gameHost , setGameHost] = useState(true); //default is ur a host?
  const [showOpenPage, setShowOpenPage] = useState(true);
  
  const setToHost = () => {
    setGameHost(true);
    setShowOpenPage(false);
  };
  const setToPlayer = () => {
    setGameHost(false);
    setShowOpenPage(false);
  };
  
  // maybe it starts with button that says "host a game" or "join a game"
  
  
  // if ur a gamehost, make a prompt to send out to everyone?
  // receive and display responses
  // probably need some kind of component for prompt, component for response in diff files
  
  // this file needs to manage:
      // are you the game host?
          // if yes: enter prompt, then wait for responses
          // maybe you can keep entering prompts and it just gets rid of the old ones for now?
  
  
      // not the host:
          // see a wait message til host sends prompt
          // edit your response, send it in 
          // for now, maybe all responses immediately visible
  
  return (
    <div className="page">
      
      <OpeningPage/>

    </div>
  );
}
