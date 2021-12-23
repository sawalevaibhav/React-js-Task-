import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import loginpage from "../FormAss/loginpage.jpg"


// this is a Typograpgy
import { Container, Box, Paper, Typography, TextField, Button } from '@material-ui/core'
// import AccountCircle from "@material-ui/icons/AccountCircle"
import { AccountCircle, LogoDevSharp } from '@mui/icons-material'
import lightBlue from '@material-ui/core/colors/lightBlue'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
// import loginpage from "../MaterialUI/loginpage.jpg"

const useStyle = makeStyles(them => ({


    root: {
        height: "100vh",
        width: "100vw",
        //  backgroundColor: them.palette.grey[300],
        //   backgroundColor:"#a5d6a7",
        paddingTop: "40px",
        backgroundImage: `url(${loginpage})`,

    }, button: { marginTop: "40px", width: "50%" },

    error: {
        color: "red",
        fontSize: "10px"

    },


}))


const regixuser = /[a-zA-z]{4,9}/
const regixpass = /[0-9]{4,9}/


const data = localStorage.getItem("Sign Up Details")
var get_data = JSON.parse(data)

function Login() {



    

    const Style = useStyle()

    // const [logininfo,setlogininfo] = React.useState([])

    // const [username ,setusername]  =React.useState("")
    // const [password,setpassword] = React.useState("")

       
    //Data stored in local storage 
    const [Userlog, setUserlog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    const [error ,seterror] = useState("")


    const navigate = useNavigate()


    const DataStored =(e)=> {
        e.preventDefault();
        let pass = localStorage.getItem("Password").replace(/"/g, "");
        let UserName = localStorage.getItem('UserName').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!Userlog || !passwordlog) {
            setFlag(true);
            seterror("invaild credentials");
        } else if ((passwordlog !== pass) || (Userlog !== UserName)) {
            setFlag(true);
            seterror("invaild credentials");
        } else {
            setHome(!home);
            setFlag(false);
            seterror("credentials match");
            alert("login  Successul")
             navigate("home")
        }
    }





    return (
        <div className={Style.root}>
            <Container>
                <Paper component={Box} width="35%" mx="auto" marginTop="7rem" p={4} boxShadow={6}  >

                    <Typography variant="h4" align="center" color="secondary">
                        <AccountCircle style={{ fontSize: 50, margin: "-12px", marginRight: "20px", color: lightBlue[100] }} /> Login Here </Typography>



                    {/* form start */}

                    <Box component="form" >

                        <TextField type="text" variant="outlined" className={Style.forms}
                            placeholder="" color="primary" margin="normal" fullWidth label="Username Name" 
                            onChange={(event) => setUserlog(event.target.value)}
                            name="username"/>
                             <Typography className={Style.error}>{error}</Typography>
                       

                        <TextField type="password" className={Style.forms}
                            paddingleft="30px" margin="normal" label="Password" fullWidth variant="outlined"
                            name="password" onChange={(event) => setPasswordlog(event.target.value)}
                        />
            
                        <Button onClick={DataStored} className={Style.button} variant="contained" fullWidth gutterBottom margin="normal" color="primary"  >sign in </Button>
                    </Box>

                    {/* Form end */}




                    <Box p={4}>  <Typography style={{textDecoration:"none"}} component={Link} to="/signup" >New User? SignUP</Typography></Box>







                </Paper>
            </Container>

        </div>
    )
}


export default Login