import React from 'react';

export function PhotoViewer({ name }) {
    if (!name) {
        return <div className='photoWrap'>
            <img className='photo' src='https://picsum.photos/id/1003/200/'></img>
        </div>
    }
    return (
        <div className='photoWrap'>
            <img className='photo' src={name}></img>
        </div>
    );
}


const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls(){
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }
console.log(urls)
    return urls;
}

export const ImageUrls = getImageUrls();



