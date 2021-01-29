import React, { useState, useEffect } from 'react';
import classes from './GamesGrid.module.css';
import Game from './Game/Game';
import axios from 'axios';

const GamesGrid = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3001/api/games')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err))
    }, []);
    return (
        data && <div className={classes.GamesDisplay}>
            <h3>We Have All The Information You Need</h3>
            <div className={classes.GamesGrid}>
                {data.map(d => {
                    let src = 'http://localhost:3001/' + d.cover;
                    return <Game src={src} key={d._id} id={d._id} name={d.name} />
                })}
            </div>
        </div>
    )
}

export default GamesGrid;