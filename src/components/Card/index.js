import React from 'react';
import CardMui from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import './index.css';


export const Card = ({ itemPost }) => {

   let authorIs = true;
   if (itemPost.author == null){
      authorIs = false;
   }

   const likesCount = itemPost.likes


   return (
   <CardMui sx={{ maxWidth: 345 }}>
       <CardActions>
      <Button sx={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{itemPost.title}</Button>
      
    </CardActions>
      
      <Divider />
   { <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={authorIs? itemPost.author.avatar : ''}/>}
        title={authorIs? itemPost.author.email : ''}
    /> }
    <CardContent>
      <Typography variant="body2">
         {itemPost.text}
        
      </Typography>
       
           
      <Typography sx={{ mt: 3}} color="text.secondary">
      {dayjs(itemPost.created_at).format('DD/MM/YYYY')}
        </Typography>
      
      
      
      
    </CardContent>
    <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
         {likesCount.length}
          <FavoriteIcon />
      </IconButton>
    </CardActions>
   </CardMui>

   );
};
