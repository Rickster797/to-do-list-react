import { connect } from "react-redux";
import TaskList from "../components/TaskList";


// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
    return {
        // this is why storing articles in an object is useful
        tasks: state.tasks,
    };
};

const mapDispatchToProps = (dispatch, { id }) => {
    return {
    	// onLoad: () => dispatch(getTaskList(id)),
    };
};

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
