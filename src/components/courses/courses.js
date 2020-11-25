import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as courseActions from '../../redux/actions/courseActions';
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {

    state = {
        course: {
            title: ""
        }
    }

    handleChange = (event) => {
        let course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Dispatcher user - Case I
        // this.props.dispatch(courseActions.createCourse(this.state.course));

        // Dispatcher user - Case II
        //this.props.createCourse(this.state.course);

        // Dispatcher user - Case III
        this.props.actions.createCourse(this.state.course);
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h1>Courses</h1>
            <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title} />
                <input type="submit" name="Save" value="Save" />
                <div className="jumbotron m-2">
                    <ul>
                    {this.props.courses.map(course => <li key={course.title}>{ course.title}</li> )}
                    </ul>
                </div>
        </form>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    // Dispatcher user - Case I
    //dispatch: PropTypes.func.isRequired

    // Dispatcher user - Case II
    //createCourse: PropTypes.func.isRequired

    // Dispatcher user - Case III
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return { courses: state.courses};
}

// Dispatcher user - Case I
//export default connect(mapStateToProps)(CoursesPage);

// Dispatcher user - Case II
function mapDispatchToProps(dispatch) {
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))

        // Dispatcher user - Case III
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);