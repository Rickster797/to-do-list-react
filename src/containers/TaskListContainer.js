import { connect } from "react-redux";
import TaskList from "../components/TaskList";
import { markComplete } from "../data/actions/actions";
import { deleteTask } from "../data/actions/actions";
import { addTask } from "../data/actions/actions";



// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => ({
    tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => {
    return {
    	markComplete: (id) => dispatch(markComplete(id)),
    	deleteTask: (id) => dispatch(deleteTask(id)),
    	addTask: (data) => {
			const action = addTask(data);
			dispatch(action)
    	}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
