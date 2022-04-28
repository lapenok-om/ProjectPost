import { config } from "./config";

class Api {
    constructor({url, token}){
        this._url = url;
        this._token = token;
    }

    getPosts(itemID){
        const requestURL = itemID? `${this._url}/posts/${itemID}` : `${this._url}/posts`;
        return fetch(requestURL, {
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(res => res.json())
        .catch(err => err.message);

    }

    getMyInfo(){
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${this._token}`,
                }
        }).then(res => res.json())
        .catch(err => err.message);

    }

    addLike(itemID){
        return fetch(`${this._url}/posts/likes/${itemID}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${this._token}`,
                }
        }).then(res => res.json())
        .catch(err => err.message);

    }

    deleteLike(itemID){
        return fetch(`${this._url}/posts/likes/${itemID}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`,
                }
        }).then(res => res.json())
        .catch(err => err.message);

    }

    deletePost(itemID){
        return fetch(`${this._url}/posts/${itemID}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`,
                }
        }).then(res => res.json())
        .catch(err => err.message);

    }

}

export default new Api(config);