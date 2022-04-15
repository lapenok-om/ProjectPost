import React from 'react';
import { Card } from '../Card';
import './index.css';

export const List = ({ list }) => {
   
    return (
        <div className="cards">
            {list.map((item) => (
                <Card itemPost={item} />
            ))}
        </div>
    );
};
