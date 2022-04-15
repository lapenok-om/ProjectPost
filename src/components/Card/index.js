import React from 'react';
import CardMui from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export const Card = ({ itemPost }) => {
   return (
   <CardMui sx={{ maxWidth: 345 }}>
       <CardActions>
      <Button sx={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{itemPost.title}</Button>
    </CardActions>
      
      <Divider />
   <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={itemPost.author.Avatar} />}
        title={itemPost.author.email}
    />
    <CardContent>
      <Typography variant="body2">
         {itemPost.text}
          
      </Typography>

    </CardContent>
   </CardMui>

   );
};
