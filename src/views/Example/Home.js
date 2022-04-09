import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
class Home extends React.Component {
    componentDidMount() {
        console.log("Goi Ham");
        setTimeout(() => {
            this.props.history.push("/todo");
        }, 3000);
    }
    render() {
        return <div>Day la trang Home</div>;
    }
}

export default withRouter(Home);
