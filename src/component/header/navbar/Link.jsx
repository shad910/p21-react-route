import React from 'react';

const Link = ({route}) => {

    const { name, path } = route;
    
    return (
        <li className='hover:bg-gray-200 hover:p-2 p-2 hover:rounded-sm text-lg'>
           <a href={path}>{name}</a> 
        </li>
    );
};

export default Link;