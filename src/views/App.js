import logo from "./logo.svg";
import "./App.scss";
import Mycomponents from "./Example/Mycomponents";
import ListTodo from "./Todos/ListTodo";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                {/* <Mycomponents /> */}
                <ListTodo></ListTodo>
            </header>
        </div>
    );
}

export default App;
