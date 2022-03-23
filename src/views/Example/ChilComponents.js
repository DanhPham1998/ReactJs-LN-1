import React from "react";

class ChilComponents extends React.Component {
    handleClickBtn = () => {
        alert("Click");
    };
    handleClickDelete = (job) => {
        console.log("check", job);
        this.props.deleteJob_Child(job);
    };
    render() {
        let { name, age, address, jobs_Child } = this.props;

        return (
            <>
                <div className="Jobs-List">
                    {jobs_Child.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.nameJob}-{item.salary}
                                <></>
                                <button
                                    onClick={() => this.handleClickDelete(item)}
                                >
                                    x
                                </button>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}
// const ChilComponents = () => {
//     <br />;
//     return <div margin-top="50px">This Is ChildComponent </div>;
// };
export default ChilComponents;
