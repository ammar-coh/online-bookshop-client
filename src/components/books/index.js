import React, { useEffect, useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import Context from '../../context'
import { useStylesIndex } from './style'
import { useForm, Controller } from "react-hook-form";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import AddBook from './addBook';
import Table from './allBooksTable'
function Books() {
    const dispatch = useDispatch();
    const classes = useStylesIndex()
    const [addBook, setAddBook] = useState(false)
    return (
        <Box sx={{ padding: "40px 20px 40px 20px", height: "100%" }}>
            <Paper elevation={3}>
                <Grid className={classes.main}>
                    {!addBook ?
                        <Grid className={classes.tableHeader}>
                            <Grid className={classes.heading}>
                                <Typography
                                    style={{
                                        fontFamily: "Montserrat, sans-se",
                                        fontWeight: 600,
                                        fontSize: "22.4px",
                                        padding: "0px 0px 0px 29px"
                                    }}
                                >Book List</Typography>
                            </Grid>
                            <Grid className={classes.addBooKButtonDiv}>
                                <Button className={classes.addBooKButton} onClick={() => setAddBook((previous) => !previous)}>
                                    Add Book
                                </Button>
                            </Grid>
                        </Grid>
                        : null}
                    <Divider light />
                    {addBook ?
                        <Grid className={classes.addBookMain}><AddBook /></Grid>
                        :
                        <Grid className={classes.tableMain}><Table /></Grid>
                    }
                </Grid>
            </Paper>
        </Box>
    )
}

export default Books