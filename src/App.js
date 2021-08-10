import './App.css';
import {useEffect, useState} from "react";
import {calculateTotal} from "./pricing";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [idToken, setIdToken] = useState();
    const [total, setTotal] = useState();

    const {user, isAuthenticated, isLoading, loginWithRedirect, logout, getIdTokenClaims} = useAuth0();

    useEffect(async () => {
        const data = await axios.get("https://nathans-backend-store.herokuapp.com/items")
            .then(response => response.data.items)
        setItems(data);

        if (isAuthenticated) {
            getIdTokenClaims().then(d => setIdToken(d.__raw))
        }
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

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            {isAuthenticated ?
                <div>
                    <h1>Nathan's Amazing Web Store</h1>

                    <p>{JSON.stringify(user)}</p>

                    <h3>ID token</h3>
                    <p>{JSON.stringify(idToken)}</p>

                    <img src={user['picture']}/>

                    <button onClick={(event) => logout()}>Logout</button>

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
                 :
                <div>
                    <button onClick={((event) => loginWithRedirect())}>Login!</button>
                </div>
        }
        </div>
    );
}

export default App;
