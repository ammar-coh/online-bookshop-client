
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {FaStar} from 'react-icons/fa'


const useStyles = makeStyles({
    root: {},
    idInput:{},
  ratingsInput:{},
  yearInput:{},

    
  });



function Editing() {
    const classes = useStyles();
    return (
        <div className ={classes.root}>
            <h1>Add New Items</h1>
            <div className={classes.idInput}><input type='text' placeholder='id'/></div>
            <div className={classes.ratingsInput}><input type='text' placeholder='rating'/></div>
            <div className={classes.yearInput}><input type='text'/></div>
        </div>
    )
}

export default Editing
