import './App.css';
import {useEffect, useState} from "react";
import {calculateTotal} from "./pricing";
import axios from "axios";


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState();

    useEffect(async () => {
        const data = await axios.get("https://nathans-backend-store.herokuapp.com/items")
            .then(response => response.data.items)
        setItems(data);
    }, [])

    const addToCart = (item) => {
        setCartItems(prevCartItems => [...prevCartItems, item]);
    };

    const removeFromCart = (item) => {
        setCartItems(prevCartItems => prevCartItems.filter(cartItem => cartItem.name !== item.name));
    }

    const onCalculateTotal = () => {
        setTotal(calculateTotal(cartItems));
    }

    return (
        <div>
            <h1>Nathan's Store</h1>

            <div>
                <button data-cy="calculate-total" onClick={onCalculateTotal}>Calculate total</button>
                {
                    total ? <p>Total is: {total}</p> : null
                }
                <p>Cart: 0</p>
                <ul>
                    {cartItems.map((item, idx) =>
                        <li key={idx}>
                            {item.name} &nbsp;
                            <button onClick={(e) => removeFromCart(item)}>Remove</button>
                        </li>
                    )}
                </ul>
            </div>

            <div className="inventory-items" style={{display: "flex", flexWrap: "wrap"}}>
                {items.map((item, idx) =>
                    <div key={idx}>
                        <p>{item.name} | ${item.price}</p>
                        <button onClick={(e) => addToCart(item)}>Add to cart</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
