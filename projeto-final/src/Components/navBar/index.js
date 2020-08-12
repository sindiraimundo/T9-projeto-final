import React from 'react';
import imgLogoReciclar from '../../img/logo.png';
import './navBar.css';

const navBar = ({imgNav, textoImgNav, textoImgLogoReciclar}) => {
    return (
        <header className="cabecalho">
            <div className="navBar">
                
                    <img className="logoPrincipal" src={imgNav} alt={textoImgNav}/>
                
                <div className="navCaixa">
                    <img className="navLogoReciclar" src={imgLogoReciclar} alt={textoImgLogoReciclar}/>
                    <nav className="navMenu">
                        <ul className="navLista">
                            <li><a href="/">INÍCIO</a></li>
                            <li><a href="/reciclar-e-criar-brincando">RECICLAR E CRIAR BRINCANDO</a></li>
                            <li><a href="/hortas-reciclar">HORTAS RECICLAR</a></li>
                            <li><a href="/links-uteis">LINKS ÚTEIS</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default navBar;