import React from 'react';

function Item(props) {
    // let image = "../../images/no-image.jpg"
    // if (props.item.coffeeImage !== '') {
    //     image = props.item.coffeeImage
    // }
        
    return(
        <section className='form-section'>
            <div className='group'>
                {/* <div className='item'>
                    <img src={image} alt=''/>
                </div> */}
                <div className='item'>
                    <h2>{props.item.name}</h2>                
                </div>
                <div className='item'>
                    <h3>
                        DOP 
                        <p className='center'> {props.item.puchaseDate}</p>
                    </h3>
                </div>
                <div className='item'>
                    <h3>
                        EXP 
                        <p className='center'>{props.item.expirationDate}</p>
                    </h3>                    
                </div>
                <div className='item'>
                    <h3>
                        QTY 
                        <p className='center'>{props.item.quantity}</p>
                    </h3>                    
                </div>
                <div className='remove item '>          
                    <button type="button"><i className="fa fa-minus"></i></button>
                </div>
            </div>
            <br></br>           
        </section>
    )
}

export default Item;