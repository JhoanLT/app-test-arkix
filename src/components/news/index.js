import React from 'react';
import NewsContent from './NewsContent';
import { withApi } from '../../providers';
import { endpoints } from '../../config/endpoints';

/**
 * Componente de Noticias
 * @author Jhoan López <jhoanlt19@gmail.com>
 */
class News extends React.Component{

    from  = 0;
    limit = 10;

    state = {
        news       : [],
        title      : '',
        content    : '',
        response   : false,
        searchText : '',
        total      : 0,
    };

    componentDidMount(){
        this.getNews();
    }

    //Obtener las noticias
    async getNews(viewMore=false){
        const endpoint = endpoints.news.list;

        if(!viewMore){
            const response = await this.props.fetchApi(endpoint,{},'GET');
            if(response.ok){
                this.setState({
                    news  : response.news,
                    total : response.total,
                });
            }
        } else {
            const response = await this.props.fetchApi(endpoint+`?from=${this.from}&limit=${this.limit}`,{},'GET');
            if(response.ok){
                this.setState({
                    news  : [...this.state.news, ...response.news],
                    total : response.total,
                });
            }
        }
    }

    onChangeFields({target}){
        this.setState({
            [target.name] : target.value
        });
    }

    //Registrar nueva noticia
    async onSubmit(){
        const {title, content} = this.state;
        const endpoint = endpoints.news.register;
        if(title !== '' && content !== ''){
            const response = await this.props.fetchApi(endpoint, {
                title,
                content,
            });
    
            if(response.ok){
                this.setMessaje({
                    open    : true, 
                    message : '¡Se agrego una nueva noticia!',
                    type    : 'success',
                });
                this.setState({
                    news    : [...this.state.news, {title, content, _id : response.newsDB._id}],
                    title   : '',
                    content : ''
                });
            } else {
                this.setMessaje({
                    open    : true,  
                    message : 'Ocurrió un error al publicar la noticia',
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

    //Eliminar una noticia
    async onDelete(item){
        const {news, total}       = this.state;
        const endpoint = endpoints.news.delete;
        const response = await this.props.fetchApi(endpoint+item._id, {}, 'DELETE');

        if(response.ok){
            this.setMessaje({
                open    : true, 
                message : '¡Noticia eliminada correctamente!',
                type    : 'success',
            });
            this.setState({
                news  : news.filter(news => news._id !== item._id),
                total : total-1, 
            });
            this.from -= 1;
        }
    }

    //Filtro de noticias
    newsFilter(){
        const {news, searchText} = this.state;
        if ( searchText.length === 0 ){
            return news;
        }

        return news.filter(item => {
            const regEx = new RegExp(`.*(${searchText.toLowerCase()}).*`, 'g');
            return `${item.title.toLowerCase()}`.match(regEx) || `${item.content.toLowerCase()}`.match(regEx);
        });
    }

    //Control del (Ver más)
    viewMore(){
        this.from += this.limit;
        this.getNews(true);
    }

    render(){
        const {title, content, response, searchText, total} = this.state;
        const news = this.newsFilter();

        return(
            <NewsContent
                news           = {news}
                title          = {title}
                content        = {content}
                onChangeFields = {(e) => this.onChangeFields(e)}
                onSubmit       = {() => this.onSubmit()}
                response       = {response}
                setMessage     = {() => this.setMessaje()}
                onDelete       = {(item) => this.onDelete(item)}
                searchText     = {searchText}
                viewMore       = {() => this.viewMore()}
                total          = {total}
            />
        )
    }
}

export default withApi(News);