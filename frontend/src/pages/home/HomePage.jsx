// NPM Packages
import React from "react";

// Project files
import logo from "../../assets/dumpty.svg";
import truck from "../../assets/truck.png";

export default function HomePage() {
  return (
    <div className="card">
      <div className="card-body">
        
        <img className="logo"src={logo}/>
        <p>
         <em>Dumpty</em> is a luxury service of Garbage Collection.<br/>
         Welcome to the world of upCycling.<br/>
         Our garbage officers are the best in the world, they are all diplomed from the High University of Uppsala.


        </p>
        <ul>
          <li>
            <a target="blank" href="https://en.wikipedia.org/wiki/Pricing">Pricing</a>
          </li>
          <li>
            <a target="blank" href="https://en.wikipedia.org/wiki/Reference">References </a>
          </li>
       
        </ul>
      </div>
      
      <img className="illustration"src={truck}/>
    </div>
  );
}
