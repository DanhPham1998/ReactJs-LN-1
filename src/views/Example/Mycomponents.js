import React from "react";
import ChilComponents from "./ChilComponents";

class Mycomponents extends React.Component {
    state = {
        name: "",
        age: 24,
        arrJobs: [
            { id: 1, nameJob: "IT", salary: "200 $" },
            { id: 2, nameJob: "DI~", salary: "400 $" },
            { id: 3, nameJob: "Desiner", salary: "600 $" },
        ],
    };
    handleClickBtn = () => {
        alert("Click");
    };
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    render() {
        console.log("Check State", this.state);
        return (
            <>
                <div className="input-1">
                    <label>Name</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleChangeName(event)}
                    />
                </div>
                <div>
                    <button onClick={() => this.handleClickBtn()}>
                        Click One
                    </button>
                </div>

                <ChilComponents
                    name={"danh"}
                    age={25}
                    address={"Nha Trang"}
                    jobs={this.state.arrJobs}
                />
            </>
        );
    }
}
export default Mycomponents;
