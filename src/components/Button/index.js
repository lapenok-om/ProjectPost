import React from 'react';
import ButtonMui from '@mui/material/Button';
import './index.css';

export const Button = () => {
  return (
    <div className='button'>
    <ButtonMui variant="outlined" onClick={() => {alert('Есть контакт');
             }} >Create Post</ButtonMui>
    </div>
  );
}
