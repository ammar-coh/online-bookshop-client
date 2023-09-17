import { makeStyles } from "@material-ui/core/styles";

const useStylesIndex = makeStyles({
    submitButton:{
        color:"#FFF",
        backgroundColor:"#d22129",
        textTransform:"none",
        width:"100%",
        "&:hover":{
            color:"#fff",
            backgroundColor:"#d22129",
            boxShadow: "0 0px 5px rgba(210,33,41)"
        }
    },
    box5:{
        // border:"1px solid green",
        display:'flex',
        justifyContent:"flex-start",
        padding:"0px 0px 0px 0px",
        width:"100%"
    },
    cancelButton:{
        color:"#333533",
        backgroundColor:"#fff5f4",
        textTransform:"none",
        width:"100%",
        "&:hover":{
            color:"#d22129",
            backgroundColor:"#fff5f4"
        }
    },
    titleBox: {
        display: "flex",
        padding: "5px 5px",
    },
    titleText: {
    },
    mainBox: {
        height: "auto",
    },
    box2: {
        // border:"1px solid black",
        padding: "30px 40px",
        display: "flex",
        width: "100%",
        height: "auto"
    },
    box3: {
        padding: "30px 40px",
        display: "flex",
        width: "100%",
        height: "auto",
        // border:"1px solid red",
    },
    box4: {
        // border:"1px solid blue",
        display: "flex",
        width: "100%",
    },
    photoDiv: {
        width: "12%",
        // border:"1px solid red",
        padding: "0px 33px 00px 33px",
        display: "block",
        height: "auto"
    },
    photo: {
        width: "100%",
        display: "block",
    },
    upload: {
        display: "flex",
        justifyContent: "end",
        padding: "0px",
        width: "100%",
        height: "auto"
    },
    button1: {
        textTransform:"none",
        width: "50%",
        color:(props)=>(props.menuPersonalInformation?"#fff":"#333533"),
        backgroundColor:(props)=>(props.menuPersonalInformation? "#d22129":"#FFF"),
        "&:hover":{
            color:(props)=>(props.menuPersonalInformation?"#fff":"#d22129"),
            backgroundColor:(props)=>(props.menuPersonalInformation? "#d22129":"#FFF")
        }
    },
    button2: {
        textTransform:"none",
        width: "50%",
        color:(props)=>(props. menuChangePassword?"#fff":"#333533"),
        backgroundColor:(props)=>(props. menuChangePassword? "#d22129":"#FFF"),
        "&:hover":{
            color:(props)=>(props.menuChangePassword?"#fff":"#d22129"),
            backgroundColor:(props)=>(props.menuChangePassword? "#d22129":"#FFF")
        }
    }
});
export { useStylesIndex }


const useStylesInformation = makeStyles({
    root: {
    },
    informationSection1: {
        width: "50%",
        padding: '0px 30px',
        height: "auto"
    },
    informationSection2: {
        width: "50%",
        // border:"1px solid blue",
        padding: '0px 30px',
        height: "auto"
    },
});
export { useStylesInformation }

const useStylesChangePassword = makeStyles({
    mainBox: {
        border:"1px solid black",
        display:"flex",
        justifyContent:"",
        width:"100%",
          padding: '0px 50px',
          height:"100%"
    },
    informationSection1: {
        width: "50%",
        border:"1px solid red",
        // padding: '0px 50px',
        height: "auto",
        width:"100%",
    },
});
export {useStylesChangePassword }
