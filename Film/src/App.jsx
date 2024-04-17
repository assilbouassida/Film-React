import React from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import Heder  from './components/Heder';
import Footer from './components/Footer';
import {info} from "./components/info.jsx"
function App() {
  

  return (
    <>
    <div  >
      <Nav />
      </div>
      <div  >
      <Heder
      imageSrc1="./src/assets/film1.jpeg" 
      imageSrc2="./src/assets/film2.jpeg"
      imageSrc3="./src/assets/film3.jpeg"
      />
      </div>
      <div className="container overflow-hidden text-center">
      <div class="row gy-5">
      {info.map((film) => (<Card key={film.id} film={film} /> ))}
     </div>
     </div>


<div>
  <Footer/>
</div>
    
    </>
  )
}

export default App;
