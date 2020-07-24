import React, { Component } from 'react';
import NavBar from '../../Components/navBar';
import Sobre from '../../Components/sobre';
import Cards from '../../Components/cards';
import Footer from '../../Components/footer';
import imgNav from '../../img/imgNav.jpg';
import imgSobre from '../../img/planeta-terra.svg';
import imgCard1 from '../../img/img_cards/cardhome1lixo.jpg';
import imgCard2 from '../../img/img_cards/cardhome2coresReciclagem.png';
import imgCard3 from '../../img/img_cards/cardhome3medicamentos.png';


import './home.css';

class Home extends Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <main>
                {/* CABEÇALHO */}
                <header className="cabecalho">

                    <NavBar
                        imgNav={imgNav}
                        texto="imagem de perfil de pessoa na cor verde"
                    />

                </header>
                {/* SOBRE */}
                <Sobre
                    imgSobre={imgSobre}
                    titulo="Sobre nós"
                    texto="o Brasil é o 4º país no mundo que mais produz lixo. Nosso objetivo é mostar as pessoas como produzir menos lixo, como reaproveitar e reciclar ao máximo os resíduos que seriam descartados e embalagens que podem ter seu descarte correto, de modo a ter menor impacto ao Meio Ambiente.
                Mostramos aqui links para dicas de como conhecer as cores e significados dos símbolos de reciclagem, afim de ter um direcionamento do descarte correto do lixo que produzimos como por exemplo, você sabe como descartar médicamento vencido? Veja como logo abaixo. 
                Como reaproveitar os resíduos da melhor maneira e ter menor descarte possível, criando briquedos e brincadeiras com produtos recicláveis, criar seu próprio adubo orgânico e hortas orgânicas e sustentáveis, assim como alguns telefones e links uteis de EcoPontos de São Paulo e estações de recliclagem."
                    textoImg="imagem do planeta verde"
                />
                {/* CARDS */}
                <section className="secaoCards">
                    <div>
                        <Cards
                            src={imgCard1}
                            alt="Imagem de lixo espalhado à margem de um rio"
                            tituloCard="Produção de lixo no Brasil"
                            texto="Você sabia que o Brasil é o 4º país no mundo que mais produz lixo. São 11.355.220 toneladas e apenas 1,28% de reciclagem."
                            href="https://agenciabrasil.ebc.com.br/internacional/noticia/2019-03/brasil-e-o-4o-pais-que-mais-produz-lixo-no-mundo-diz-wwf"
                            height="300"
                        />
                    </div>
                    <div>
                        <Cards
                            src={imgCard2}
                            alt="Imagem de lixeiras coloridas representando discarte correto de lixo"
                            tituloCard="Entenda o que são os símbolos de reciclagem"
                            texto="Saiba mais o que representa cada um dos símbolos de reciclagem"
                            href="https://conexaoplaneta.com.br/blog/voce-sabe-o-que-significam-os-simbolos-de-reciclagem/"
                            height="300"
                        />
                    </div>
                    <div>
                        <Cards
                            src={imgCard3}
                            alt="Imagem com texto de descarte de medicamentos, responsabilidade compartilhada"
                            tituloCard="Como descartar medicamentos vencidos"
                            texto="Veja como é o descarte correto de medicamentos vencidos, entenda o porque não podemos realizar o descarte juntamente com o lixo doméstico"
                            href="https://www.ecycle.com.br/149-descarte-de-medicamentos"
                            height="300"
                        />
                    </div>
                </section>

                {/* FOOTER */}
                <Footer
                    textoFooter="© 2020 Produzido por Sindi Raimundo da Silva enquanto aluna da {reprograma}. Todos os direitos reservados." />
            </main>
        )

    }
}


export default Home;