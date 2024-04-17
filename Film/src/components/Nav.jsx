import React from 'react'

function Nav() {

    const Click = (category) => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {const film = card.getAttribute('category');
          if (category === 'all' || film === category) {
            card.style.display = ''; 
          } else {
            card.style.display = 'none'; 
          }
        });9
      };


      const ClickType = (type) => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {const film = card.getAttribute('type');
          if ( film === type) {
            card.style.display = ''; 
          } else {
            card.style.display = 'none'; 
          }
        });
      };
      

return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ASSIL-FILM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={() => Click('all')}>Accueil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => ClickType('serie')}>Série</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => ClickType('film')}>Film</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorie
          </a>
          <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => Click('imagination')}>Imagination</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => Click('action')}>Action</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => Click('all')}>All</a></li>
              </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</>
)
}
export default Nav;