import React from 'react';
import myimage from './on.png'


const Bonjour = () => {
    
    const texte = name ? `Bonjour , ${name} `: `Bonjour la !`; 
    const image = name ? `<img src= {myimage} alt="image "  />` : null ;
    return (
        <div>
            <h2>{texte}</h2>
            {image}
        </div>
    );
};

export default Bonjour;