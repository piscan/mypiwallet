import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import InfoIcon from '@material-ui/icons/Info';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import FormHelperText from '@material-ui/core/FormHelperText';

const StyledTextField = styled(TextField)`
 
label.Mui-focused {
    color: black;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border : .5px solid #8CFFDD ; 
    }
    &.Mui-focused fieldset {
      
      border : .5px solid #74E8E6 ; 
    }
  }
`;

export default function Name(props) {


  const handleClickShowInfo= () => {
      Swal.fire({
          title: 'Name', 
          text : 'Is used to show for every wallet as wallet name.', 
          icon : 'info', 

      })
  };

  const handleMouseDownInfo = event => {
    event.preventDefault();
  };

  return (

    <div >

      <StyledTextField
      style={{background:'white'}}
        required
        size="small"
        label={props.label}
        type='text'
        className="input"
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
        fullWidth        
        InputProps={{
          endAdornment: <InputAdornment position="end">
              <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowInfo}
              onMouseDown={handleMouseDownInfo}>
                   <InfoIcon/>
              </IconButton>
          </InputAdornment>
        }}
      />

      <FormHelperText error={props.error} >{props.helper}</FormHelperText>

    </div>
  );
}
