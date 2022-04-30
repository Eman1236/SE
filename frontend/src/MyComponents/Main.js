// import React from "react";
// import ReactRoundedImage from "react-rounded-image"
// import pic from "./Avatar-01.png"
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import TrainingPic from "./Training.png"

// const Main = (props) => {
//     const percentage = 66;
//     const tests = [
//         {
//             test_id: 1,
//             test_name: "Basic English Aptitude",
//             status: "Pass"
//         },
//         {
//             test_id: 2,
//             test_name: "Mathematics Aptitude",
//             status:"Fail"
//         },
//         {
//             test_id: 3,
//             test_name: "Stressor Test",
//             status:"Pending"
//         },
//         {
//             test_id: 4,
//             test_name: "Positive Reframing",
//             status:"Pending"
//         }
//     ]
//     if(props.loggedIn){
//         return(
//             <div>
//                 <div style={{paddingLeft: "10%",width: "25%",height: "100vh", float:"left", backgroundColor: "#151b2e"}}>
//                     <br/>
//                     <div style={{ leftPadding:'10%',display: "flex" }}>
//                         {/* <ReactRoundedImage image={pic} /> */}
//                         <ReactRoundedImage
//                         image={pic}
//                         roundedColor="#346eeb"
//                         imageWidth="150"
//                         imageHeight="150"
//                         roundedSize="13"
//                         />
//                     </div>

//                     <div>
//                         <h2 style={{color: '#346eeb'}}>Agent Name Here</h2>
//                     </div>
//                     <div>
//                         <h3 style={{color: 'white'}}>someone@website.com</h3>
//                     </div>

//                     <div style={{ width: 200, height: 200 }}>
//                         <CircularProgressbar value={percentage} text={`${percentage}%`} />;
//                     </div>
//                 </div>

//                 <div style={{width: "65%",height: "100vh", float:"right"}}>
//                     <br/>
//                     <br/>

//                     <h1 style={{paddingLeft: '5%',color: 'Black', fontSize: "3rem", margin: "0"}}>Get</h1>
//                     <h1 style={{paddingLeft: '5%',color: '#346eeb', fontSize: "3rem", margin: "0"}}>Trained:</h1>
                    
//                     <br/>

//                     <div style={{paddingLeft: '5%'}}>
//                         <FormControl component="fieldset">
//                             <FormGroup aria-label="position" row>
//                                 <FormControlLabel
//                                 value="end1"
//                                 control={<Checkbox disabled checked />}
//                                 label="Basic English Aptitude"
//                                 labelPlacement="end"
//                                 />
//                             </FormGroup>
//                             <FormGroup aria-label="position" row>
//                                 <FormControlLabel
//                                 value="end2"
//                                 control={<Checkbox disabled checked />}
//                                 label="Mathematics Aptitude"
//                                 labelPlacement="end"
//                                 />
//                                 <br/>
//                             </FormGroup>
//                             <FormGroup>
//                                 <FormControlLabel
//                                 value="end3"
//                                 control={<Checkbox disabled checked />}
//                                 label="Stressor Test"
//                                 labelPlacement="end"
//                                 />
//                             </FormGroup>
//                         </FormControl>
//                     </div>

//                     <div style={{paddingLeft: '40%'}}>
//                         <img style = {{height: "488px", width: "520px"}}  src={TrainingPic} alt="Pic"/>
//                     </div>

//                 </div>
//             </div>
//         );
//     }
//     else{
//         window.location.href = "/Login"
//     }
// }

// export default Main;

import React from "react";
import ReactRoundedImage from "react-rounded-image"
import pic from "./Avatar-01.png"
import Button from "@material-ui/core/Button";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TrainingPic from "./Training.png"
import { useState } from 'react';
import { AiOutlineCheckCircle,AiFillCheckCircle } from "react-icons/ai";


const Main = (props) => {
    const handleTest = () => {
        window.location.href = '/tests/ccat'
    }
    const percentage = 0;
    const [flagButton,setFlagButton] = useState(0);

    const tests = [
        {
            test_id: 1,
            test_name: "Cognitive Aptitude Test",
            status: "Pending",
            button: "true"
        },
        {
            test_id: 2,
            test_name: "English Proficiency Test",
            status:"Pending",
            // button : "false"
        },
        {
            test_id: 3,
            test_name: "Real-World Job Skills",
            status:"Pending",
            // button: "false"
        }
    ]
    if(props.loggedIn){
        return(
            <div>
                <div style={{width: "30%",height: "100vh", float:"left", backgroundColor: "#151b2e"}}>
                    <br/>
                    <div style={{ display: "flex", justifyContent: "center"}}>
                        {/* <ReactRoundedImage image={pic} /> */}
                        <ReactRoundedImage
                        image={pic}
                        roundedColor="#346eeb"
                        imageWidth="150"
                        imageHeight="150"
                        roundedSize="13"
                        />
                    </div>

                    <div style={{display: "flex", justifyContent: "center"}}>
                        <h2 style={{color: '#346eeb'}}>{props.fname} {props.lname}</h2>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <br/>
                        {/* <h3 style={{color: 'white'}}>someone@website.com</h3> */}
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div style={{ width: 200, height: 200 }}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                        </div>
                    </div>
                </div>

                <div style={{width: "65%",height: "100vh", float:"right"}}>
                    <br/>
                    <br/>

                    <h1 style={{paddingLeft: '5%',color: 'Black', fontSize: "3rem", margin: "0"}}>Get</h1>
                    <h1 style={{paddingLeft: '5%',color: '#346eeb', fontSize: "3rem", margin: "0"}}>Trained:</h1>
                    
                    <br/>

                    <div style={{paddingLeft: '5%'}}>
                        
                        {
                            
                            tests.map((test) =>
                                <div>
                                    
                                <h3>
                                    {
                                        test.status === "Pass"?
                                            <AiFillCheckCircle color="Green" /> 
                                        : test.status === "Fail"?
                                            <AiFillCheckCircle color="Red" />
                                            
                                        : <AiOutlineCheckCircle />
                                    }
                                    &nbsp;
                                    { test.test_name}
                                    &nbsp;
                                    {
                                        test.button?
                                            test.status === "Fail"?
                                                <Button variant="outlined" color="Error" > 
                                                    Retake
                                                </Button>
                                                : 
                                                <Button variant="outlined" color="Success" onClick={handleTest} > 
                                                    Take Test
                                                </Button>
                                        :""
                                    }
                                    

                                </h3>
                                
                                
                                </div>
                            )
                        }
                        
                    </div>

                    <div style={{paddingLeft: '40%'}}>
                        <img style = {{height: "488px", width: "520px"}}  src={TrainingPic} alt="Pic"/>
                    </div>

                </div>
            </div>
        );
    }
    else{
        window.location.href = '/Login'
    }
}

export default Main;