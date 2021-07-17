
import Footer from '../Footer';
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
