import React from "react";
import GroceryItem from "../GroceryItem/GroceryItem";
import { useHistory } from "react-router-dom";

function GroceryList(props) {
  let history = useHistory();
  function handleClick() {
    history.push("/additem");
  }

  return (
    <section className="main">
      <header role="banner" className="pantry-header">
        <h1>Grocery List</h1>
      </header>

      <div className="group">
        <section className="item-double current-items">
          <h2 className="center">Items To Purchase</h2>
          <br />
          <div className="form-section">
            <form
              className="search center"
              onSubmit={(e) => {
                e.preventDefault();
                props.setSearchTerm(e.target.childNodes[0].value);
              }}
            >
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <div >
            <button className="button-base-center center-button" onClick={handleClick} type="button">
              Add Items
            </button>
          </div>
          <div>
            {props.items.map((item, idx) => (
              <GroceryItem key={idx} item={item} />
            ))}
          </div>
        </section>        
      </div>
    </section>
  );
}

export default GroceryList;
