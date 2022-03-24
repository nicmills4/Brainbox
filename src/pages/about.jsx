import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */


/**
* The About function defines the component that makes up the About page
* This component is attached to the /about path in router.jsx
*/

export default function About() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  
  return (
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">
        About BrainBox
      </h1>
      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
      <p>
         BrainBox is a refined study platform and entertainment party web-app that offers various forms of in game customizations. 
         With these features, box hosts will be able to customize previously created boxes, or create their own from scratch. 
         With a design similar to games such as Kahoot, Cards Against Humanity, and Quiplash, BrainBox offers various forms of interactions for all users.
      </p>
      <p>
        <em>
          <strong>
            BrainBox was created by Megan, Kiera, Hayden, Nic, and Evans in the University of Alabama's Capstone Computing class.
          </strong>
        </em>
      </p>
    </div>
  );
}
