import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";
import { BrowserRouter as BRouter, Routes, Route }
  from 'react-router-dom';


/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// Icons
import { BarsIcon, ReadMeIcon, SearchIcon, ToolboxIcon, SignInIcon } from "./styles/icons.jsx";

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router hook={useHashLocation}>
      <Seo />
      {/* Header links to Home and About, Link elements matched in router.jsx */}
      <header className="header">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/about">About</Link>
          <span className="divider">|</span>
          <Link href="/login">Make Account</Link>
          <span className="divider">|</span>
          <Link href="/search">Search</Link>
          <span className="divider">|</span>
          <Link href="/chatapp">Chat</Link>
          <span className="divider">|</span>
          <Link href="/gametest">Game</Link>
        </div>
      </header>
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
      
      {/* Footer*/}
      <footer className="footer">
        <p>
          Built with <a href="https://reactjs.org/">React</a> on{" "}
          <a href="https://glitch.com/">Glitch</a>.
        </p>
      </footer>
      
    </Router>
  );
}
