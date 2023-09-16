import { makeStyles } from "@material-ui/core/styles";

const useStylesIndex = makeStyles({
    root: {
    },
    titleBox:{
        display:"flex",
        padding:"5px 5px",
    },
    titleText:{
    
    },
    mainBox:{
        height:"100%"
    },
    mainBox2:{
        border:"1px solid black",
        padding:"30px 40px",
        display:"flex",
        width:"100%",
        height:"auto"
    },
    photoDiv:{
        width:"12%",
        border:"1px solid red",
        padding:"0px 33px 00px 33px",
        display:"block",
        height:"auto"

    },
    informationSectionDiv:{
        width:"30%",
        border:"1px solid black",
        padding:'0px 50px'
    },
   
    photo:{
       width:"100%",
    display:"block",
   
    },
    upload:{
        display:"flex",
        justifyContent:"end",
        padding: "0px",
        width:"100%",
        height:"auto"
      
        
    }

});
export {useStylesIndex}