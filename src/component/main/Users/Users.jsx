import React from 'react';
import { useLoaderData } from 'react-router';
import User from './user';

const User1 = () => {
    const users = useLoaderData();

    return (
        <div>
            <h1 className='text-3xl text-center my-6'>All Users data</h1>
            <div className='text-4xl text-center p-5.5 grid grid-cols-3 gap-2.5'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default User1;