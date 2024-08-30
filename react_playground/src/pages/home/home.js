import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Page d'accueil</h1>
            {/* <Link to="/table">
                <button>Nurse management</button>
            </Link> */}
        </div>
    )
}

export default Home;