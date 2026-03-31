import React, { use } from 'react';

const Modal = ({ dataPromise }) => {
    const data = use(dataPromise);
    console.log(data);
    return (
        <div className='bg-white text-black'>
            <h1>Modal Title</h1>
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Modal;