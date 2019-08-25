import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withRouter} from 'react-router-dom';
import { withSession } from '../../providers';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

/**
 * Barra de navegación
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
const AppBarNavigation = ({history, session}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Test arkix
          </Typography>
          {session && !session.data ?
            <div>
              <Button color="inherit" onClick={() => history.push('register')}>Registrarme</Button>
              <Button color="inherit" onClick={() => history.push('login')}>Login</Button>
            </div> : 
            <Button color="inherit" onClick={() => history.push('login')}>Salir</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppBarNavigation.propTypes = {
    history : PropTypes.object,
    session : PropTypes.object,
};

export default withSession(withRouter(AppBarNavigation));
