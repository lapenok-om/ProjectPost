import React, { useEffect, useState } from 'react';

import api from './utils/Api';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { TextArea } from './components/TextArea';
import Pagination from '@mui/material/Pagination';

import './index.css';

export const App = () => { 
    const [postList, setPostList] = useState(null);
    const [user, setUser] = useState("?");
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

    

     useEffect(() => {
         api.getPosts()
         .then((data) => {
             setPageCount(Math.ceil(data.length / 12));
             setPostList(data.slice(12*(page - 1), 12*(page - 1) +12))});

     },[page, favorites]);

    useEffect(() => {
        api.getMyInfo()
        .then(data => setUser(data));

    },[]);
    
   
    return (
        <div className='appContainer'>
                <Header user={user} />
            
            <div className='content container '>
                <TextArea />
                 <div className='content__cards'>
                    <List list={postList} favorites={favorites} setFavorites={setFavorites} user={user} />
                </div> 
                <Pagination sx={{ mb: 3, mt: 3, ml: 45 }}
                    count={pageCount}
                    page={page}
                    onChange={(_,number) => setPage(number)}
                 />   
           
            </div> 
                
                <Footer />
            
        </div>
    );
};
