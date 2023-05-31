import React, {useState} from 'react';
import {useHistory}  from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { sign_up_saga} from "./redux/actions";

const useStyles = makeStyles({
    root: {
        width:"450px", 
        border: " 1px solid black",
        marginLeft:"500px",
        marginTop:"100px",
        height:"300px",
        borderColor:"#D3D3D3",  
        borderRadius:"4px"      
    },
    sign_in:{
           
            width:"180px",
            // paddingLeft:"50px",
            marginLeft:"117px",
    },
    email_heading:{
        marginLeft:"100px",
      
        width:"60px",
        marginBottom:"1px",
        marginTop:"-10px",
      
    },
    email:{
         marginLeft:"100px",
         marginTop:"-30px",
       
       
    },

    password_heading:{
        marginLeft:"100px",
      
        width:"60px",
        marginBottom:"1px",
        
      
    },
    password:{
        marginLeft:"100px",
    },
    username_heading:{
        marginLeft:"100px",
      
        width:"90px",
        marginBottom:"1px",
        
      
    },
    username:{
        marginLeft:"100px",
      
        
        marginBottom:"1px",
        
      
    },
    sign_up:{
        marginLeft:"100px",
      
        width:"60px",
        marginBottom:"1px",
    },
    new_user:{
        marginLeft:"100px",
    },

    signInButton: {
        backgroundColor: "#FF9900",
        color: "#000000",
       
        fontSize: "10px",
        marginTop:"20px",
        marginLeft:"150px",
      },
      container:{
         
          width:"300px",
          marginLeft:"40px",
        //   border:"1px solid black"
      },
      
});




function Sign_up() {
    const history = useHistory()
    // const path = history.push("/login_page")
    const classes = useStyles();
    const dispatch = useDispatch();

    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[username, setUsername] = useState()

    const getEmail = (e)=>{
        setEmail(e.target.value)
    }

    const getPassword = (e)=>{
        setPassword(e.target.value)
    }
    const getUserName = (e)=>{
        setUsername(e.target.value)
    }
    
    const current_user_email = email
    const current_user_password = password
    const current_user_name = username
    // history.push(./)
    // function refreshPage() {
    //     window.location.reload();
    //   }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
           <h1 className={classes.sign_in}>Sign Up</h1> 
           <h4 className ={classes.email_heading}>Email</h4>
           <input className={classes.email } onChange={getEmail} type="text"  />
           <h4 className ={classes.password_heading}>Password</h4>
           <input className={classes.password}  onChange={getPassword}type="password" />
           <h4 className ={classes.username_heading}>User name</h4>
           <input className={classes.username}  onChange={getUserName}type="text" />
          <br/>
           <Button 
         onClick = {
             () => {
            dispatch(sign_up_saga({ email: current_user_email,
            password: current_user_password,
        user_name: current_user_name,
      history}))
            // dispatch(getUser(localStorage.getItem('for_reducer')));
            //
            // dispatch(setUser())
            // history.push("/login_page")
            // history.go(1)
           // window.location.reload(true)
            // dispatch(getUser());
        }
           
         }
          className={classes.signInButton}
          size="small"
        >
       Register
       </Button>
       
           </div>
           
        </div>
    )
}

export default Sign_up
