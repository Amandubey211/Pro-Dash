import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.js";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import AppStore from "./Redux/Store/AppStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Provider store={AppStore}>
      <App />
    </Provider>
  </ChakraProvider>
);
