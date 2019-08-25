import React from 'react';
import FormRegister from './FormRegister';
import CustomSnackbar from '../commons/CustomSnackbar';
import PropTypes from 'prop-types';

/**
 * Contenedor de componentes para el registro de usuario
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
const UserRegisterContent = ({
    name,
    email,
    password,
    onChangeFields,
    onSubmit,
    response,
    setMessage,
}) => {
    return(
        <div>
            <FormRegister
                name           = {name}
                email          = {email}
                password       = {password}
                onChangeFields = {(e) => onChangeFields(e)}
                onSubmit       = {() => onSubmit()}
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

UserRegisterContent.propTypes = {
    name           : PropTypes.string,
    email          : PropTypes.string,
    password       : PropTypes.string,
    onChangeFields : PropTypes.func,
    onSubmit       : PropTypes.func,
    response       : PropTypes.any,
    setMessage : PropTypes.func,
}

export default UserRegisterContent;