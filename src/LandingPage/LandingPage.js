import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="flex-container">
        <img
          src={process.env.PUBLIC_URL + "imgs/breadupclosecrop2small.jpg"}
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
      <h1>How does it work?</h1>
      <div className="instructions">
        <div className="step">
          <img
            src={process.env.PUBLIC_URL + "imgs/additems.png"}
            alt="search feature to add items"
            className="small-img"
          />
          <div className="text">
            <h3>
              Search our extensive database for every day food items and add
              them to your personal pantry.
            </h3>
          </div>
        </div>
        <div className="step">
          <img
            src={process.env.PUBLIC_URL + "imgs/pantry.png"}
            alt="list of items added to pantry"
            className="small-img"
          />
          <h3>
            Visualize your pantry with date of purchase, estimated expiration
            date, and quantity.
          </h3>
        </div>
        <div className="step">
          <img
            src={process.env.PUBLIC_URL + "imgs/remove.png"}
            alt="list of items added to pantry with remove button highlighted"
            className="small-img"
          />
          <h3 className="text">
            Search and remove items from your pantry to guide your next grocery
            list.
          </h3>
        </div>
        <div className="step">
          <img
            src={process.env.PUBLIC_URL + "imgs/grocerylist.png"}
            alt="grocery list"
            className="small-img"
          />
          <h3 className="text">
            When you remove an item, it will automatically appear in the grocery
            list page.
          </h3>
        </div>
        <div className="step">
          <img
            src={process.env.PUBLIC_URL + "imgs/addtopantry.png"}
            alt="grocery list with add to pantry button highlighted"
            className="small-img"
          />
          <h3 className="text">
            Utilize your grocery list on a shopping trip and add items to your
            pantry with a click of a button!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
