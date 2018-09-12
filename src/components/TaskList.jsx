import React, { Component } from "react";

// shows a list of articles
class Tasks extends Component {

    // componentDidMount() {
    //     this.props.onLoad();
    // }

    render() {
        const { tasks } = this.props;
        return (
            <React.Fragment>
                { console.log(tasks) }
                { Object.values(tasks).length ?
                    <ul className="list-group">
                        { Object.values(tasks).map((task, index)=> (
                            <li className="list-group-item" key={ index }>
                                { task.title }


                                
                            </li>
                        ))}
                    </ul>
                    :
                    <p>No articles found</p>
                }
            </React.Fragment>
        );
    }
}

export default Tasks;
