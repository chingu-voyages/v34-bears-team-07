import React from "react";
import { Route, Link } from "react-router-dom";
import Nav from "./Nav/Nav";
// import LandingPage from './LandingPage/LandingPage';
// import GroceryList from './GroceryList/GroceryList';
import Login from "./Login/Login";
// import ItemSearch from "./Item/ItemSearch";
import AddItemFeature from "./AddItemFeature/AddItemFeature";
import Dashboard from "./Dashboard/Dashboard";
// import Footer from "./Footer/Footer";
import SignUp from "./SignUp/SignUp";
import ApiServices from "./apiServices";
import TokenServices from "./tokenServices";

export default class App extends React.Component {
    state = {
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
                this.setState({ items: data.user.pantry });
            });
        } catch (e) {}
    }

    componentDidUpdate() {
        // console.log(this.state.items, this.state.id, this.state.token);
        if (this.state.id === "" && this.state.token === "") {
            return;
        }
        ApiServices.getUser(
            // email: testwy1@test.com
            // password: 123
            this.state.id,
            `bearer ${this.state.token}`
        ).then((data) => {
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

    setId = (id) => {
        this.setState({ id: id });
    };

    setToken = (newToken) => {
        this.setState({ token: newToken });
    };

    setItems = (newItems) => {
        this.setState({ items: newItems });
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
                                <Nav
                                    setItems={this.setItems}
                                    setId={this.setId}
                                    setToken={this.setToken}
                                    setSearchTerm={this.setSearchTerm}
                                />
                            </div>
                        </div>
                    </header>
                    {/* <Route path='/'>
            <LandingPage />
          </Route>           */}
                    <Route exact path="/">
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
