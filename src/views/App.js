import logo from "./logo.svg";
import "./App.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Mycomponents from "./Example/Mycomponents";
import ListTodo from "./Todos/ListTodo";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />

                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/todo">
                            <ListTodo />
                        </Route>
                        <Route path="/about">
                            <Mycomponents />
                        </Route>
                    </Switch>
                </header>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
