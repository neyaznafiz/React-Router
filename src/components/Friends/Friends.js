import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h2>Hello friends, how are you</h2>
            <p>Parle kichu tk dhar dish.. {friends.length}</p>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;