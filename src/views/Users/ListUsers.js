import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./ListUsers.scss";
class ListUsers extends React.Component {
    state = {
        listUser: [],
    };
    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=2");
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : [],
        });
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`);
    };
    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">Danh sach Nguoi Dung</div>
                <div className="list-user-child">
                    {listUser &&
                        listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div
                                    className="child"
                                    key={index}
                                    onClick={() =>
                                        this.handleViewDetailUser(item)
                                    }
                                >
                                    {index + 1}- {item.first_name}{" "}
                                    {item.last_name}
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}
export default withRouter(ListUsers);
