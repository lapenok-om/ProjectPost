import React, { useEffect, useState } from 'react';
import postData from '../posts.json';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import { TextArea } from './components/TextArea';


import './index.css';

export const App = () => { 
    const [postList, setPostList] = useState(postData);
    
    return (
        <div className='appContainer'>
                <Header />
            <div className='content container'>
                <TextArea />
                <div className='content__cards'>
                    <List list={postList} />
                </div>
            </div>
                <Footer />
            
        </div>
    );
};
