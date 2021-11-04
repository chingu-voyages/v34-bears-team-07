function ItemToAddCard({ item }) {
    return (
        <div className="item-to-add-card-container">
            <div>
                {item.itemName}: {item.qty}
            </div>
            <small>
                Purchase Date:{item.purchaseDate.toLocaleDateString()}
            </small>
        </div>
    );
}

export default ItemToAddCard;
