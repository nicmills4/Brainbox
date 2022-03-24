import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {

  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  // When the user clicks we change the header language

  return (
    <>
    <animated.div onMouseEnter={trigger} style={style}>
        <img
          src="https://cdn.glitch.global/9b37585e-907c-49d3-b25a-6fb2083b13d1/BBLogoTransparent.png?v=1645815872905"
          className="logo"
        />
      </animated.div>
      <h1 className="title">BrainBox!</h1>
      {/* When the user hovers over the image we apply the wiggle style to it */}

    </>
  );
}
