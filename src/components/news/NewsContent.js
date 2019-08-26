import React from 'react';
import FormNews from './FormNews';
import ListNews from './ListNews';
import { makeStyles } from '@material-ui/core';
import CustomSnackbar from '../commons/CustomSnackbar';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    contentList : {
        padding        : 36,
        marginTop      : 36,
        justifyContent : 'center',
        display        : 'flex',
        // backgroundColor : '#fafafa',
        borderRadius   : 20,
        minHeight      : 600
    },
}));

/**
 * Contenedor de componentes para las noticias
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} param0 
 */
const NewsContent = ({
        news, 
        title, 
        content, 
        onChangeFields,
        onSubmit,
        response,
        setMessage,
        onDelete,
        searchText,
        viewMore,
        total,
        loading,
    }) => {
    const classes = useStyles();
    return(
        <div>
            <div>
                <FormNews
                    title          = {title}
                    content        = {content}
                    onChangeFields = {(e) => onChangeFields(e)}
                    onSubmit       = {() => onSubmit()}
                    loading        = {loading}
                />
            </div>
            <div className={classes.contentList}>
                <ListNews
                    news           = {news}
                    onDelete       = {(item) => onDelete(item)}
                    onChangeFields = {(e) => onChangeFields(e)}
                    searchText     = {searchText}
                    viewMore       = {() => viewMore()}
                    total          = {total}
                />
            </div>
            {response && response.open &&
                <CustomSnackbar 
                    open    = {response.open}
                    onClose = {() => setMessage()}
                    variant = {response.type}
                    message = {response.message}
                />
            }
        </div>
    );
};

NewsContent.propTypes = {
    news : PropTypes.arrayOf(PropTypes.shape({
        title            : PropTypes.string,
        content          : PropTypes.string,
        publication_date : PropTypes.string 
    })), 
    title          : PropTypes.string, 
    content        : PropTypes.string, 
    onChangeFields : PropTypes.func,
    onSubmit       : PropTypes.func,
    response       : PropTypes.any,
    setMessage : PropTypes.func,
    onDelete   : PropTypes.func,
    searchText : PropTypes.string,
    viewMore   : PropTypes.func,
    total      : PropTypes.number,
    loading    : PropTypes.bool,
};

export default NewsContent;