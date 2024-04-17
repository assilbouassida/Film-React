import { useState } from "react";

function Details({ film }) {
    const { type, duree, date } = film;
    const [isDetailsVisible, changeState] = useState(false);

    return (
        <>
            {isDetailsVisible && (
                <ul className="list-group">
                    <li className="list-group-item"><strong>Type: {type}</strong></li>
                    <li className="list-group-item"><strong>Durée: {duree}</strong></li>
                    <li className="list-group-item"><strong>Date: {date}</strong></li>
                </ul>
            )}
            <button className="btn btn-outline-primary" onClick={() => changeState(!isDetailsVisible)}>
                {isDetailsVisible ? "Cacher Détails" : "Afficher Détails"}
            </button>
        </>
    );
}

export default Details;
