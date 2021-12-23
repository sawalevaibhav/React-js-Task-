import react from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState, } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import loginpage from "../FormAss/loginpage.jpg"

import {
    Typography, Box, Container, Paper, makeStyles, TextField, Icon, Button, FormControl,
    FormLabel, RadioGroup, Radio, FormControlLabel, Checkbox, FormHelperText, Table, TableContainer, TableBody, TableCell, TableRow
    , TableHead, InputLabel, Select,

} from "@material-ui/core"


import { makeStyle } from '@material-ui/core/styles'

import red from '@material-ui/core/colors'

// import HowToRegOutlined from '@material-ui/icons/HowToRegOutlined'
import { HowToRegOutlined } from "@mui/icons-material"




// Validation Code 
const regixname = /[a-zA-z]{4,9}/
const regixEmail = /(^[_\-\.0-9a-zA-Z]+@)([_\-\.0-9a-zA-Z])/


const useStyle = makeStyles(them => ({


    root: {

        height: "110vh",
        width: "100vw",
        //  backgroundColor: them.palette.grey[300],
        backgroundColor: "#a5d6a7",
        paddingLeft: "4rem",
        backgroundImage: `url(${loginpage})`,
    },
    error: {
        color: "red",
        fontSize: "10px"

    },
}))

const data = localStorage.getItem("Sign Up Details")
var get_data = JSON.parse(data)



function SignUp() {
    const style = useStyle()



    // Username and Pssword stored in local storge
    const [Username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // send  local storage data 
    const [SignUp_information, setSignUp_information] = react.useState([])

    //    Declare Values 
    const emptyinformation = { firstname: "", lastname: "", Email: "", number: "" }
    const [information, setinformation] = react.useState(emptyinformation)
    const [Store, setStore] = react.useState("")

    //   For validation code variable
    const [fname, setfname] = react.useState("")
    const [lastname, setlastname] = react.useState("")
    const [email, setemail] = react.useState("")
    const [Number, setNumber] = react.useState("")

    // logic for validation 
    const textchange = (event) => {
        setinformation({ ...information, [event.target.name]: event.target.value })
        //  console.log(information)


        // condition ? exprIfTrue : exprIfFalse            ternary operator  
        const checkname = information.firstname
        const forname = regixname.test(checkname) ? setfname("") : setfname("Please Enter valid Name")

        const checklast = information.lastname
        const forlast = regixname.test(checklast) ? setlastname("") : setlastname("Please Enter valid Name")

        const checkemail = information.Email
        const formail = regixEmail.test(checkemail) ? setemail("") : setemail("Please check E-mail")





    }

   

    const navigate = useNavigate()

    const storeData = (e) => {
        console.log(information)
       
        const checklast = information.lastname
        const checkname = information.firstname
        const checkemail = information.Email

        if (!regixname.test(checkname) && !regixname.test(checklast) &&!regixEmail.test(checkemail)&&(!Username || !password)) {

             setFlag(true);

            //

            
        }

        else {
            setFlag(false);
            localStorage.setItem("UserName", JSON.stringify(Username));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Saved in Local Storage");
            
            setSignUp_information([...SignUp_information, information])
             
            alert("Registration Process Successully Completed")
            
            navigate("/")
        }
    }





    return (
        <div className={style.root}>
            <Container>
                <Paper component={Box} p={1} width="45%" boxShadow="9" color="grey" style={{ backgroundColor: "" }} >
                    <Box p={2} >

                        <Typography variant="h5" align="center"  > <Icon style={{ marginRight: "20px" }} variant="primary" >
                            <HowToRegOutlined /></Icon>Registration Form </Typography>

                        <Box  >

                            <TextField type="text" name="firstname" onChange={textchange} required="yes"
                                fullWidth placeholder="Enter here" variant="outlined" color="secondary" margin="normal"
                                label="Enter first Name" type="text" />
                            <Typography className={style.error}>{fname}</Typography>



                            <TextField type="text" name="lastname" onChange={textchange} label="Enter Last Name" variant="outlined" color="secondary"
                                fullWidth margin="normal" placeholder="Enter here"

                            />             <Typography className={style.error}>{lastname}</Typography>
                            <TextField type="email" fullWidth name="Email" onChange={textchange} variant="outlined" color="secondary" margin="normal"
                                placeholder="Enter Email" label="Enter Email here" />

                            <Typography className={style.error}>{email}</Typography>

                            <TextField type="number" name="number" placeholder="mobile number" helperText="At least 10 digit"
                                onChange={textchange} label="Enter Mobile Number" fullWidth variant="outlined" margin="normal" />



                            <TextField type="text" placeholder="Enter Your Username here" onChange={textchange} label="Enter User name "
                                variant="outlined" fullWidth margin="normal"  onChange={(event) =>setUsername (event.target.value)} name="username" />
                            {/* <Typography className={style.error}>{username}</Typography> */}

                            <TextField type="number" placeholder="password" onChange={textchange} lable="Enter password"
                                variant="outlined" fullWidth margin="normal" name="password"  onChange={(event) => setPassword (event.target.value)} />




                            {/* starting of Area dropDown */}

                            <Box p={1}><InputLabel > Select Profession</InputLabel></Box>

                            <Box p={1}>
                                <Select fullWidth variant='outlined' name='profession'
                                    onChange={textchange} required margin="normal" >
                                    <option value="Full Stack Developer"> Full Stack Developer</option>
                                    <option value="Frontend Developer">Frontend Developer</option>
                                    <option value="Backend Developer" >Backend Developer</option>
                                    <option value="React js Developer" >React js Developer</option>
                                    <option value="Node js Developer" >Node js Developer</option>
                                    <option value="Other ">Other</option>

                                </Select>
                            </Box>


                            {/* End of Area dropDown */}







                            <Button variant="contained" onClick={storeData} color="secondary" fullWidth> Submit</Button>

                        </Box>



                        <FormHelperText>After completing registration process sign in </FormHelperText>
                        <Box p={2}> <Button component={Link} to="/" variant="contained" color="primary" fullWidth> sign in </Button></Box>

                    </Box>




                </Paper>





            </Container>





        </div >)
}


export default SignUp
