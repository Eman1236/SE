import React from 'react'
import { makeStyles } from '@material-ui/core'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Test_Intro = (props) => {
    const useStyles =  makeStyles((theme) => ({
        Test_name :{
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
        description:{
            fontFamily: 'Amiri',
            fontStyle: "normal",
            fontWeight : "400",
            fontSize: "14px",
            lineHeight: "50px",
            letterSpacing: "0.15px",
            color: "#000000",
            paddingLeft : "10%",
            paddingRight : "10%"


        },
        center : {
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            width: "60%",
            paddingTop : "2%",
            paddingBottom : "2%"
          },
        button :{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px"
        }

    }));
    const handleClick = () => {
        window.location.href = '/start-test'
    }
    const classes = useStyles();
    if(props.loggedIn){
        return(
            <div>
                <div className={classes.Test_name}>
                    <h1>Pass Cognitive Aptitude Test</h1>
                </div>

                <div className={classes.description}>
                    <p>Accepting job applications from the entire world means every role on Crossover 
                        receives thousands of applications. We find that the most reliable way to shortlist the very best candidates is by objectively measuring problem solving skills.</p>

                    <img className={classes.center}
                    src="https://news.stanford.edu/wp-content/uploads/2017/10/GettyImages-535847793-960x640@2x.jpg" 
                    />

                    <p>The verbal reasoning test measures your ability to think logically about written information. 
                    In this test, you will be given questions that include some written information. Your task is to read 
                    the information provided in each question and find the correct answer. You can base your answer 
                    solely on the information provided.When answering each question, it is important to base your 
                    answer only on the information in the question and not on any other knowledge you may have:</p>


                    <h1>
                        Instructions:
                    </h1>

                    <ul>
                        <li>You have 5 minutes to complete 10 questions.</li>
                        <li>The speed of your Internet connection (dial-up or broadband) has NO effect on the timer.</li>
                    </ul>

                    <h3>Note : </h3>
                    <ul>
                        <li>If you cannot see the "START TEST" button at the bottom of the page, press and 
                            hold the CTRL key and press the "minus" or hyphen key until the button appears.</li>
                    </ul>
                    
                    <img className={classes.center}
                    src="https://explorehealthcareers.org/wp-content/uploads/2016/12/taking_standardized_tests-300x200.jpeg" 
                    />
                    


        

                    <div className={classes.button}>
                        <Button  variant="contained" color="success" endIcon={<ArrowForwardIcon />} onClick={handleClick}>
                        Start Test                    
                        </Button>
                    </div>
                </div>
            
            </div>
        );
    }
    else{
        window.location.href = "/Login"
    }
};

export default Test_Intro;