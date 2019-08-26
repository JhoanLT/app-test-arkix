import React from 'react';
import { 
    Grid, 
    makeStyles, 
    Paper, 
    TextField, 
    Typography, 
    Button,
    CircularProgress,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow       : 1,
      justifyContent : 'center',
      marginTop      : 24
    },
    paper: {  
        textAlign : 'center',
        padding   : 60,
    },
    text: {
        fontSize : 18,
    },
    contentForm: {
        width     : '50%',
        textAlign : 'center',
    },
    button: {
        marginTop    : 24,
        borderRadius : 50
    },
    circularProgress : {
        marginTop : 18,
    }
}));

/**
 * Formulario de login
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} param0 
 */
const FormLogin = ({
    email,
    password,
    onChangeFields,
    onSubmit,
    loading,
}) => {
    const classes = useStyles();
    return(
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={6} lg={6}>
                <Paper className={classes.paper}>
                    <div>
                        <Typography variant='overline' color='textSecondary' className={classes.text}>
                            Login
                        </Typography>
                    </div>
                    <div>
                        <form>
                            <TextField
                                label    = "Email"
                                value    = {email}
                                name     = 'email'
                                margin   = 'normal'
                                onChange = {(e) => onChangeFields(e)}
                                fullWidth
                            />
                            <TextField
                                label    = "Password"
                                type     = 'password'
                                margin   = 'normal'
                                value    = {password}
                                name     = 'password'
                                onChange = {(e) => onChangeFields(e)}
                                fullWidth
                            />
                        </form>
                        <div>
                        {loading ?
                            <CircularProgress className={classes.circularProgress} /> :
                            <Button 
                                variant   = "contained" 
                                color     = "primary" 
                                className = {classes.button} 
                                onClick   = {() => onSubmit()}
                                fullWidth
                            >
                                Ingresar
                            </Button>
                            }
                        </div>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

FormLogin.propTypes = {
    email          : PropTypes.string,
    password       : PropTypes.string,
    onChangeFields : PropTypes.func,
    onSubmit       : PropTypes.func,
    loading        : PropTypes.bool,
}

export default FormLogin;