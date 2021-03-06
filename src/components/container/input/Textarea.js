import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import InfoIcon from '@material-ui/icons/Info';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import FormHelperText from '@material-ui/core/FormHelperText';
//#74E8E6
const StyledTextField = styled(TextField)`
 
label.Mui-focused {
    color: #425FEB;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color:  #CCD9E8;
    }
    &:hover fieldset {
      border : 1px solid #CCD9E8 ; 
    }
    &.Mui-focused fieldset {
      
      border : .5px solid #425FEB ; 
      border-left :6px solid #425FEB;
    }
  }
`;

export default function Textarea(props) {


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
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
        fullWidth 
        multiline
        rows={4}
      />

      <FormHelperText error={props.error} >{props.helper}</FormHelperText>

    </div>
  );
}
