import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';


import { Box, FormControl, Input, Paper, Typography, Button } from '@material-ui/core';


import signupStyles from './sign-up-style';
import { CheckBox } from '@material-ui/icons';
// import FormImage from '../components/form-image';

function SignUp(props) {
  const [values, setValues] = React.useState({});
  const [error, setError] = React.useState([])
  const [checked, setChecked] = React.useState(false)

  const classes = signupStyles(props)

  const formData = React.useRef(null);



  // get input fields values
  const handleKeyPress = (e) => {
    setValues(() => {
      return { ...values, [e.target.name]: e.target.value }
    })
    e.preventDefault()
  }

  // Checkbox
  const handleChange = () => {
    setChecked((prevState) => !prevState)
  }


  //validation

  const isValidateEmail = (email) => {
    return (/^([^\s@]+)@([^\s@]+)\.([^\s@])+$/).test(email);
  };

  const isValidatePassword = (password) => {
    const lowerCase = new RegExp("(?=.*[a-z])")
    const upperCase = new RegExp("(?=.*[A-Z])")
    const number = new RegExp("(?=.*[0-9])")
    const special = new RegExp("(?=.*[!@#$%^&*()'?])")

    let data = [];
    if (!upperCase.test(password)) {
      data.push('Should contain at least 1 uppercase character')
    }
    if (!lowerCase.test(password)) {
      data.push('Should contain at least 1 lowercase character')
    }
    if (!number.test(password)) {
      data.push('Should contain at least 1 number')
    }
    if (!special.test(password)) {
      data.push('Should contain at least 1 special characters  !@#$%^&*()?')
    }
  }

  const validate = (keys) => {
    // declaration
    let errorData = error ? error : []
    let formDetails = formData.current;

    if (keys.length === 1) {

    }
    keys && keys.forEach(key => {
      switch (key) {
        case 'user_fullName':
          if (!formDetails['user_fullName'].value.trim()) {
            errorData['user_fullName'] = 'Mandatory field';
          } else {
            delete errorData['user_fullName'];
          }
          break;
        case 'user_company':
          if (!formDetails['user_company'].value.trim()) {
            errorData['user_company'] = 'Mandatory field';
          } else {
            delete errorData['user_company'];
          }
          break;
        case 'user_password':
          let password = formDetails['user_password'].value.trim()
          if (!password) {
            errorData[key] = 'Mandatory field';
          } else if (isValidatePassword(password)) {
            errorData['user_password'] = isValidatePassword(password)
          } else {
            delete errorData['user_password'];
          }
          break;
        case 'user_email':
          if (!formDetails['user_email'].value.trim() && !(isValidateEmail(formDetails['user_email'].value.trim()))) {
            errorData['user_email'] = 'Mandatory field';
          } else {
            delete errorData['user_email'];
          }
          break;
        default:
          break;
      }
    })
    setError({ ...errorData });
    if (Object.keys(errorData).length > 0) {
      return false;
    } else {
      return true;
    }
  }


  const handleSubmit = () => {
    if (validate(['user_fullName', 'user_email', 'user_password', 'user_company'])) {
      const payload = {
        "user_name": values['user_name'],
        "user_password": values['user_password'],
        "user_email": values['user_email'],
        "user_company": values['user_company'],
      }
      const url = 'https://snapkaro.com/eazyrooms_staging/api/userlogin'
      // call api
      axios.post(url, {
        data: JSON.stringify(payload)
      }).then(res => {
        if (res.data.status === 200) {
          console.log(res)

        }
      })
      // get response

      // reset login form
      reset()
      console.log('values :', values)
    }
  }

  const reset = () => {
    let formDetails = formData.current;
    formDetails['user_email'].value = "";
    formDetails['user_password'].value = '';
    formDetails['user_fullName'].value = '';
    formDetails['user_company'].value = '';

  }






  return (
    <Box className={classes.container}>
      <Paper className={classes.imageContainer}>
        <Typography className={classes.text} variant='h3'> Welcome to our community</Typography>
        <Typography className={classes.text} variant='subtitle2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate incidunt exercitationem iste sunt, amet quas nisi enim corporis delectus fugiat laborum, earum, minus porro ipsam? Quo est non magni ducimus.</Typography>
        <div className={classes.avatarContainer}>
          <Avatar alt='img' src='#' /><Avatar alt='img' src='#' /><Avatar alt='img' src='#' />
        </div>
      </Paper>
      <Paper className={classes.formInputContainer}>
        <Typography variant='h4'>Sign Up</Typography>
        <Typography variant='subtitle1'>Dont't have an accout? <Link to={'/'} className={classes.link}>sign In</Link></Typography>
        <form ref={formData}>
          <FormControl className={classes.formControl} variant='outlined'>
            <label >
              {'Full Name *'}
            </label>
            <Input
              type='text'
              className={classes.formInput}
              disableUnderline={true}
              name='user_fullName'
              placeholder='Enter Your Full name Here'
              onBlur={(e) => { handleKeyPress(e); validate(['user_fullName']) }}
              autoComplete='off'
            ></Input>
            <Typography className={classes.error} >{error && error['user_fullName']}</Typography>
          </FormControl>
          <FormControl className={classes.formControl} variant='outlined'>
            <label >
              {'Email Address *'}
            </label>
            <Input
              type='text'
              className={classes.formInput}
              disableUnderline={true}
              name='user_email'
              placeholder='Enter Your Email Here'
              onBlur={(e) => { handleKeyPress(e); validate(['user_email']) }}
              autoComplete='off'
            // onBlur={() => { validate('email'); }}
            ></Input>
            <Typography className={classes.error} >{error && error['user_email']}</Typography>
          </FormControl>
          <FormControl className={classes.formControl} variant='outlined'>
            <label >
              {'Password *'}
            </label>
            <Input
              type='password'
              className={classes.formInput}
              disableUnderline={true}
              name='user_password'
              placeholder='Enter Your Password Here'
              onBlur={(e) => { handleKeyPress(e); validate('user_password') }}
              autoComplete='off'
            // onBlur={() => { validate('email'); }}
            ></Input>
            <Typography className={classes.error} >{error && error['user_password']}</Typography>
          </FormControl>
          <FormControl className={classes.formControl} variant='outlined'>
            <label >
              {'Company *'}
            </label>
            <Input
              type='text'
              className={classes.formInput}
              disableUnderline={true}
              name='user_company'
              placeholder='Enter Your company Here'
              onBlur={(e) => { handleKeyPress(e); validate(['user_company']) }}
              autoComplete='off'
            // onBlur={() => { validate('email'); }}
            ></Input>
            <Typography className={classes.error} >{error && error['user_company']}</Typography>

          </FormControl>
          <CheckBox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} />
          <Typography variant='subtile1'>I agree to the <span className={classes.link}>term and condition </span> and <span className={classes.link}> privacy policy</span></Typography>
          <Button onClick={() => handleSubmit()} variant='contained' className={classes.formButton}> Sign Up</Button>
        </form>
      </Paper>
    </Box>
  )
}

export default SignUp