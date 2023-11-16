
import { useRef, useEffect, useState } from "react";

import HTMLFlipBook from "react-pageflip";

import Portada from '../../assets/img/portada.png'
import Pagina1 from '../../assets/img/pagina-1.gif'
import Pagina2 from '../../assets/img/pagina-2.gif'
import Pagina3 from '../../assets/img/pagina-3.png'
import Pagina4 from '../../assets/img/pagina-4.gif'
import Pagina5 from '../../assets/img/pagina-5.gif'
import Pagina6 from '../../assets/img/pagina-6.gif'
import Sinopsis from '../../assets/img/sinopsis.gif'

import Cancion from '../../assets/img/cancion.mp3'

function Libro() {
  const book = useRef();
  const paginas = [
    Portada,
    Pagina1,
    Pagina2,
    Pagina3,
    Pagina4,
    Pagina5,
    Pagina6,
    Sinopsis
  ]

  return (
    <div>
      <HTMLFlipBook
        width={323} 
        height={462} 
        flippingTime={1500}
        showCover
        ref={book}
      >
        {
          paginas.map((pagina, index) => 
            <div className="paginas" key={index}>
              <img className="imagen" src={pagina} alt="" />
            </div>
          )
        }
      </HTMLFlipBook>
      <audio style={{marginTop: 100}} id='cancion' src={Cancion} controls></audio>
    </div>
  )
}

export default Libro