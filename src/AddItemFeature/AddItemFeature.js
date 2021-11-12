import ItemSearch from "./ItemSearch";
import ItemsToAdd from "./ItemsToAdd";
import "./AddItemFeature.css";

function AddItemFeature() {
    return (
        <div className="add-item-main-container">
            <section><ItemsToAdd /></section>
            <section><ItemSearch /></section>
        </div>
    );
}

export default AddItemFeature;

// old code below

// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import './AddItemFeature.css';

// class AddItemFeature extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itemName: '',     
//     }
//   }
  
//   handleSubmit() {
//     this.props.history.push('/')
//   }
  
//   render() {
//     console.log(this.props.history)    
//       return (
//       <div className='add-item'>        
//           <form id="add-item" onSubmit={(e) => {
//                   this.props.addItem(this.state);
//                   this.handleSubmit(); 
//                   e.preventDefault();
//           }}>
//               <div className="center">
//                   <button type="button"><i className="fa fa-plus "></i></button>
//               </div>               
//           </form>        
//       </div>
//     );
//   }  
// }

// export default withRouter(AddItemFeature);