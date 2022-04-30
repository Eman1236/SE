import React, { Component } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackwardIcon from '@mui/icons-material/ArrowBack';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export class MultiStepTest extends Component {

    styles = {
        Test_name:{
            fontFamily: 'Amiri',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "48px",
            lineHeight: "50px",
            textAlign: "center",
            letterSpacing: "0.15px",
            color: "#3371B8",
            border: "1px solid #000000"

        },
        question_Heading : {
            fontFamily: 'Yeseva One',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "26px",
            textAlign: "center",
            letterSpacing: "0.46px",
            textTransform: "uppercase"
        },
        timer_wrapper : {
            display: "flex",
            justifyContent: "center",
            paddingTop : "5%",
            paddingBottom : "5%"
        },  
        timer : {
            fontFamily: "Montserrat",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }, 
        text : {
            color: "#aaa"
        },
        value :{
            fontSize: "40px"
        },
        question : {
            fontFamily: 'Roboto',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "26px",
            letterSpacing: "0.46px",
            color: "#000000",
            paddingLeft : "20%",
        },
        button :{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px"
        }
          
    };

    handleFinish = () =>{
        window.location.href = '/Main'
    }
  state = {
    test_name : "Cognitive Aptitude Test",
    question : 1,

    questions : [
        {
            id : 1,
            text : "Choose the word opposite or close to opposite to: Restraint ",
            options : ["Abandom","Restriction","Control","Subtly"],
            correct : "D",
            selected : ""
        },
        {
            id : 2,
            text : "Choose the word opposite or close to opposite to: Mess",
            options : ["Jumble","Clutter","Order","DisArray"],
            correct : "C",
            selected : ""

        },
        {
            id : 3,
            text : "Cherry is to blossom as,",
            options : ["Checkout is to purchase","Protein is to shake","Paint is to mix","Paper is to book"],
            correct : "B",
            selected : ""
        }
    ]
   
  };

  // Proceed to next step
  nextQuestion = () => {
    const { question } = this.state;
    this.setState({
      question: question + 1
    });
  };

  // Go back to prev step
  prevQuestion = () => {
    const { question } = this.state;
    this.setState({
      question: question - 1
    });
  };

  // Handle fields change
  handleChange =  input => e   => {
    // console.log("In change",e.target.value,input);
    const {questions} = this.state;

    var index = questions.findIndex(function(question, i){
        return question.id === input
      });

    var question = this.state.questions[index];
    question.selected = e.target.value;
    questions[index] = question;

    this.setState({ 
        questions : questions
    });
  };

  customChange = (input,value) =>{
    this.setState({ [input]: value });
  };

  renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div style={this.styles.timer}>Too lale...</div>;
    }
  
    return (
      <div style={this.styles.timer}>
        <div style={this.styles.text}>Remaining</div>
        <div style={this.styles.value}>{remainingTime}</div>
        <div style={this.styles.text}>seconds</div>
      </div>
    );
  };


  render() {
    const { question,test_name,questions,handleChange } = this.state;
    if(this.props.loggedIn){
        return (
            <div>
                <h1 style={this.styles.Test_name}> {test_name} </h1>

                <div style={this.styles.timer_wrapper}>
                    <CountdownCircleTimer
                        isPlaying
                        duration={900}
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[900, 600, 450, 150]}
                    >
                    {this.renderTime}
                    </CountdownCircleTimer>

                </div>

                <h2 style={this.styles.question_Heading}> Question {question} of {questions.length}</h2>

                <div>
                    {questions.filter(quest => quest.id == question).map(filteredquestion => (
                        
                        <div style={this.styles.question}>

                            <h3>{filteredquestion.text}</h3>

                            
                            <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={filteredquestion.selected}
                                onChange={this.handleChange(filteredquestion.id)}
                            >
                            {filteredquestion.options.map(option => (
                                    <FormControlLabel value={option} control={<Radio />} label={option} />
                            ))
                            }
                            </RadioGroup>
                            </FormControl>

                        

                        </div>
                    ))}
                </div>
                
                <div style={this.styles.button} >

                    {question == 1 ?
                        <Button  variant="contained" color="success" onClick={this.nextQuestion} endIcon={<ArrowForwardIcon />}>
                            Next                   
                        </Button>
                    : question == questions.length ?
                        <div>
                        <Button  variant="contained" color="grey" onClick={this.prevQuestion} startIcon={<ArrowBackwardIcon />}>
                            Back                   
                        </Button>
                        <Button  variant="contained" color="success"  endIcon={<ArrowForwardIcon />} onClick= {this.handleFinish}>
                            Finish                   
                        </Button>
                        </div>
                    :
                        <div>
                            <Button variant="contained" color="grey" onClick={this.prevQuestion} startIcon={<ArrowBackwardIcon />}>
                                Back                   
                            </Button>
                            &nbsp;
                        <Button  variant="contained" color="success" onClick={this.nextQuestion} endIcon={<ArrowForwardIcon />}>
                            Next                   
                        </Button>
                        </div>
                    }
                </div>



                {
                            questions.map(question => (
                                <div>
                                    {/* Answer is {question.selected} */}
                                </div>
                            ))
                }
            </div>
        );
    }
    else{
        window.location.href = "/Login"
    }

}
}

export default MultiStepTest;