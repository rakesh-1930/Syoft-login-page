import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

import {
  Box,
  Grid,
  FormControl,
  Input,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";

import loginStyles from "./sign-in-styles";
import { Alert } from "@material-ui/lab";
// import FormImage from '../components/form-image';

function SignIn(props) {
  const [values, setValues] = React.useState({});
  const [error, setError] = React.useState([]);
  let [alertPopup, setAlertPopup] = React.useState(false);

  const classes = loginStyles(props);

  const formData = React.useRef(null);

  const history = useHistory();

  // get input fields values
  const handleKeyPress = (e) => {
    setValues(() => {
      return { ...values, [e.target.name]: e.target.value };
    });
    e.preventDefault();
  };

  const handleSubmit = () => {
    if (validate(["user_email", "user_password"])) {
      const url = "https://snapkaro.com/eazyrooms_staging/api/userlogin";
      // call api
      axios
        .post(url, {
          data: values,
        })
        .then((res) => {
          if (res.status === 200) {
            //save token (if any) in local storage/cookies

            return history.push("/dashboard"); // redirecting to dashboard
          }
        });
      // get response

      // reset login form
      reset();
      console.log("values :", values);
    }
  };

  const reset = () => {
    let formDetails = formData.current;
    formDetails["user_email"].value = "";
    formDetails["user_password"].value = "";
  };

  //validation

  const isValidateEmail = (email) => {
    return /^([^\s@]+)@([^\s@]+)\.([^\s@])+$/.test(email);
  };

  const isValidatePassword = (password) => {
    const lowerCase = new RegExp("(?=.*[a-z])");
    const upperCase = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*()'?])");

    let data = [];
    if (!upperCase.test(password)) {
      data.push("Should contain at least 1 uppercase character");
    }
    if (!lowerCase.test(password)) {
      data.push("Should contain at least 1 lowercase character");
    }
    if (!number.test(password)) {
      data.push("Should contain at least 1 number");
    }
    if (!special.test(password)) {
      data.push("Should contain at least 1 special characters  !@#$%^&*()?");
    }
  };

  const validate = (keys) => {
    // declaration
    let errorData = error ? error : [];
    let formDetails = formData.current;

    if (keys.length === 1) {
    }
    keys &&
      keys.forEach((key) => {
        switch (key) {
          case "user_password":
            let password = formDetails["user_password"].value.trim();
            if (!password) {
              errorData[key] = "Mandatory field";
            } else if (isValidatePassword(password)) {
              errorData["user_password"] = isValidatePassword(password);
            } else {
              delete errorData["user_password"];
            }
            break;
          case "user_email":
            if (!formDetails["user_email"].value.trim()) {
              errorData["user_email"] = "Mandatory field";
            } else if (
              !isValidateEmail(formDetails["user_email"].value.trim())
            ) {
              errorData["user_email"] = "Invalid email";
            } else {
              delete errorData["user_email"];
            }
            break;

          default:
            break;
        }
      });
    setError({ ...errorData });
    if (Object.keys(errorData).length > 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Box className={classes.container}>
      <Paper className={classes.imageContainer}>
        <Typography className={classes.text} variant="h3">
          {" "}
          Welcome to our community
        </Typography>
        <Typography className={classes.text} variant="subtitle2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          incidunt exercitationem iste sunt, amet quas nisi enim corporis
          delectus fugiat laborum, earum, minus porro ipsam? Quo est non magni
          ducimus.
        </Typography>
        {alertPopup && (
          <Alert className={classes.alert}>This is comming up soon!</Alert>
        )}
      </Paper>
      <Paper className={classes.formInputContainer}>
        <Typography variant="h4">Sign In</Typography>
        <Typography variant="subtitle1">
          Dont't have an accout?{" "}
          <Link to={"/signUp"} className={classes.link}>
            sign Up
          </Link>
        </Typography>
        <form ref={formData}>
          <FormControl className={classes.formControl} variant="outlined">
            <label>{"Email Address *"}</label>
            <Input
              type="text"
              className={classes.formInput}
              disableUnderline={true}
              name="user_email"
              placeholder="Enter Your Email Here"
              onBlur={(e) => {
                handleKeyPress(e);
                validate(["user_email"]);
              }}
              autoComplete="off"
            ></Input>
            <Typography className={classes.error}>
              {error && error["user_email"]}
            </Typography>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <label>{"Password *"}</label>
            <Input
              type="password"
              className={classes.formInput}
              disableUnderline={true}
              name="user_password"
              placeholder="Enter Your Password Here"
              onBlur={(e) => {
                handleKeyPress(e);
                validate(["user_password"]);
              }}
              autoComplete="off"
            ></Input>
            <Typography className={classes.error}>
              {error && error["user_password"]}
            </Typography>
            <Grid>
              <span className={classes.link}>Forgot Password ?</span>
            </Grid>
          </FormControl>
          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            className={classes.formButton}
          >
            {" "}
            Sign In
          </Button>
        </form>
        <Grid className={classes.textContainer}>
          <Typography className={classes.iconText}>
            ----- or Continue with ----{" "}
          </Typography>
          <TwitterIcon
            onClick={() => {
              setAlertPopup(true);
              setTimeout(() => {
                setAlertPopup(() => (alertPopup = false));
              }, 2500);
            }}
            className={classes.iconBorder}
          />
          <GitHubIcon
            onClick={() => {
              setAlertPopup(true);
              setTimeout(() => {
                setAlertPopup(() => (alertPopup = false));
              }, 2500);
            }}
            className={classes.iconBorder}
          />
          <FacebookIcon
            onClick={() => {
              setAlertPopup(true);
              setTimeout(() => {
                setAlertPopup(() => (alertPopup = false));
              }, 2500);
            }}
            className={classes.iconBorder}
          />
        </Grid>
      </Paper>
    </Box>
  );
}

export default SignIn;
