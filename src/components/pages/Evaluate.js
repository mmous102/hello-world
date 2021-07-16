// import React from 'react';

// import Cards from '../Cards';
//import ReactDOM from "react-dom"
import Footer from '../Footer';

// function Evaluate() {
//   return (
//     <>
//       <Cards />
//       <Footer />
//     </>
//   );
// }

// export default Evaluate;



// import React, { Component } from "react";


// import * as Survey from "survey-react";


// //import 'bootstrap/dist/css/bootstrap.css';
// import "survey-react/survey.css";
// import "../survey.css";
// import '../../App.css';
// import { size } from "lodash";
// Survey.StylesManager.applyTheme("bootstrap");

// class SurveyComponent extends Component {
//     constructor() {
//         super();
        
//     }
//     render() {
        

//         const json = {
//   title: "American History",
//   showProgressBar: "bottom",
//   showTimerPanel: "top",
//   maxTimeToFinishPage: 10,
//   maxTimeToFinish: 25,
//   firstPageIsStarted: true,
//   startSurveyText: "Start Quiz",
//   pages: [
//     { questions: [ {type: "html", html: "You are about to start quiz by history. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
//     {
//       questions: [
//         {
//           type: "radiogroup",
//           name: "civilwar",
//           title: "When was the Civil War?",
//           choices: [ "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950" ],
//           correctAnswer: "1850-1900"
//         }
//       ]
//     },
//     {
//       questions: [
//         {
//           type: "radiogroup",
//           name: "libertyordeath",
//           title: "Who said 'Give me liberty or give me death?'",
//           choicesOrder: "random",
//           choices: [ "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams" ],
//           correctAnswer: "Patrick Henry"
//         }
//       ]
//     },
//     {
//       maxTimeToFinish: 15,
//       questions: [
//         {
//           type: "radiogroup",
//           name: "magnacarta",
//           title: "What is the Magna Carta?",
//           choicesOrder: "random",
//           choices: [ "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower" ],
//           correctAnswer: "The foundation of the British parliamentary system"
//         }
//       ]
//     }
//   ],
//   completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
// };
// const survey = new Survey.Model(json);

        

//         return (
//           <>
//           <span className="survey" style={{fontSize: "20px"}}>
//             <Survey.Survey
//                 model={survey} />
//                 </span>  
//                 <Footer />
//               </>
//         );
//     }
// }

// export default SurveyComponent;

import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import "../styles.css";
import "survey-react/survey.css";

class SurveyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }

  render() {
    let json = {
      questions: [
        {
          type: "checkbox",
          name: "skills",
          title: "What are your SKILLS?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "creativity",
            "Problem Solving",
            "Team Work",
            "Responsable",
            "Leadership",
            "Dicsision making",
            "Strategic thinking ",
            "Patience",
            "Collaboration",
            "Comunication",
            "Observation",
          ]
        },
        {
          type: "checkbox",
          name: "hobbies",
          title: "What car are your HOBBIES?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Reading",
            "Building",
            "Writing",
            "Learning",
            "Science",
            "Sport Science",
            "Space",
            "Drawing",
            "Electronics",
            "Mathematics",
            "Astronomy"
          ]
        },{
          type: "matrix",
          name: "Quality",
          isRequired: true,
          title: "Please indicate if you agree or disagree with the following statements",
          columns: [
              {
                  value: 1,
                  text: "Strongly Disagree"
              }, {
                  value: 2,
                  text: "Disagree"
              }, {
                  value: 3,
                  text: "Neutral"
              }, {
                  value: 4,
                  text: "Agree"
              }, {
                  value: 5,
                  text: "Strongly Agree"
              }
          ],
          rows: [
              {
                  value: "build",
                  text: "I would love to build things"
              }, {
                  value: "create",
                  text: "I would love to create things"
              }, {
                  value: "observe",
                  text: "I would love to observe things"
              }, {
                  value: "equipement",
                  text: "I would love to use cool equipement"
              }
          ]
      },
        {
          type: "radiogroup",
          name: "tech",
          title: "To me, TECHNOLOGY is?",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Means Nothing",
            "Boring",
            "Exciting",
            "Fascinating",
            "Appealing",
          ]
        },
        {
          type: "radiogroup",
          name: "engineering",
          title: "To me, ENGINEERING is?",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Means Nothing",
            "Boring",
            "Exciting",
            "Fascinating",
            "Appealing",
          ]
        },
        {
          type: "radiogroup",
          name: "math",
          title: "To me, MATH is?",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Means Nothing",
            "Boring",
            "Exciting",
            "Fascinating",
            "Appealing",
          ]
        },
        {
          type: "radiogroup",
          name: "science",
          title: "To me, SCIENCE is?",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Means Nothing",
            "Boring",
            "Exciting",
            "Fascinating",
            "Appealing",
          ]
        },
        {
          type: "radiogroup",
          name: "career",
          title: "To me, a CAREER in science, technology, engineering, or mathematics (is)?",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "Means Nothing",
            "Boring",
            "Exciting",
            "Fascinating",
            "Appealing",
          ]
        },
        {
          type: "radiogroup",
          name: "age",
          title: "What is your age group?",
          isRequired: true,
          hasSelectAll: false,
          hasNone: false,
          noneText: "None of the above",
          colCount: 4,
          choicesOrder: "asc",
          choices: [
            "6 to 8 years old",
            "8 to 10 years old",
            "10 to 12 year old",
            "12 to 14 year old",
            "15 to 16 years old",
            "16 to 18 years old",
          ]
        }
      ]
    };
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      <div> <p style={{textAlign: "center"}}>According to your answers we think one activity you deffinitly must try is <em style={{color: 'white'}}>VOLCANO CONSTRUCTION!</em> <br/> However, to get more info about our activities and the updated list send to you, don't forget to sign up to our newsletter!</p></div>
    ) : null;
    return (
      <div className="survey">

        {surveyRender}
        <div className="button">
        {onCompleteComponent}
        </div>
      </div>
    );
  }
}
function Evaluate() {
  return (
    <div className="App">
    <div className="Survey" >
      <h1>Stem Camp Survey</h1>
      <h2>This Survey will help you determine which STEM activity you would prefer the most!</h2>
      <br/>
      <SurveyComponent />
      <br/>
      </div>
      <Footer/>
    </div>
  );
}


export default Evaluate;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
