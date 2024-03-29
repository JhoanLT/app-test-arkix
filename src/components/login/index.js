import React from 'react';
import LoginContent from './LoginContent';
import { withApi, withSession } from '../../providers';
import { endpoints } from '../../config/endpoints';

/**
 * Componente de login
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
class Login extends React.Component{

    state = {
        email    : '',
        password : '',
        response : false,
        loading  : false,
    };

    componentDidMount(){
        this.props.removeSession();
    };

    onChangeFields({target}){
        this.setState({
            [target.name] : target.value
        });
    }

    async onSubmit(){
        const {setSession, history, fetchApi} = this.props;
        const {email, password} = this.state;
        const endpoint = endpoints.user.login;

        if(email !== '' && password !== ''){
            this.setState({loading : true});
            const response = await fetchApi(endpoint, {
                email,
                password,
            });
            
            if(response.ok){
                this.setState({loading : false});
                setSession(response);
                history.push('news');
            } else {
                this.setState({loading : false});
                this.setMessaje({
                    open    : true,  
                    message : 'Usuario o contraseña incorrectos',
                    type    : 'error',
                });
            }
        } else {
            this.setMessaje({
                open    : true, 
                message : 'Debes ingresar todos los campos',
                type    : 'error',
            });
        }
    }

    setMessaje(response=null){
        this.setState({response});
    }

    render(){
        const {email, password, response, loading} = this.state;
        return(
            <LoginContent
                email          = {email}
                password       = {password}
                onChangeFields = {(e) => this.onChangeFields(e)}
                onSubmit       = {() => this.onSubmit()}
                response       = {response}
                setMessage     = {() => this.setMessaje()}
                loading        = {loading}
            />
        );
    }
}

export default withSession(withApi(Login));