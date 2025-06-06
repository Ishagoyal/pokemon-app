import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
