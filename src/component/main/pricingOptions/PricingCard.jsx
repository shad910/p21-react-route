import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingCard = ({option}) => {
    const { name, price, description, features, popular } = option;
    return (
        <div className='flex flex-col bg-amber-600 border-black border-2 rounded-lg p-4 '>
            {popular && <span className="badge badge-xs badge-warning">Most Popular</span>}
            <h3 className='text-4xl font-bold mb-0.5 text-white'>{name}</h3>
            <p className='text-2xl font-bold mb-4 text-white'>{price}</p>
            <div className='text-white space-y-3 bg-amber-400 p-3 rounded-lg flex-1'>
                <div className='text-xs'>{description}</div>
                <ul className='space-y-2.5'>
                    {features.map((feature,index)=><li key={index} className='flex gap-1 text-sm'><CircleCheckBig color="green" />{feature}</li>)}
                </ul>
            </div>
            <button className='btn w-full mt-4'>Subscribe</button>
        </div>
    );
};

export default PricingCard;