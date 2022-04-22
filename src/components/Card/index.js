import React from 'react';

import api from '../../utils/Api';
import CardMui from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import dayjs from 'dayjs';
import './index.css';


export const Card = ({ itemPost, isInFavorites, setFavorites }) => {

   let authorIs = true;
   if (itemPost.author == null){
      authorIs = false;
   }

   const likesCount = itemPost.likes

   const writeLS = (key, value) => {
      const storage = JSON.parse(localStorage.getItem(key)) || [];
      storage.push(value);
      localStorage.setItem(key, JSON.stringify(storage));
   };

   const removeLS = (key, value) => {
      const storage = JSON.parse(localStorage.getItem(key));
      const filterStorage = storage.filter((itemID) => value !==itemID);
      localStorage.setItem(key, JSON.stringify(filterStorage));
   };

   const addFavorite = () => {
      writeLS('favorites', itemPost._id);
      setFavorites((prevState) => [...prevState, itemPost._id]);
      api.addLike(itemPost._id);
   };

   const removeFavorite = () => {
      removeLS('favorites', itemPost._id);
      setFavorites((prevState) => prevState.filter((itemID) => itemPost._id !== itemID));
      api.deleteLike(itemPost._id);
   };

   return (
   <CardMui sx={{ maxWidth: 345 }}>
       <CardActions>
      <Button sx={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{itemPost.title}</Button>
      
    </CardActions>
      
      <Divider />
      <CardMedia
        component="img"
        height="194"
        image={itemPost.image}
        alt="Paella dish"
      />
   { <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={authorIs? itemPost.author.avatar : ''}/>}
        title={authorIs? itemPost.author.email : ''}
    /> }
    <CardContent>
      <Typography variant="body2">
         {itemPost.text}
        
      </Typography>
       
           
      <Typography sx={{ mt: 3}} color="text.secondary">
      {dayjs(itemPost.created_at).format('MMMM D, YYYY')}
        </Typography>
      
      
      
      
    </CardContent>
    <CardActions disableSpacing>
       {isInFavorites ? (
          <IconButton aria-label="add to favorites" onClick={removeFavorite}>
             {likesCount.length}
          <FavoriteIcon  color="error" />
       </IconButton>
       ) : 
       (
         <IconButton aria-label="add to favorites" onClick={addFavorite}>
            {likesCount.length}
            <FavoriteIcon />
         </IconButton>
       )}
    
    </CardActions>
   </CardMui>

   );
};
