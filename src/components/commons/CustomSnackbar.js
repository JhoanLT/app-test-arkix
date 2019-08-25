import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Clear, Info, Warning, CheckCircle} from '@material-ui/icons';
import { amber, green } from '@material-ui/core/colors';
import {Snackbar, SnackbarContent, makeStyles} from '@material-ui/core';

//Tipos de iconos
const variantIcon = {
  success : CheckCircle,
  warning : Warning,
  error   : Clear,
  info    : Info,
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity     : 0.9,
    marginRight : theme.spacing(1),
  },
  message: {
    display    : 'flex',
    alignItems : 'center',
  },
}));

/**
 * Contenido de la alerta
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} param0 
 */
const Content = ({className, message, onClose, variant}) => {
  const classes = useStyles();
  const Icon    = variantIcon[variant];

  return (
    <SnackbarContent
      className        = {clsx(classes[variant], className)}
      aria-describedby = "client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
    />
  );
}

/**
 * Componente de alertas
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} param0 
 */
const CustomSnackbar = ({
        open          = false, 
        message       = 'Default message', 
        variant       = 'success', 
        posVertical   = 'bottom', 
        posHorizontal = 'left',
        duration      = 3000,
        onClose
    }) => {
    
    return(
        <div>
            <Snackbar
                anchorOrigin={{
                vertical: posVertical,
                horizontal: posHorizontal,
                }}
                open             = {open}
                autoHideDuration = {duration}
                onClose          = {() => onClose()}
            >
                <Content
                    onClose = {() => onClose()}
                    variant = {variant}
                    message = {message}
                />
            </Snackbar>
        </div>
    )
}

Content.propTypes = {
    className : PropTypes.string,
    message   : PropTypes.string,
    onClose   : PropTypes.func,
    variant   : PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export default CustomSnackbar;

