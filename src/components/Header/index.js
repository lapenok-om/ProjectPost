import React from 'react';
import style from './style.module.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export const Header = () => {
      return (
        <div className={style.header}>
            <div className="container">
                <div className={style.header__wrapper}>
                    <div>logo</div>
                    <div className={style.restButtonsContainer}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                        Home
                        </Link>
                        <Link underline="hover" color="inherit" href="/">
                        Remix Docs
                        </Link>
                        <Link underline="hover" color="inherit" href="/">
                        GitHub
                        </Link>
                    </Breadcrumbs>
                           
                    </div>
                </div>
            </div>
        </div>
    );
};
