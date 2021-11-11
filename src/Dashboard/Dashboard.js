import React from "react";
import "./Dashboard.css";
import Item from "../Item/Item";
import { useHistory } from "react-router-dom";
// import AddItemFeature from "../AddItemFeature/AddItemFeature";

function Dashboard(props) {
  let history = useHistory();
    function handleClick() {
        history.push("/additem");
    }

  return (
    <section className="main">
      <header role="banner" className="pantry-header">
        <h1>Pantry</h1>
      </header>

      <div className="group">
        <section className="item-double current-items ">
          <h2 className="center">Current Items</h2>
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
          <div>
            {props.items.map((item, idx) => (
              <Item key={idx} item={item} />
            ))}
          </div>
        </section>

        <section className="add-icon item-single add-items">
          <h2 className="center">Add Items</h2>
          <br/>
          <div className="center">
            <button onClick={handleClick} type="button">
              <i className="fa fa-plus center"></i>
            </button>
            {/* <AddItemFeature /> */}
          </div>                    
        </section>
      </div>
    </section>
  );
}

export default Dashboard;
