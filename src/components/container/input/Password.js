import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
 
label.Mui-focused {
    color: #425FEB;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border : .5px solid #CCD9E8 ; 
    }
    &.Mui-focused fieldset {
      
      border : .5px solid #425FEB ; 
      border-left :6px solid #425FEB;
    }
  }
`;

export default function Password(props) {


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

    <div >

      <StyledTextField
        style={{ background: 'white' }}
        required
        size="small"
        label={props.label}
        type={values.showPassword ? 'text' : 'password'}
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}>
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }}
      />

      <FormHelperText style={{marginBottom:'10px'}} error={props.error} >{props.helper}</FormHelperText>

    </div>
  );
}
