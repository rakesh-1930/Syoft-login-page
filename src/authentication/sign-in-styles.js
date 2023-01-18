import { createStyles, makeStyles } from "@material-ui/core/styles";

const loginStyles = makeStyles(() =>
  createStyles({
    formControl: {
      display: "flex",
      padding: "2em 0",
    },
    formInputContainer: {
      margin: "0 .5em",
      width: "30%",
      height: "89vh",
      display: "flex",
      flexDirection: "column",
      padding: "1.5em",
      border: "1px solid #bdbdbd",
      // backgroundColor: 'rey'
    },
    formInput: {
      borderBottom: "1px solid #1769aa",
    },
    formButton: {
      padding: ".5em 5em",
      width: "100%",
      borderRadius: "2em",
      backgroundColor: "#1769aa",
      color: "white",
      marginBottom: "2em",
    },
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    imageContainer: {
      margin: "0 .2em",
      paddingLeft: "5%",
      width: "65vw",
      height: "98vh",
      backgroundColor: "#1769aa",
      color: "white",
    },
    link: {
      color: "#1769aa",
      cursor: "pointer",
      fontSize: ".8rem",
    },
    linkNoColor: {
      cursor: "pointer",
      fontSize: ".8rem",
      color: "grey",
    },
    text: {
      margin: "10%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    iconBorder: {
      border: "1px solid grey",
      padding: ".2em 1em",
      borderRadius: ".9em",
      margin: "0 .5em",
      color: "grey",
      cursor: "pointer",
    },
    textContainer: {
      alignSelf: "center",
    },
    iconText: {
      color: "grey",
      alignSelf: "center",
      justifySelf: "center",
      margin: "1em 3em ",
    },
    error: {
      color: "red",
      fontSize: ".8rem",
    },
    alert: {
      width: "60%",
    },
  })
);

export default loginStyles;
