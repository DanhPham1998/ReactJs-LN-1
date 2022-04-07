import React from "react";

class DeleteTodo extends React.Component {
    state = {
        id: "",
        title: "",
    };

    handleDelete = (todo) => {
        console.log("check", todo);
        this.props.deleteTodo(todo); //Gọi hàm lên ListTodo.js
    };
    render() {
        let { title, id } = this.state;
        return (
            <button onClick={() => this.handleDelete(this.props.itemTodo)}>
                Delete
            </button>
        );
    }
}
export default DeleteTodo;
