const brokenImages = [
    1, 24, 32, 36, 44, 47
];

// function getImageUrls() {
//     const urls = [];

//     for (let i = 0; i < 50; i++) {
//         if (!brokenImages.includes(i)) {
//             const imageNumberString = i.toString().padStart(2, '0');
//             urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
//         }
//     }
//     console.log(urls)
//     return urls;
// }

// export const ImageUrls = getImageUrls();

// export function ShowImageThumbnails({ listOfUrls }) {
//     const images = listOfUrls.forEach((url =>
//         <div className='photoUrls'>
//             <img className='photoThumbnail' alt='image' src={url}></img>
//         </div>
//     ))
//     return images

// }

export function ShowImageThumbnails({listOfUrls }) {
    for (let i = 0 ; i < listOfUrls.length ; i++) {
        return <div className='photoUrls'>
               <img className='photoThumbnail' alt='image' src={listOfUrls[i]}></img>
            </div> 
    }
    

}

// function myFunction(url) {
//     return <div className='photoUrls'>
//         <img className='photoThumbnail' alt='image' src={url}></img>
//     </div>
//  }