import React from "react";
import "./Demo.scss";
class AddComponent extends React.Component {
    state = {
        nameJob: "",
        salary: "",
    };
    handleChangeName = (event) => {
        this.setState({
            nameJob: event.target.value,
        });
    };
    handleChangeAge = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };
    handleClickOne = (event) => {
        event.preventDefault();
        if (!this.state.nameJob || !this.state.salary) {
            alert("Missing required params");
            return;
        }
        console.log(">>> check data input: ", this.state);
        this.props.addNewJob_Add({
            id: Math.floor(Math.random() * 1001),
            nameJob: this.state.nameJob,
            salary: this.state.salary,
        });

        this.setState({
            nameJob: "",
            salary: "",
        });
    };

    render() {
        return (
            <>
                <form>
                    <div className="input-1">
                        <label>Job</label>
                        <br />
                        <input
                            type="text"
                            value={this.state.nameJob}
                            onChange={(event) => this.handleChangeName(event)}
                        />
                    </div>
                    <div className="input-1">
                        <label>Salary</label>
                        <br />
                        <input
                            type="text"
                            value={this.state.salary}
                            onChange={(event) => this.handleChangeAge(event)}
                        />
                    </div>
                    <div>
                        <button
                            className="btn-addJob"
                            type="submit"
                            onClick={(event) => this.handleClickOne(event)}
                        >
                            Them
                        </button>
                    </div>
                </form>
            </>
        );
    }
}
export default AddComponent;
