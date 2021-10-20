import React from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import LandingPage from './LandingPage/LandingPage';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';

export default class App extends React.Component {
  state = {
    items: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('https://')
    .then(res => res.json())
    .then(res => this.setState({items:res}))  
    // get items from backend
  }

  addItems = (item) => {
    console.log(item)
    const newItems = this.state.items;
    newItems.push(item);
    console.log(newItems)
    this.setState({
      items: newItems
    })
    // add endpoint
  }

  search = () => {
    return this.state.items.filter((item) => item.itemName.toLowerCase().includes(this.state.searchTerm))
  }

  setSearchTerm = (term) => {
    this.setState({searchTerm: term})
  }

  render() {    
    return (
      <div>
        <main>
          <header >
            <div className='group'>
              <div className='item'>
                <Link to='/'>
                  <span className='logo'>TITLE</span>
                  <br></br>
                  <span><i></i></span>
                </Link>              
              </div>
              <div className='item-double'>
                <Nav/>
              </div>
            </div>            
          </header>   
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/discover'>
            <Dashboard setSearchTerm={this.setSearchTerm} items={this.search()}/>
          </Route>
          {/* <Route path='/create' render={
            () => <CreateRecipe addItem={this.addItem}/>
          }/>                         */}
        </main>
        <Footer/>        
      </div>
    );
  }  
}