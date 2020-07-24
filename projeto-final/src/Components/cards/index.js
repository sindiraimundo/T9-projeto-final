import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './cards.css';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
 });

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height={props.height}
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent>
                      
          <h2>{props.tituloCard}</h2>
          <p>{props.texto}</p>
          
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props.href}>
          Saiba Mais
        </a>
      </CardActions>
    </Card>
  );
}
