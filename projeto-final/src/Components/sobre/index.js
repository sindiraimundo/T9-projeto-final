import React from 'react';
import './sobre.css';


const sobre = ({titulo, texto, imgSobre, textoImg}) => {
    return(
        <section className="sobreCaixa">
            <div className="imgDivSobre">
                <img className="imgSobre" src={imgSobre} alt={textoImg}/>
            </div>
            <div className="sobreTexto"> 
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>

        </section>
    )
}

export default sobre;