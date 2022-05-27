import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const MovieCard = (props) => {
  const { name, rating, date } = props;
  return (
    <Card sx={{ maxWidth: 345, height: '200px' }}>
      <div style={{ marginTop: '15%', marginLeft: '20%' }}>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <b>Rating</b>:{rating}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <b>Released Date</b>:{date}
        </Typography>
      </div>
    </Card>
  );
};

export default MovieCard;
