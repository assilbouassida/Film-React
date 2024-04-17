import React from 'react';
import Details from './Details';

function Card({ film }) {
    return (
        <div className="card mx-auto mb-4" style={{ width: '18rem' }}  category={film.categorie}  type={film.type}>
            <img src={film.imageSrc} className="card-img-top" alt={film.titre} />
            <div className="card-body">
                <h5 className="card-title">{film.titre}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{film.categorie}</li>
                </ul>
                <div className="card-body">
                    <Details film={film} />
                </div>
            </div>
        </div>
    );
}

export default Card;
