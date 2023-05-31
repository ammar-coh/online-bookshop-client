import React from 'react'
import EntryContainer from './EntryContainer';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
     display:'flex',
   
    marginLeft:560,
    },
    information:{
        display:"flex",
        border:'solid black',
       
        marginLeft:50,
    },
   
    
  });

function AddProduct() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <div className={classes.information}>
             <EntryContainer/>
        </div>
        </div>
    )
}

export default AddProduct
