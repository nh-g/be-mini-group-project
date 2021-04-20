// NPM Packages
import React from "react";

// Project files
import logo from "../../assets/dumpty.svg";
import truck from "../../assets/truck.png";

export default function HomePage() {
  return (
    <div className="card">
      <div className="card-body">
        <img className="logo" src={logo} />
        <p>
          Welcome to <em>Dumpty</em> a platform for Garbage Trucks true lovers.
          <br />
          <br />
          Here you will find the biggest fanbase. <br />
          And don't forget : <br />
          <em>In Crap We Trust</em>
        </p>
        <ul>
          <li>
            <a
              target="blank"
              href="https://store.steampowered.com/app/294830/RECYCLE/"
            >
              Game
            </a>
          </li>
          <li>
            <a target="blank" href="https://en.wikipedia.org/wiki/Reference">
              References{" "}
            </a>
          </li>
        </ul>
      </div>

      <img className="illustration" src={truck} />
    </div>
  );
}
