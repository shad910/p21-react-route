import React, { use } from 'react';

const UserDetailsGo = ({userPromise}) => {
    const {website, phone} = use(userPromise);
    return (
        <div>
           <p>Phone: {phone}</p>
           <p>website: {website}</p>
        </div>
    );
};

export default UserDetailsGo;