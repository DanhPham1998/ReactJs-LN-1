import React from "react";
import "./ListTodo.scss";

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: "todo1", title: "an Sang" },
            { id: "todo2", title: "Choi Game" },
            { id: "todo3", title: "ngu" },
            { id: "todo4", title: "Hoc" },
        ],
    };
    render() {
        let { listTodo } = this.state;
        return (
            <div className="list-todo-container">
                <div className="add-list">
                    <input type="text" />
                    <button type="button">Add</button>
                </div>
                <div className="list-todo-content">
                    {listTodo &&
                        listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="list-todo-child" key={item.id}>
                                    <span>
                                        {index + 1}-{item.title}
                                    </span>
                                    <button className="btn-edit">Edit</button>
                                    <button>Delete</button>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}
export default ListTodo;
