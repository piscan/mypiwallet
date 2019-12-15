import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

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

export default function Input() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl>
            <TextField
                szie="small"
                type="number"
                label="Pi to send "
                id="filled-start-adornment"
                value={props.value }
                onChange={props.onChange}
                className="input "
                InputProps={{
                    endAdornment: <InputAdornment position="start">Pi</InputAdornment>,
                }}
                variant="outlined"
                size="small"
            />
            </FormControl>
        </div>
    );
}
