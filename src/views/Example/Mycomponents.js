import React from "react";

const user = {
    name: "Khang",
    age: 25,
};
class Mycomponents extends React.Component {
    render() {
        return (
            <>
                <div>
                    Hello Viet nam {user.name} va {user.age}
                </div>
            </>
        );
    }
}
export default Mycomponents;
