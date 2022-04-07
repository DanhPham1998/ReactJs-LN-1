import React from "react";

class AddTodo extends React.Component {
    state = {
        title: "",
    };
    handleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    handleOnlickTitle = () => {
        if (!this.state.title) {
            alert("Missing Title");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
        };
        this.props.addNewTodo(todo);
        this.setState({
            title: "",
        });
    };
    render() {
        let { title } = this.state;
        return (
            <div className="add-list">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => this.handleOnchangeTitle(event)}
                />
                <button
                    className="btn-add"
                    type="button"
                    onClick={() => this.handleOnlickTitle()}
                >
                    Add
                </button>
            </div>
        );
    }
}
export default AddTodo;
