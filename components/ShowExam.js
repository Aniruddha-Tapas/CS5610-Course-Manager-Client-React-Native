import React from 'react';
import {View} from 'react-native'
import {Text, Button, ListItem} from 'react-native-elements'

class ShowExam extends React.Component{

    static navigationOptions = {title: 'All Exams'};
    constructor(props){
        super(props)
        this.state = {
            topicId: 1,
            exams:[]
        }
    }

    componentDidMount() {
        const topicId = this.props.navigation.getParam("topicId");
        this.setState({topicId: topicId})
        fetch("http://localhost:8080/api/topic/"+topicId+"/exam")
            .then(response => (response.json()))
            .then(exams => {
                this.setState({exams: exams})
            })

    }

    componentWillReceiveProps(newProps){
        const newLessonId = newProps.navigation.getParam("topicId");
        fetch("http://localhost:8080/api/topic/"+newLessonId+"/exam")
            .then(response => (response.json()))
            .then(exams => {
                this.setState({exams: exams})
            })
    }

    render(){
        return(
            <View>
                {this.state.exams.map(
                    (exam, index) => (
                        <ListItem
                            onPress={() => this.props.navigation
                                .navigate("QuestionsForExam", {examId: exam.id, topicId: this.state.topicId})}
                            key={index}
                            leftIcon={{name: 'subject'}}
                            subtitle={exam.description}
                            title={exam.title}/>))}
                <Button title="create Exam"
                        style={{margin: 5}}
                        onPress={() => this.props.navigation
                            .navigate("Exam", {topicId: this.state.topicId}) }/>
            </View>
        )
    }
}

export default ShowExam