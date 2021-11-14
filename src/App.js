import React from "react";
import { Route, Link } from "react-router-dom";
import Nav from "./Nav/Nav";
import LandingPage from "./LandingPage/LandingPage";
import GroceryList from "./GroceryList/GroceryList";
import Login from "./Login/Login";
import AddItemFeature from "./AddItemFeature/AddItemFeature";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer/Footer";
import SignUp from "./SignUp/SignUp";
import ApiServices from "./apiServices";
import TokenServices from "./tokenServices";

export default class App extends React.Component {
  state = {
    groceryItems: [],
    items: [],
    searchTerm: "",
    id: "",
    token: "",
    msg: "",
  };

  componentDidMount() {
    try {
      const localToken = TokenServices.getAuthToken();
      const id = TokenServices.decodeToken(localToken).id;
      this.setState({ id: id, token: localToken });
      ApiServices.getUser(
        // email: testwy1@test.com
        // password: 123
        id,
        `bearer ${localToken}`
      ).then((data) => {
        this.setState({
          items: data.user.pantry,
          groceryItems: data.user.cart,
        });
      });
    } catch (e) {}
  }

  componentDidUpdate() {
    if (this.state.id === "" && this.state.token === "") {
      return;
    }
    ApiServices.getUser(
      // email: testwy1@test.com
      // password: 123
      this.state.id,
      `bearer ${this.state.token}`
    ).then((data) => {
      this.setState({ items: data.user.pantry, groceryItems: data.user.cart });
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

  grocerySearch = () => {
    return this.state.groceryItems.filter((item) =>
      item.itemName.toLowerCase().includes(this.state.searchTerm)
    );
  };

  setSearchTerm = (term) => {
    this.setState({ searchTerm: term });
  };

  setId = (id) => {
    this.setState({ id: id });
  };

  setToken = (newToken) => {
    this.setState({ token: newToken });
  };

  setItems = (newItems) => {
    this.setState({ items: newItems });
  };

  setGroceryItems = (newGroceryItems) => {
    this.setState({ groceryItems: newGroceryItems });
  };

  render() {
    return (
      <div>
        <main>
          <header className="nav-bg">
            <div className="group">
              <div className="item">
                <Link to="/">
                  <span className="logo">Fridge Raiders</span>
                </Link>
              </div>
              <div className="item-double">
                <Nav
                  setItems={this.setItems}
                  setId={this.setId}
                  setToken={this.setToken}
                  setSearchTerm={this.setSearchTerm}
                />
              </div>
            </div>
          </header>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard
              setSearchTerm={this.setSearchTerm}
              items={this.search()}
            />
          </Route>
          <Route exact path="/login">
            <Login setId={this.setId} setToken={this.setToken} />
          </Route>
          <Route exact path="/register">
            <SignUp setId={this.setId} setToken={this.setToken} />
          </Route>
          <Route exact path="/addItem">
            <AddItemFeature {...this.state} />
          </Route>
          <Route path="/grocery-List">
            <GroceryList
              setSearchTerm={this.setSearchTerm}
              items={this.grocerySearch()}
            />
          </Route>
        </main>
        <Footer />
      </div>
    );
  }
}
