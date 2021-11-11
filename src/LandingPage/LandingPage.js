import React from 'react';
import './LandingPage.css';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="flex-container">
        <img
          src={process.env.PUBLIC_URL + "imgs/breadupclosecrop2.jpg"}
          alt="assortment of groceries"
        />
        <div class="banner">
          <h1>Don't let good food go to waste.</h1>
          <h4>
            Track and organize <Link to="/register">your pantry</Link> with
            Fridge Raiders!
          </h4>
        </div>
      </div>
      <div className="instructions">
        <h1>How does it work?</h1>
        <div className="step">
          <img
            src={process.env.PUBLIC_URL + "imgs/additems.png"}
            alt="assortment of groceries"
            className="small-img"
          />
          <h3>
            Search our extensive database for every day food items and add them
            to your personal pantry.
          </h3>
        </div>
        <div className="step">
          <img
            src={process.env.PUBLIC_URL + "imgs/pantryitem.png"}
            alt="assortment of groceries"
            className="small-img"
          />
          <h3>
            Visualize your pantry with date of purchase and estimated expiration
            date.
          </h3>
        </div>
        <div className="step">
          <img
            src={process.env.PUBLIC_URL + "imgs/currentitems.png"}
            alt="assortment of groceries"
            className="small-img"
          />
          <h3>
            Search and remove items from your pantry to guide your next grocery
            list.
          </h3>
        </div>
        <div className="step">
          <img
            src={process.env.PUBLIC_URL + "imgs/carts.png"}
            alt="assortment of groceries"
            className="small-img"
          />
          <h3>
            Removed items will automatically appear in your shopping cart in a
            checklist format.
          </h3>
        </div>
        <div className="step">
          <img
            src={process.env.PUBLIC_URL + "imgs/list.png"}
            alt="assortment of groceries"
            className="small-img"
          />
          <h3>
            When checked off, items will be added to your pantry again for easy
            tracking!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;