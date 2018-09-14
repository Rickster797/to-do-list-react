import React, { Component } from "react";
import { markComplete } from "../data/actions/actions";
import { deleteTask } from "../data/actions/actions";
import Form from "./forms/form";

const buttonStyle = {
    marginRight: 180,
};

const delButtonStyle = {
    float: 'right',
};

const ulStyle = {
    marginTop: 20,
};

const addTaskButton = {
    marginBottom:20,
};

// shows a list of articles
class TaskList extends Component {

    componentDidMount() {
        this.props.getTasks()
    }

    render() {
        const { tasks, markComplete, deleteTask, addTask, getTasks } = this.props;
        console.log(tasks);
        return (
            <React.Fragment>
            <h1>To do List</h1>
            <button className="btn btn-primary" style={addTaskButton}>Add Task</button>
                <Form addTask={addTask}/>
                { tasks && Object.values(tasks).length ?
                    <ul className="list-group" style={ulStyle}>
                        { /* map over each article and display a list item for each one */ }
                        { Object.values(tasks).map((task, index )=> (
                           <li className="list-group-item" key={ index }>
                           { task.complete ? 
                                (<button className="btn btn-success" style={buttonStyle} onClick={() => markComplete(task.id)}>Completed</button>)
                                : (<button className="btn btn-danger" style={buttonStyle} onClick={() => markComplete(task.id)}>To do</button>)
                            }
                                { task.title }
                                <button className="btn btn-warning" style={delButtonStyle} onClick={() => deleteTask(task.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    :
                    <p>No tasks found</p>
                }
            </React.Fragment>
        );
    }
}

export default TaskList;
