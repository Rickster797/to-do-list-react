import React, { Component } from "react";

// shows a list of articles
class Tasks extends Component {

    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        const { tasks } = this.props;
        return (
            <React.Fragment>
                { /* check there are articles to show */ }
                { tasks.length ?
                    <ul className="list-group">
                        { /* map over each article and display a list item for each one */ }
                        { tasks.map(task => (
                            <li className="list-group-item" key={ task.id }>
                                { /* link to the article using its id */ }
                                
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
