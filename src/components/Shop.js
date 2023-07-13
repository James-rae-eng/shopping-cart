import Products from './Products';

const Shop = (props) => {

    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();

        const itemId = e.target.id.value;
        const quantity = e.target.quantity.value;
        // Send item to cart
        props.addToCart(itemId, quantity);
    }

    return (
        <div className="shop">
           {Products.map(product => {
                return <div className="product" key={product.id}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>£{product.price}</p>
                            <form method="post" onSubmit={handleSubmit}>
                                <input name="quantity" type="number" defaultValue="1" min="1"/>
                                <input type="hidden" name="id" value={product.id} />
                                <button type="submit">Add to cart</button>
                            </form> 
                        </div>
            })}
        </div>
    );
}

export default Shop;