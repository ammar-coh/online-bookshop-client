import { makeStyles } from "@material-ui/core/styles";

const useStylesIndex = makeStyles({
    root: {
    },
    titleBox:{
        display:"flex",
        padding:"5px 5px",
        //   border:"1px solid black"
    },
    titleText:{
        // "& .MuiTypography-root":{
        //     fontFamily: "Montserrat, sans-se",
        //     fontWeight:500
        // }
    },
    mainBox:{
        // border:"2px solid black",
        height:"100%"
    },
    mainBox2:{
        // border:"1px solid black",
        padding:"30px 40px",
        display:"flex"
    },
    photoDiv:{
        width:"70%"
    },
    informationSectionDiv:{
        width:"30%",
        border:"1px solid black",
        padding:'0px 50px'
    }

});
export {useStylesIndex}