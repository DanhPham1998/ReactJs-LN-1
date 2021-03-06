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
        edititem: {},
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
    handleEditTodo = (todo, item) => {
        this.setState({
            editindex: todo,
            edititem: item,
        });
    };
    handleOnChangeEditTodo = (event) => {
        let editTodoCoppy = { ...this.state.edititem };
        editTodoCoppy.title = event.target.value;
        this.setState({
            edititem: editTodoCoppy,
        });
    };
    handleSaveTodo = (todo) => {
        let { listTodo, edititem } = this.state;
        if (edititem.title.length !== 0 && edititem.id === todo.id) {
            //Clone listodo trong state
            let listTodoCoppy = [...listTodo];

            //Tim vi tri (thu tu) trong listTodo Trung voi vi tri dang select vao
            let listodoIndex = listTodoCoppy.findIndex(
                (item) => item.id === todo.id
            );

            // Set lai Title cua List coppy bang voi Input
            listTodoCoppy[listodoIndex].title = edititem.title;

            //Cap nhat State
            this.setState({
                listTodo: listTodoCoppy,
                editindex: "",
            });
            toast.success("Sua Thanh Cong");
        } else {
            this.setState({
                editindex: "",
            });
        }
    };
    render() {
        let { listTodo, editindex, edititem } = this.state;
        // let isEmpty = Object.keys(editindex).length === 0;
        console.log("check rong", edititem);
        return (
            <>
                <p>Tao Dang Hoc Reactjs</p>
                <div className="list-todo-container">
                    <AddTodo addNewTodo={this.addNewTodo} />
                    <div className="list-todo-content">
                        {listTodo &&
                            listTodo.length > 0 &&
                            listTodo.map((item, index) => {
                                return (
                                    <div
                                        className="list-todo-child"
                                        key={item.id}
                                    >
                                        {index !== editindex ? (
                                            <>
                                                <span>
                                                    {index + 1}-{item.title}
                                                </span>
                                                <button
                                                    className="btn-edit"
                                                    onClick={() =>
                                                        this.handleEditTodo(
                                                            index,
                                                            item
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <span>
                                                    {index + 1}-
                                                    <input
                                                        onChange={(event) =>
                                                            this.handleOnChangeEditTodo(
                                                                event
                                                            )
                                                        }
                                                        value={edititem.title}
                                                    />
                                                </span>
                                                <button
                                                    className="btn-edit"
                                                    onClick={() =>
                                                        this.handleSaveTodo(
                                                            item
                                                        )
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
            </>
        );
    }
}
export default ListTodo;
