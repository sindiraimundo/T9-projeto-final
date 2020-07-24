import React, { Component } from 'react';
import NavBar from '../../Components/navBar';
import Sobre from '../../Components/sobre';
import Cards from '../../Components/cards';
import Footer from '../../Components/footer';
import imgNav from '../../img/imgNav.jpg';
import imgSobre from '../../img/planeta-terra.svg';
import imgCard1 from '../../img/img_cards/brincadeira1cobra.jpg';
import imgCard2 from '../../img/img_cards/brincadeira2dama.jpg';
import imgCard3 from '../../img/img_cards/brincadeira3artesanato.jpg';
import './reciclar-criarBrincando.css';

class CriarBrincando extends Component {
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
                    titulo="Reciclar e Criar Brincando"
                    texto="Já pensou quantas coisa podem ser criadas com materiais que eventualmente seriam descartados. Podemos criar brinquedos, brincadeiras e artesanatos de diversas maneira diferentes. Já pensoou que muitas pessoas têm sua renda provida do material reciclável, aproveite e veja algumas idéias sugeridas abaixo e mãos na massa divirta-se."
                    textoImg="imagem do planeta verde"
                />
                {/* CARDS */}
                <section className="secaoCards">
                    <div>
                        <Cards
                            src={imgCard1}
                            alt="Foto de minhoca de tampa de garrafa pet colorida"
                            tituloCard="Criando minhoca com tampinhas Pet"
                            texto="Compartilhe a experiência de criar brinquedos recicláveis com seu pequeno ou pequena. Aproveite para se divertirem juntos."
                            href="https://youtu.be/oFB1IdBtQME"
                            height="300"
                        />
                    </div>
                    <div>
                        <Cards
                            src={imgCard2}
                            alt="Foto de jogo de dama com tampas de garrafa pet"
                            tituloCard="Brincadeiras e Jogos com produtos recicláveis"
                            texto="Aprenda a fazer jogos divertidos com papelão e outros materiais, divirta-se ajudando o meio ambiente"
                            href="https://youtu.be/ATZSdQkoA4A"
                            height="300"
                        />
                    </div>
                    <div>
                        <Cards
                            src={imgCard3}
                            alt="Foto de porta caneta com 3 entradas, feito com garrafa pet verde"
                            tituloCard="Artesanato com produtos recilavéis"
                            texto="Nesse vídeo você pode aprender diversa forma de como reutilizar embalagens que poderiam ser descartadas e quem sabe até criar uma fonte de renda sustentável."
                            href="https://youtu.be/8uNQZdcZ2u8"
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

export default CriarBrincando;