import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
     padding: "40px",
     [theme.breakpoints.between('sm', 'md')]: {
        width: "100%",
        padding: "40px 0px 40px 0px",
      },
      [theme.breakpoints.between('md', 'lg')]: {
        width: "100%",
        padding: "40px",
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: "100%",
        padding: "40px",
      },
      [theme.breakpoints.up('xl')]: {
        width: "100%",
        padding: "40px",
      },
    },
    caroselContainer:{
        "& .ant-carousel ":{
            width:"100%",
            "& .slick-slide img":{
              width:"100%",
              [theme.breakpoints.between('sm', 'md')]: {
                width: "100%",
              },
              [theme.breakpoints.between('md', 'lg')]: {
                width: "100%",
              },
              [theme.breakpoints.between('lg', 'xl')]: {
                width: "100%",
              },
              [theme.breakpoints.up('xl')]: {
                width: "100%",
              },
            }
        }
    },
 
  }));
  export { useStyles }