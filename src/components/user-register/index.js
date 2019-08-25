import React from 'react';
import { withApi } from '../../providers';
import { endpoints } from '../../config/endpoints';
import UserRegisterContent from './UserRegisterContent';
import {withRouter} from 'react-router-dom';

/**
 * Component de registro de usuario
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
class UserRegister extends React.Component{

    state = {
        name     : '',
        email    : '',
        password : '',
        response : false,
    };

    onChangeFields({target}){
        this.setState({
            [target.name] : target.value
        });
    }

    //Realizar el registro
    async onSubmit(){
        const {email, password, name} = this.state;
        const endpoint = endpoints.user.register;

        if(name !== '' && password !== '' && email !== ''){
            const response = await this.props.fetchApi(endpoint, {
                name,
                email,
                password,
            });
            if(response.ok){
                this.setMessaje({
                    open    : true, 
                    message : '¡Registro satisfactorio!',
                    type    : 'success',
                });
                setTimeout(() => {
                    this.props.history.push('login');
                }, 2000)
            } else {
                this.setMessaje({
                    open    : true,  
                    message : response.exist ? 'El email ya existe' : 'Ocurrió un error',
                    type    : 'error',
                });
            }
        } else {
            this.setMessaje({
                open    : true, 
                message : 'Todos los campos son obligatorios',
                type    : 'error',
            });
        }
    }

    setMessaje(response=null){
        this.setState({response});
    }
    
    render(){
        const {email, password, name, response} = this.state;
        return(
            <UserRegisterContent
                name           = {name}
                email          = {email}
                password       = {password}
                onChangeFields = {(e) => this.onChangeFields(e)}
                onSubmit       = {() => this.onSubmit()}
                response       = {response}
                setMessage     = {() => this.setMessaje()}
            />
        );
    }
};

export default withRouter(withApi(UserRegister));