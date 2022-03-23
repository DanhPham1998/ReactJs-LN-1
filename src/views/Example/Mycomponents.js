import React from "react";
import ChilComponents from "./ChilComponents";
import AddComponent from "./AddComponent";

class Mycomponents extends React.Component {
    state = {
        arrJobs: [
            { id: 1, nameJob: "IT", salary: "200 " },
            { id: 2, nameJob: "DI~", salary: "400 " },
            { id: 3, nameJob: "Desiner", salary: "600 " },
        ],
    };

    addNewJob = (job) => {
        console.log("check job from parent: ", job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });
    };
    deleteJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter((item) => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs,
        });
    };
    render() {
        return (
            <>
                <AddComponent addNewJob_Add={this.addNewJob} />

                <ChilComponents
                    jobs_Child={this.state.arrJobs}
                    deleteJob_Child={this.deleteJob}
                />
            </>
        );
    }
}
export default Mycomponents;
