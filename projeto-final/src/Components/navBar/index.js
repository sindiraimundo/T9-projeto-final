import React from 'react';
import imgLogoReciclar from '../../img/logo.png';
import './navBar.css';

const navBar = ({imgNav, texto}) => {
    return (
        <div className="navBar">
            <div className="navBar__image">
                <img className="logoPrincipal" src={imgNav} alt={texto}/>
            </div>
            <div className="navCaixa">
                <h1 className="navLogoReciclar"><img src={imgLogoReciclar}/></h1>
                <nav className="navMenu">
                    <ul className="navLista">
                        <li><a href="/">INÍCIO</a></li>
                        <li><a href="/reciclar-e-criar-brincando">RECICLAR E CRIAR BRINCANDO</a></li>
                        <li><a href="/hortas-reciclar">HORTAS RECICLAR</a></li>
                        <li><a href="/telefones-uteis">LINKS ÚTEIS</a></li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default navBar;