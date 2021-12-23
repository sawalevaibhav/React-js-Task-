import React from 'react' // react componet 
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'





// Material Ui Componet 

import { Box, Container, Typography, AppBar, Toolbar, Button, TableCell, Table, TableBody, TableRow, TableHead } from "@material-ui/core"
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





//Actul Componet Start 
function Movie_Home() {
    const style = UseStyle()
    const [data, setdata] = React.useState("")

    const  Album = {category: "Movies", language: "Kannada", genre: "all", sort: "voting"}

    const getinfo = () => {
        axios.post("https://hoblist.com/api/movieList",Album)
            .then(Response =JSON.stringify())
            .then(res => {
                 console.log(res)
                //  console.log(data)

             })

        // fetch("https://hoblist.com/api/movieList")
        // .then(response => response.json())
        // .then(res => {

        //     setdata(res)

        // })
    




    }




    return (
        <div className={style.root}>
            <Box>
                <Container>
                    <AppBar color="secondary">
                        <Toolbar>
                            <Typography variant="h6" style={{ flexGrow: 1 }}> Movie Home </Typography>
                            <Button color="inherit" p={1} variant="h6" component={Link} to="/companyinfo" >Company Info  </Button>
                            
                            <Button color="inherit" component={Link} to="/" variant="h6" >Sign Out</Button>
                            <Button color="inherit" onClick={getinfo} variant="h6" >Get</Button>

                        </Toolbar>
                    </AppBar>

                </Container>
            </Box>

          // get data in a table

            <Box p={8}>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>category</TableCell>

                            <TableCell>language</TableCell>
                            <TableCell>genre</TableCell>
                            <TableCell> sort</TableCell> 
                        </TableRow>

                    </TableHead>
                    <TableBody>

{/* 
                        {data.map((item) => (

                            <TableRow>
                                <TableCell> {item.data}</TableCell>
                                <TableCell>{item.code}</TableCell>

                                <TableCell> {item.message}</TableCell> 
                                <TableCell> {item.sort}</TableCell>   
                               


                            </TableRow>

                        ))}
 */}



                    </TableBody>

                </Table>


            </Box>




        </div>
    )
}


export default Movie_Home