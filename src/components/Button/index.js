import React from 'react';
import ButtonMui from '@mui/material/Button';
import { Link } from "react-router-dom";
import './index.css';

export const Button = () => {
  return (
    <div className='button'>
    <ButtonMui variant="outlined" > <Link to={`posts/create`}> Create Post</Link></ButtonMui>
    </div>
  );
}
