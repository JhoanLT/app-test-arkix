import React from 'react';
import { 
    Grid, 
    makeStyles, 
    Paper, 
    TextField, 
    Typography, 
    Button
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
        padding   : 50,
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
}));

/**
 * Formulario de noticias
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
const FormNews = ({
    title,
    content,
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
                            Nueva noticia
                        </Typography>
                    </div>
                    <div>
                        <form>
                            <TextField
                                label    = "Título"
                                value    = {title}
                                name     = 'title'
                                margin   = 'normal'
                                onChange = {(e) => onChangeFields(e)}
                                fullWidth
                            />
                            <TextField
                                label    = "Contenido"
                                value    = {content}
                                name     = 'content'
                                margin   = 'normal'
                                onChange = {(e) => onChangeFields(e)}
                                fullWidth
                            />
                            <TextField
                                label    = "Imagen"
                                margin   = 'normal'
                                onChange = {(e) => onChangeFields(e)}
                                fullWidth
                                type='file'
                            />
                        </form>
                        <Button 
                            variant   = "contained" 
                            color     = "primary" 
                            className = {classes.button} 
                            onClick   = {() => onSubmit()}
                            fullWidth
                        >
                            Publicar
                        </Button>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

FormNews.propTypes = {
    title          : PropTypes.string,
    content        : PropTypes.string,
    onChangeFields : PropTypes.func,
    onSubmit       : PropTypes.func,
};

export default FormNews;