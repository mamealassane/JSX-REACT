import React from 'react';
import product from './product';

const Image = ({image}) => {
    return (
        <div>
            <img src={product.image} alt="image " width={159} />
        </div>
    );
};

export default Image;