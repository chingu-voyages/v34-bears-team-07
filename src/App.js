import React from "react";
import { Route, Link } from "react-router-dom";
import Nav from "./Nav/Nav";
// import LandingPage from './LandingPage/LandingPage';
// import GroceryList from './GroceryList/GroceryList';
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
// import Footer from "./Footer/Footer";
import TokenServices from "./tokenServices";
import ApiServices from "./apiServices";

export default class App extends React.Component {
  state = {
    items: [],
    searchTerm: "",
  };

  componentDidMount() {
    // fetch("./DummyData/data.json")
    //   .then((res) => res.json())
    //   .then((res) => this.setState({ items: res }));
    // get items from backend
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/users/6169b723c8b69562f7017d33`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzM0NTJiNjJmOTUxNmVlZWM4YzE1MyIsImlhdCI6MTYzNTU0ODExNn0.qsy9ToMr0vJUeYF7OnKIp_qiGNBo-o0dhsV82EV1YiA",
        },
      }
    )
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((data) => {
        console.log(data.user.pantry);
        this.setState({ items: data.user.pantry });
      });
  }

  addItem = (item) => {
    console.log(item);
    const newItems = this.state.items;
    newItems.push(item);
    console.log(newItems);
    this.setState({
      items: newItems,
    });
    // add endpoint
  };

  search = () => {
    return this.state.items.filter((item) =>
      item.itemName.toLowerCase().includes(this.state.searchTerm)
    );
  };

  setSearchTerm = (term) => {
    this.setState({ searchTerm: term });
  };

  render() {
    return (
      <div>
        <main>
          <header>
            <div className="group">
              <div className="item">
                <Link to="/">
                  <span className="logo">Fridge Raiders</span>
                  <br></br>
                  <span>
                    <i></i>
                  </span>
                </Link>
              </div>
              <div className="item-double">
                <Nav />
              </div>
            </div>
          </header>
          {/* <Route path='/'>
            <LandingPage />
          </Route>           */}
          <Route exact path="/">
            <Dashboard
              setSearchTerm={this.setSearchTerm}
              // items={this.search()}
              items={this.state.items}
            />
          </Route>
          <Route exact path="/login" component={Login} />
          {/* <Route path='/Grocery-List'>
            <GroceryList />
          </Route>    */}
          {/* <Route path='/Login'>
            <Login />
            </Route> */}

          {/* <Route path='/create' render={
            () => <CreateRecipe addItem={this.addItem}/>
          }/> */}
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}
