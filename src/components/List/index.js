import React from 'react';
import { Card } from '../Card';
import './index.css';

export const List = ({ list, favorites, setFavorites, user }) => {
   
    return (
        <div className="cards">
            {list?.map((item) => (
                <Card itemPost={item} key={item._id}
                    isInFavorites={item.likes.includes(user._id)}
                    setFavorites={setFavorites}
                />
            ))}
        </div>
    );
};
