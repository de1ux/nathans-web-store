import './App.css';
import {useEffect, useState} from "react";
import {calculateTotal} from "./pricing";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState();

    const [accessToken, setAccessToken] = useState();

    const {user, isLoading, isAuthenticated, loginWithRedirect, getAccessTokenSilently} = useAuth0();

    useEffect(async () => {
        if (isAuthenticated) {
            getAccessTokenSilently().then(token => setAccessToken(token))
        }
    }, [isAuthenticated])

    useEffect(async () => {
        if (!accessToken) {
            return;
        }

        const data = await axios.get("http://localhost:4000/items", {})
            .then(response => response.data.items)
        setItems(data);
    }, [accessToken])

    const addToCart = (item) => {
        setCartItems(prevCartItems => [...prevCartItems, item]);
    };

    const removeFromCart = (item) => {
        setCartItems(prevCartItems => prevCartItems.filter(cartItem => cartItem.name !== item.name));
    }

    const onCalculateTotal = () => {
        setTotal(calculateTotal(cartItems));
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!isAuthenticated) {
        loginWithRedirect();
        return <p>Going to Auth0 to login...</p>
    }

    return (
        <div>
            <h1>Nathan's Amazing Web Store</h1>

            <p>{JSON.stringify(user)}</p>

            <img src={user['picture']} />

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
