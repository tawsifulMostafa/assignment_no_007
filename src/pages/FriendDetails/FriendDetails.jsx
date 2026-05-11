import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { id } = useParams();

    return (
        <p>FriendDetails {id}</p>
    );
};

export default FriendDetails;
