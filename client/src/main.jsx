// react:
import React from 'react';
import ReactDOM from 'react-dom/client';
// src:
import App from './App.jsx';
// import ErrorPage from "./pages/error-page/error-page.jsx";

// Apollo Client:
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Apollo client (fetching/state mgmt library)
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/',
});
//****** There is a way to work with env variables with Vite.js, either way the server needs to be up and running*/

// react router:
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
