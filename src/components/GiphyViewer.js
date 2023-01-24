import { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const GIPHY_URL = 'https://api.giphy.com/v1/gifs';
const API_KEY = 'OLBjofZ2BGbKoS5dcUJWkBa53PWByED7';

const GiphyViewer = () => {
    
    const [gifs, setGifts] =useState ([]);
    
    useEffect(() => {
        axios.get(`${GIPHY_URL}/trending?api_key=${API_KEY}`)
        .then(response => {
            setGifts(response.data.data);
        })
        .catch(error => console.log(error));
    }, []);

    const gifComponents =gifs.map((g) => {
        return <GIFCard key={g.id} image={g.images.fixed.url} title={g.title} url={g.url}/>;
    });

    console.log(gifComponents)
    return (
        <h1>Hello from GiphyViewer</h1>
    );
};

export default GiphyViewer;
