import React, { Component } from 'react';
import  { CreateNewQuiz }  from './CreateNewQuiz';
import  { saveQuiz }  from './functions';

export default class QuizCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadQuizes: [],
      currentQuiz:{},
      showAllQuiz: false,
      createNewQuiz: false,
      textFormInput: '',
      errorMessage: null,
    }
    this.handleButtonClicked = this.handleButtonClicked.bind(this);
    this.handleSaveButtonClicked = this.handleSaveButtonClicked.bind(this);
    this.handleKeyBoardEvent = this.handleKeyBoardEvent.bind(this);
  }

  componentWillMount(){
    let loadQuizes = window.localStorage.quiz
    this.setState({quizes: loadQuizes});
  }

  handleButtonClicked(event) {
    let buttonLabel = event.target.value;
    if (buttonLabel === 'showAllQuiz') {
      this.setState({showAllQuiz: true});
    } else if (buttonLabel === 'createNewQuiz') {
      this.setState({createNewQuiz: true});
    }
  }

  handleKeyBoardEvent(event) {
    this.setState({textFormInput: event.target.value});
  }

  handleSaveButtonClicked(event) {
    let update = this.state.currentQuiz;
    update[event.target.value] = this.state.textFormInput;

    saveQuiz(update).then( value  => {
      let updateCurrentState = JSON.parse(value);
      this.setState({currentQuiz: updateCurrentState})
      console.log(this.state.currentQuiz)
    }).catch( error => {
      this.setState({errorMessage: true})
    });

  }

  render() {
    return (
      <div>
        <h1>QuizCreator</h1>
        <button value='createNewQuiz' onClick={this.handleButtonClicked}>create new quiz</button>
        <button value='showAllQuiz' onClick={this.handleButtonClicked}>show all quizes</button>

        {
          this.state.createNewQuiz ?
          <CreateNewQuiz currentQuiz={this.state.currentQuiz}
                         titleSaved={this.state.currentQuiz.title}
                         handleSaveButtonClicked={this.handleSaveButtonClicked}
                         textFormInput={this.state.textFormInput}
                         handleKeyBoardEvent={this.handleKeyBoardEvent}
                         /> : null
        }

      </div>
    )
  }
}
