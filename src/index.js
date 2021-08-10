import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain="careers-in-code-test-practice.us.auth0.com"
            clientId="SpSv1p85gDPzpaQhQWOe2V2Mcd2GJdot"
            audience="https://my-backend.com/api/v1"
            redirectUri={window.location.origin}
            scope="read:current_user"
        >
            <App/>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
