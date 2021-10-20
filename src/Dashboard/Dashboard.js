import React from 'react';
import './Dashboard.css';
import Item from '../Item/Item';

function Dashboard(props) {
  return (
    <div className='main'>
      <header role="banner">
        <h1>Title</h1>
      </header>
      <section className='form-section'>
        <form className="search" onSubmit={
          (e) => {
            e.preventDefault();
            props.setSearchTerm(e.target.childNodes[0].value)
          } 
        }>
          <input type="text" placeholder="Search.." name="search"/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </section>
      {props.items.map((item, idx) => <Item key={idx} item={item}/>)}
    </div>
  );
}

export default Dashboard;