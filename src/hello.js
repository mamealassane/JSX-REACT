import React from 'react';
import myimg from './on.png'
const hello = () => {
    const name = 'Bo' ;
    const titre = name ? `Hello , ${name}!` : `Hello,there!` ;
    console.log(name);

    return (
        <div>
            {titre}
            { name ==='Bo' && <img src={myimg} alt=""  width={50} height={50}/>}
        </div>
    );
};

export default hello;