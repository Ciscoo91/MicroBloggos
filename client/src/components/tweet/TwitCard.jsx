import React, { useContext, useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext'
import EditTwitt from '../tweet/Edit';
const formatDate = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '';
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}


export const seekHashtag = (message) => {

    const arrayMessage = message.split(' ');

    if (arrayMessage.includes('#myhashtag')) {
        let indexOfHashtag = arrayMessage.indexOf("#myhashtag");
        let first = arrayMessage.splice(0, indexOfHashtag);
        let second = arrayMessage.splice(indexOfHashtag + 1)
        let firstString = first.join(' ');
        let secondString = second.join(' ');
        return (
            <Fragment>
                {firstString} <Link className="text-warning" to="/myhashtag">#myhashtag</Link> {secondString}
            </Fragment>
        )
    }

    return message;
}


const TwitCard = ({ message }) => {


    const [imageUrl, setImageUrl] = useState(null);
    const fetchAvatar = async (id) => {
        const response = await axios.get(`/avatar/${id}`);
        setImageUrl(response.data[0].avatar_url);
    }

    const deleteMessage = async (id) => {
        const response = await fetch(`/messages/message/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
    }

    useEffect(() => {
        fetchAvatar(message.author_id);
    })

    const { user } = useContext(AuthContext);
    return (
        <div className="row mt-4 bg-info text-light">
            <div className="media p-3">
                {imageUrl ? (<img src={imageUrl} alt="profile_picture" style={{ "width": "64px", "height": "64px" }} className="mr-3" />) : (<img src="https://via.placeholder.com/64" style={{ "width": "64px", "height": "64px" }} className="mr-3" alt="" />)}
                <div className="media-body">
                    <h5 className="mt-0 text-warning"><Link className="text-warning" to={`/profile/${message.author_id}`}> {message.author}</Link></h5>
                    <p>{seekHashtag(message.message)}</p>
                    <p className="font-weight-lighter">{formatDate(message.created_at)}</p>
                    {user.data.user.id === message.author_id ? <EditTwitt message={message} /> : null}
                    {user.data.user.id === message.author_id ? <button className="btn btn-danger btn-sm ml-2" onClick={() => deleteMessage(message._id)}>Delete</button> : null}
                </div>
            </div>
        </div>
    );
}

export default TwitCard;
