import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import api from '../../utils/Api';

export const Item = () => {
    const [item, setItem] = useState(null);
    const params = useParams();

    useEffect(() => {
        api.getPosts(params.itemID).
        then((data) => setItem(data));

    }, []);
  return (
    <pre>{JSON.stringify(item, null, 4)}</pre>
  );
};
