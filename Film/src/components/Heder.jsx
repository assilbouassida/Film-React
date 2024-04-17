import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Heder(props) {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={props.imageSrc1} className="d-block w-100" alt="First slide" style={{ height: '600px' }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Film</h5>
            
          </div>
        </div>
        <div className="carousel-item">
          <img src={props.imageSrc2} className="d-block w-100" alt="Second slide" style={{ height: '600px' }}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Film</h5>
            
          </div>
        </div>
        <div className="carousel-item">
          <img src={props.imageSrc3} className="d-block w-100" alt="Third slide" style={{ height: '600px' }}/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Film</h5>
            
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Heder;
