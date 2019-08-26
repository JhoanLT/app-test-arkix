import React from 'react';
import FormLogin from './FormLogin';
import CustomSnackbar from '../commons/CustomSnackbar';
import PropTypes from 'prop-types';

/**
 * Contenedor de componentes del login
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
const LoginContent = ({
    email,
    password,
    onChangeFields,
    onSubmit,
    response,
    setMessage,
    loading,
}) => {
    return(
        <div>
            <FormLogin
                email          = {email}
                password       = {password}
                onChangeFields = {(e) => onChangeFields(e)}
                onSubmit       = {() => onSubmit()}
                loading        = {loading}
            />
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

LoginContent.propTypes = {
    email          : PropTypes.string,
    password       : PropTypes.string,
    onChangeFields : PropTypes.func,
    onSubmit       : PropTypes.func,
    response       : PropTypes.any,
    setMessage     : PropTypes.func,
    loading        : PropTypes.bool,
}

export default LoginContent;