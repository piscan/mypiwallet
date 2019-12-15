import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import LockIcon  from '@material-ui/icons/LockOutlined';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
     
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: 200,
    },
  }));

  
export default function Password(props) {

    const classes = useStyles();

    const [values, setValues] = React.useState({
      showPassword: false,
    });
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = event => {
      event.preventDefault();
    };
  
    return (
      
      <div className={classes.root}>
    
          <TextField
          size="small"
          label = {props.label}
            type={values.showPassword ? 'text' : 'password'}
            id="standard-start-adornment"
            className="input"
            variant="outlined"
            placeholder=""
            value={props.value}
            onChange={props.onChange}
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility  /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
             , startAdornment : <InputAdornment position="start">
                 <Icon className ="fa fa-lock" style={{fontSize:'15px'}}/>
             </InputAdornment>}}
          />
        <FormHelperText id="component-helper-text">Some important helper text</FormHelperText>

      </div>
    );
  }
  