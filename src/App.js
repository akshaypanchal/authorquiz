import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Question from './components/question/question.component';
import Option from './components/option/Option';

class App extends React.Component{
  constructor(props){
    super(props);
  
    this.state = [

      {
        question:"What is your Name?",
        author:"Akshay",
        options: ["1","2","3","4"],
        answer:"2"
      },
      {
        question:"What is your Father Name?",
        author:"Brijesh",
        options: ["5","6","7","8"],
        answer:"7"
      },
      {
        question:"What is your Mother Name?",
        author:"Mayur",
        options: ["10","11","12","13"],
        answer:"12"
      },

    ] 

  }


  // declare function to pass each state objects to Option Component for rendering
   renderStateObjects = ()=>{
     let optionComponentArray = this.state.map(obj=>{
       return <Option author={obj.author} options={obj.options} answer={obj.answer}/>;

     })

    return <div>{optionComponentArray}</div>
  }


  render(){
    return (

        <div>
          <Header />
          <Question question = {this.state.question}  />
          {/* Rendering all options and author name with the help of map method */}
          {this.renderStateObjects()}
        </div>

    );
  }
}

export default App;
