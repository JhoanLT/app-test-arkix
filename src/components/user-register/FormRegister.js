import React from 'react';
import { 
    Grid, 
    makeStyles, 
    Paper, 
    TextField, 
    Typography, 
    Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow       : 1,
      justifyContent : 'center',
      marginTop      : 24
    },
    paper : {  
        textAlign : 'center',
        padding   : 60,
    },
    text : {
        fontSize : 18,
    },
    contentForm : {
        width     : '50%',
        textAlign : 'center',
    },
    button : {
        marginTop    : 24,
        borderRadius : 50
    },
}));

/**
 * Formulario de registro de usuario
 * @author Jhoan López <jhoanlt19@gmail.com> 
 * @param {*} param0 
 */
const FormRegister = ({
    name,
    email,
    password,
    onChangeFields,
    onSubmit,
}) => {
    const classes = useStyles();
    return(
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={6} lg={6}>
                <Paper className={classes.paper}>
                    <div>
                        <Typography variant='overline' color='textSecondary' className={classes.text}>
                            Registrate
                        </Typography>
                    </div>
                    <div>
                        <form>
                            <TextField
                                label    = "Nombre"
                                value    = {name}
                                name     = 'name'
                                margin   = 'normal'
                                onChange = {(e) => onChangeFields(e)}
                                fullWidth
                            />
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
                        <Button 
                            variant   = "contained" 
                            color     = "primary" 
                            className = {classes.button} 
                            onClick   = {() => onSubmit()}
                            fullWidth
                        >
                            Registrarme
                        </Button>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

FormRegister.propTypes = {
    name           : PropTypes.string,
    email          : PropTypes.string,
    password       : PropTypes.string,
    onChangeFields : PropTypes.func,
    onSubmit       : PropTypes.func,
};

export default FormRegister;