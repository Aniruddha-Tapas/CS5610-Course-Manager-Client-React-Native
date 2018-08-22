import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import FixedHeader from './elements/FixedHeader'
import TrueFalseQuestionEditor from './elements/TrueFalseQuestionEditor'
import MultipleChoiceQuestionEditor from './elements/MultipleChoiceQuestionEditor'
import {createStackNavigator} from 'react-navigation'
import {Button} from 'react-native-elements'
import CourseList from './components/CourseList'
import ModuleList from './components/ModuleList'
import LessonList from './components/LessonList'
import TopicList from './components/TopicList'
import WidgetList from './components/WidgetList'
import QuestionList from './components/QuestionList'
import Assignment from './components/Assignment'
import ShowAssignment from './components/ShowAssignment'
import ShowExam from "./components/ShowExam";
import Exam from "./components/Exam"
import QuestionsForExam from "./components/QuestionsForExam"
import Essay from "./components/Essay"
import MultipleChoice from "./components/MultipleChoice"
import TrueFalse from "./components/TrueFalse"
import FillBlank from "./components/FillBlank"

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="light-content"/>
                <FixedHeader/>

                <Button title="Courses"
                        onPress={() => this.props.navigation
                            .navigate('CourseList')}/>
            </ScrollView>
        )
    }
}

const App = createStackNavigator({
    Home,
    CourseList,
    ModuleList,
    LessonList,
    TopicList,
    WidgetList,
    QuestionList,
    Assignment,
    ShowAssignment,
    ShowExam,
    Exam,
    QuestionsForExam,
    MultipleChoice,
    Essay,
    TrueFalse,
    FillBlank,
    TrueFalseQuestionEditor,
    MultipleChoiceQuestionEditor
});

export default App;