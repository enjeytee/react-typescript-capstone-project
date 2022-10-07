import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./Context.jsx";


const rootContainer = document.getElementById("root") as HTMLDivElement;

ReactDOM.createRoot(rootContainer).render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>
);