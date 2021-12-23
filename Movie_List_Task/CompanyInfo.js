import React from 'react'
// Material Ui Componet 
import { Link } from 'react-router-dom'

import { Box, Container, Typography, AppBar, Toolbar, Button, Paper } from "@material-ui/core"
import { makeStyles } from '@material-ui/core'



const UseStyle = makeStyles({
    root: {

        margin: "0px", padding: "0px",
        height: "96.5vh",
        width: "100vw",
        backgroundColor: "#f5f5f5"
        //  backgroundImage: `url(${shopping_mall})`,  



    }
})

export default function CompanyInfo() {
    const style = UseStyle()
      
    return (
        <div >

            <Box>
                <Container>
                    <AppBar color="secondary">
                        <Toolbar>
                            <Typography variant="h6" style={{ flexGrow: 1 }}> Movie Home </Typography>
                            <Button color="inherit" p={1} component={Link} to="/home" variant="h6" >Home</Button>
                            
                            <Button color="inherit" component={Link} to="/" variant="h6" >Sign Out</Button>


                        </Toolbar>
                    </AppBar>

                </Container>
            </Box>

            <Container>
                <Paper marginTop="15rem" component={Box} width="50%" mx="auto" boxShadow={6}>


                    <Box p={4} >
                        <Typography>    Company: Geeksynergy Technologies Pvt Ltd</Typography>

                        <Typography> Address: Sanjayanagar, Bengaluru-56</Typography>
                        <Typography>   Phone: XXXXXXXXX09</Typography>
                        <Typography> Email: XXXXXX@gmail.com</Typography>

                    </Box>


                </Paper>
            </Container>

        </div>
    )
}
