import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from 'react'
import { useState } from "react";
import { makeStyles } from '@material-ui/core'
// import {useForm} from "react-hook-form"
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import DatePicker from '@mui/lab/DatePicker'
import Picture from './SignUp.png'
import {Link, Divider,Grid} from '@mui/material';

const SignUp = () => {
    const [value, setValue] = useState(new Date());
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        dob: value,
        role: "user"
    })
    const useStyles =  makeStyles((theme) => ({
        textField : {
            margin: "10px 0",
            width : "100%",
            height : "50px",

        },
        addForm: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        },
        mainForm : {
            // backgroundColor:"rgb(0,245,255)",
            width: "50%",
            alignItems : "center",
            textAlign : "center",
            paddingLeft:"10%",
            paddingRight:"10%",
            paddingTop : "20px"
        },
        heading: {
            textShadow: "1px 1px",
            color: '#346eeb'
        },
        picture: {
            width: "100px",
            height:"100px"
        }
    }));
    const classes = useStyles();
    // const { handleSubmit, register, formState: { errors } } = useForm();
    const [Status, setStatus] = useState({
        Message: '',
        Token: ''
    });

    const HandleButton = () => {
        const reqoptions = {
            method: "POST",
            headers: { "Content-Type": "application/JSON" },
            body: JSON.stringify({
                first_name: data.first_name,
                last_name: data.last_name,
                password: data.password,
                email: data.email,
                dob: data.dob,
                role: data.role

            })
        }
        const url = "http://localhost:3001/user/";
        fetch(url, reqoptions)
            .then((response) => response.json())
            .then((json) => {
                setStatus(json["Status"]);
                console.log("JSON:", json);
            })
            .catch((error) => console.log(error));
    }
    if(Status.Message === "Success"){
        localStorage.setItem('t',Status.Token);
        localStorage.setItem('fname',Status.first_name);
        localStorage.setItem('lname',Status.last_name);
        console.log("Setted Token:",Status.Token);
        window.location.href = "/Main";
      }
    return(
        <div>
            <div className={classes.addForm}>
                <Grid container>
                    <Grid item xs style= {{ display: "flex",alignItems: "center",justifyContent: "center", flexDirection: "column"}}>
                        <img src={Picture} alt="Pic"/>
                        <h1 className={classes.heading}>CREATE ACCOUNT</h1>
                        <h3> Start for Free</h3>
                        <br/>
                        <br/>
                        <h6><b>Already a Member?</b> 
                            <Link component="button" variant="body2"
                                    href = '/Login'
                                    onClick={() => {
                                    window.location.href = "/Login";
                                    }}>
                                        &nbsp;Login
                            </Link>
                        </h6>
                    </Grid>
                    <Divider orientation="vertical" flexItem>
                        OR
                    </Divider>
                    <Grid item xs>
                            <form className={classes.mainForm}>
                                <TextField
                                    id="outlined-required"
                                    label = "First Name"
                                    // variant = "filled"
                                    className={classes.textFeild}
                                    value = {data.first_name}
                                    onChange = {e => setData({ ...data, first_name: e.target.value })}
                                    // {...register("firstName",{
                                    //     required: "Required",
                                    //     pattern:{
                                    //         value: /^[A-Za-z]+$/
                                    //     }
                                    // })}
                                />
                                &nbsp; &nbsp; &nbsp;
                                <TextField
                                    id = "outlined-required"
                                    placeholder=''
                                    label = "Last Name"
                                    // variant = "filled"
                                    className={classes.textFeild}
                                    value = {data.last_name}
                                    onChange = {e => setData({ ...data, last_name: e.target.value })}
                                    // {...register("lastName",{
                                    //     required: "Required",
                                    //     pattern:{
                                    //         value: /^[A-Za-z]+$/
                                    //     }
                                    // })}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    id = "outlined-required"
                                    placeholder=''
                                    label = "Email"
                                    // variant = "filled"
                                    className={classes.textFeild}
                                    value = {data.email}
                                    onChange = {e => setData({ ...data, email: e.target.value })}
                                    // {...register("email",{
                                    //     required: "Required",
                                    //     pattern:{
                                    //         value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com)\b/
                                    //     }
                                    // })}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    id = "outlined-password-input"
                                    placeholder=''
                                    type = "password"
                                    label = "Password"
                                    // variant = "filled"
                                    className={classes.textFeild}
                                    value = {data.password}
                                    onChange = {e => setData({ ...data, password: e.target.value })}
                                    // {...register("username",{
                                    //     required: "Required",
                                    //     pattern:{
                                    //         value: /.{6,}/
                                    //     }
                                    // })}
                                />
                                <br/>
                                <br/>
                                <div style={{width: "85%", paddingLeft: "25%"}}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack spacing={1}>
                                            <DatePicker 
                                            disableFuture
                                            label="Date of Birth"
                                            openTo="year"
                                            views={['year', 'month', 'day']}
                                            value={value}
                                            onChange={(newValue) => {
                                              setValue(newValue);
                                              setData({...data,dob:newValue})
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                                <br/>
                                <br/>
                                <Button variant="contained" size="medium" onClick={HandleButton}>
                                    Sign Up
                                </Button>
                            </form>
                    </Grid>
                </Grid>     
            </div> 
        </div>
    )
}

export default SignUp;