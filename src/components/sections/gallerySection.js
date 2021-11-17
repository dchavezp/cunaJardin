import React, { useState } from 'react'
import { Carousel } from 'antd';
import VizSensor from 'react-visibility-sensor';
const data = [
    {
        id: 1,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2Fd8f9d881-6bac-4b20-a65e-34bc5993d3ac%20(1).jpg?alt=media&token=f8b94987-7539-4787-b746-cb9589620e6f',
    },
    {
        id: 2,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2F13.aula%20psico%20cunita%20(1).png?alt=media&token=e800f73e-f051-4b35-af60-8d3a3a165840',
    },
    {
        id: 3,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2F545b2868-0051-4c88-93a3-b19f9d37172b%20(1).jpg?alt=media&token=d63c5e27-f9b0-4aaa-b455-08daaa458c78',
    },
    {
        id: 4,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2F16.patio%20cunita%20nuevo%20(1).jpg?alt=media&token=d8752fad-8e08-42ef-a782-f73c9d3d5c62',
    },
    {
        id: 5,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2F08.%20(1).jpg?alt=media&token=dab804dc-7ec6-4818-a369-44a381dd8f29',
    },
    {
        id: 6,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2F09.AULA%202%20AÑOS%202011%20(1).jpg?alt=media&token=bacb124a-89fb-4d3c-a455-1e299a64263e',
    },
    {
        id: 7,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2F02.cunita%20niños%20de%20hochi%20(1).jpg?alt=media&token=deefa830-f4cd-4f21-bcf9-c06f23cfa8e8',
    },
    {
        id: 8,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2F8da74145-b092-4fdd-b8c0-10bdc4c1d782%20(1).jpg?alt=media&token=7695f1b3-b8ee-4d65-ad87-051420fd9b3a',
    },
    {
        id: 9,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2FIMG-20201223-WA0034.jpg?alt=media&token=1eba34ce-cf9e-4205-bfeb-de458163d171',
    },
    {
        id: 10,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2FIMG-20201223-WA0042.jpg?alt=media&token=28a52210-23be-4b3d-bb9c-6f417ea29b06',
    },
    {
        id: 11,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2FIMG-20201223-WA0043.jpg?alt=media&token=6ef7ee80-2182-47d7-babd-58449f4f1b12',
    },
    {
        id: 12,
        path: 'https://firebasestorage.googleapis.com/v0/b/cunajardin-unsa.appspot.com/o/galeria%2FIMG-20201223-WA0049.jpg?alt=media&token=dd4a7e92-208d-400e-b616-4655809e13e4',
    },
]
const listPhotos = data.map((item) =>
    <div key={item.id} className="gallery-item">
        <img src={item.path} alt={item.id}></img>
    </div>
);
const listPhotosS = data.map((item) =>
    <img src={item.path} alt={item.id} key={item.id}></img>
);
export default function GallerySection({ id }) {
    const [divViz, setDivViz] = useState(false);
    return (
        <div id={id} className="gallery">
            <div className="barSpace"></div>
            <VizSensor onChange={(isVisible) => { setDivViz(isVisible) }}>
                <h1>
                    Nuestra Galería de Fotos
                </h1>
            </VizSensor>
            <div className={divViz?"animate__animated animate__jackInTheBox gallery-content":"gallery-content"}>
                {listPhotos}
            </div>
            <div className="gallery-scroll">
                <Carousel autoplay effect="fade" useCSS={true}>
                    {listPhotosS}
                </Carousel>
            </div>

        </div>
    )
}