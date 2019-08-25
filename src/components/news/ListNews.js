import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import moment from 'moment';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  card: {
    width        : '100%',
    marginTop    : 24,
    maxWidth     : 600,
    borderRadius : 10
  },
  search: {
    position        : 'relative',
    borderRadius    : theme.shape.borderRadius,
    backgroundColor : '#fafafa',
    marginRight     : theme.spacing(2),
    marginLeft      : 0,
    width           : '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width          : theme.spacing(7),
    height         : '100%',
    position       : 'absolute',
    pointerEvents  : 'none',
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'center',
  },
  inputRoot: {
    color : 'inherit',
  },
  inputInput: {
    padding    : theme.spacing(1, 1, 1, 7),
    transition : theme.transitions.create('width'),
    width      : '100%',
    [theme.breakpoints.up('md')]: {
      width: 500,
    },
  },
  noData: {
    width     : '100%',
    textAlign : 'center',
  },
  viewMore: {
    marginTop : 24
  }
}));

/**
 * Listado de noticias
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} param0 
 */
const ListNews = ({
    news, 
    onDelete, 
    searchText, 
    onChangeFields,
    viewMore,
    total,
}) =>  {
  const classes = useStyles();

  return (
      <div >
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
                onChange    = {(e) => onChangeFields(e)}
                value       = {searchText}
                placeholder ="Search…"
                name        = 'searchText'
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        {news.length > 0 ? 
            news.map((item, key) => (
                <Card className={classes.card} key={key}>
                    <CardActionArea>
                        <CardMedia
                            component = "img"
                            alt       = "Contemplative Reptile"
                            height    = "100"
                            image     = "https://www.fusioninformatics.com/images/seo-banner/nodejs-banner.jpg"
                            title     = "Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography gutterBottom variant="caption">
                            {moment(new Date(item.publication_date)).format('YYYY-MM-DD / hh:mm a')}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.content}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => onDelete(item)}>
                            Eliminar
                        </Button>
                    </CardActions>
                </Card>                
            )) :
            <div className={classes.noData}><Typography>¡No hay noticias para mostrar!</Typography></div>
        }
        {total > news.length &&
          <div>
            <Button
                className = {classes.viewMore}
                color     = "primary"  
                onClick   = {() => viewMore()}
                fullWidth
            >
                Ver más
            </Button>
          </div>
        }
      </div>
  );
}

ListNews.propTypes = {
  news : PropTypes.arrayOf(PropTypes.shape({
      title            : PropTypes.string,
      content          : PropTypes.string,
      publication_date : PropTypes.string 
  })), 
  onDelete       : PropTypes.func, 
  searchText     : PropTypes.string, 
  onChangeFields : PropTypes.func,
  viewMore       : PropTypes.func,
  total          : PropTypes.number,
};

export default ListNews;
