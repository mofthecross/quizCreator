import React from 'react';
import {AddNewQuestion} from './AddNewQuestion'

export const CreateNewQuiz = props => {
  let quiz = props.currentQuiz
  return(
    <div>
      <h1>Create New Quiz</h1>
      {
        props.titleSaved ?
        <AddNewQuestion handleSaveButtonClicked={props.handleSaveButtonClicked}
                        currentQuiz={quiz}
                        handleKeyBoardEvent={props.handleKeyBoardEvent}
                        textFormInput={props.textFormInput}/> :

        <div> Title: <input type="text" value={props.textFormInput} onChange={props.handleKeyBoardEvent}/>
                      <button value='Title' onClick={props.handleSaveButtonClicked}>save</button>
                      </div>
      }
    </div>
  )
}
