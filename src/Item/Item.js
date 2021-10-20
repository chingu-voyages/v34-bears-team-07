// import React from 'react';

// function Item(props) {
//     let image = "../../images/no-image.jpg"
//     if (props.item.coffeeImage !== '') {
//         image = props.item.coffeeImage
//     }
//     let ingredients = props.item.ingredients.split('\n').map((ingridient, idx) => {
//         return (<li key={idx}>{ingridient}</li>)
//     })

//     let instructions = props.item.instruction.split('\n').map((instruction,idx) => {
//         return (<li key={idx}>{instruction}</li>)
//     })
    
//     return(
//         <section className='form-section'>
//             <div className='group'>
//                 <div className='item'>
//                     <img src={image} alt=''/>
//                 </div>
//                 <div className='item-double'>
//                     <h2 className='center'>{props.item.coffeeName}</h2>
//                     <p>{props.item.description}</p>
//                 </div>
//             </div>
//             <div className='item'>
//                 <h2>Ingredients</h2>
//                 <ul>{ingredients}</ul>
//             </div>
//             <div className='item'>
//                 <h2>Instructions</h2>
//                 <ol>{instructions}</ol>
//             </div>
//             <br></br>            
//         </section>
//     )
// }

// export default Item;