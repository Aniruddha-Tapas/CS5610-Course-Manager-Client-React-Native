import React from 'react'
import {View} from 'react-native'
import {Text, Button, ListItem} from 'react-native-elements'


class ShowAssignment extends React.Component {

    static navigationOptions = {title: 'All Assignments'};

    constructor(props) {
        super(props);
        this.state = {
            topicId: 1,
            assignments: []
        }
    }

    componentDidMount() {


        const topicId = this.props.navigation.getParam("topicId");
        this.setState({topicId: topicId});
        fetch("http://localhost:8080/api/topic/" + topicId + "/assignment")
            .then(response => (response.json()))
            .then(assignments => {
                this.setState({assignments: assignments})
            })

    }

    componentWillReceiveProps(newProps) {
        const newLessonId = newProps.navigation.getParam("topicId");
        fetch("http://localhost:8080/api/topic/" + newLessonId + "/assignment")
            .then(response => (response.json()))
            .then(assignments => {
                this.setState({assignments: assignments})
            })
    }

    render() {
        return (
            <View>
                {this.state.assignments.map(
                    (assignment, index) => (
                        <ListItem
                            onPress={() => this.props.navigation
                                .navigate("Assignment", {
                                    assignment: assignment,
                                    topicId: this.state.topicId,
                                    editable: true
                                })}
                            key={index}
                            leftIcon={{name: 'subject'}}
                            subtitle={assignment.description}
                            title={assignment.title}/>))}
                <Button title="Create Assignment"
                        style={{margin: 5}}
                        onPress={() => this.props.navigation
                            .navigate("Assignment", {topicId: this.state.topicId})}/>
            </View>
        )
    }
}

export default ShowAssignment