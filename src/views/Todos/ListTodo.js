import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from "react-toastify";
import DeleteTodo from "./DeleteTodo";

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: "todo1", title: "an Sang" },
            { id: "todo2", title: "Choi Game" },
            { id: "todo3", title: "ngu" },
            { id: "todo4", title: "Hoc" },
        ],
        editindex: "",
    };
    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo],
        });
        toast.success("De Vai Lol");
    };
    deleteTodo = (todo) => {
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter((item) => item.id !== todo.id);
        this.setState({
            listTodo: currentTodo,
        });
        toast.success("Xoá Thành Công");
    };
    handleEditTodo = (todo) => {
        this.setState({
            editindex: todo,
        });
    };
    render() {
        let { listTodo, editindex } = this.state;
        let isEmpty = Object.keys(editindex).length === 0;
        console.log("check rong", isEmpty);
        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {listTodo &&
                        listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="list-todo-child" key={item.id}>
                                    {index !== editindex ? (
                                        <>
                                            <span>
                                                {index + 1}-{item.title}
                                            </span>
                                            <button
                                                className="btn-edit"
                                                onClick={() =>
                                                    this.handleEditTodo(index)
                                                }
                                            >
                                                Edit
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <span>
                                                {index + 1}-
                                                <input value={item.title} />
                                            </span>
                                            <button
                                                className="btn-edit"
                                                onClick={() =>
                                                    this.handleSaveTodo(index)
                                                }
                                            >
                                                Save
                                            </button>
                                        </>
                                    )}

                                    <DeleteTodo
                                        itemTodo={item} //Truyền dữ liệu sang Deltetodo.js
                                        deleteTodo={this.deleteTodo} //Truyền hàm sang Delete.js
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}
export default ListTodo;
