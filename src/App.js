import React, { useEffect, useState } from 'react';

import api from './utils/Api';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { TextArea } from './components/TextArea';

import './index.css';

export const App = () => { 
    const [postList, setPostList] = useState(null);
    const [user, setUser] = useState("?");


     useEffect(() => {
         api.getPosts()
         .then(data => setPostList(data));

     },[]);

    useEffect(() => {
        api.getMyInfo()
        .then(data => setUser(data));

    },[]);
    
    return (
        <div className='appContainer'>
                <Header user={user} />
            <div className='content container'>
                <TextArea />
                { <div className='content__cards'>
                    <List list={postList} />
                </div> }
            </div>
                <Footer />
            
        </div>
    );
};
