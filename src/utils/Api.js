import { config } from "./config";

class Api {
    constructor({url, token}){
        this._url = url;
        this._token = token;
    }

    getPosts(){
        return fetch(`${this._url}/posts`, {
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

}

export default new Api(config);