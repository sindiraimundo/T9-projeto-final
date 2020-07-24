import React, { Component } from 'react';
import NavBar from '../../Components/navBar';
import Sobre from '../../Components/sobre';
import Cards from '../../Components/cards';
import Footer from '../../Components/footer';
import imgNav from '../../img/imgNav.jpg';
import imgSobre from '../../img/planeta-terra.svg';
import imgCard1 from '../../img/img_cards/horta1plantando.jpg';
import imgCard2 from '../../img/img_cards/horta2adubo.jpg';
import imgCard3 from '../../img/img_cards/horta3hortas.jpg';
import './hortas.css';

class Hortas extends Component {
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
                    titulo="Hortas Reciclar"
                    texto="Grande parte do lixo que produzimos, podemos reaproveitar, como por exemplo o lixo orgânico. Já pensou em produzir seu próprio adubo orgânico, utilizando casca de frutas, ovos entre outras coisa que seriam descartasdas e ainda poder montar sua horta sustentável e cultivar temperos, ervas, frutos e moito mais, separamos algumas dicas para que você embarque nessa terapia sustentável, aproveite as idéias e coloque sua criatividade a prova."
                    textoImg="imagem do planeta verde"
                />
                {/* CARDS */}
                <section className="secaoCards">
                    <div>
                        <Cards
                            src={imgCard1}
                            alt="Foto de pai e filho plantando"
                            tituloCard="Monte sua composteira"
                            texto=" Com a compostagem doméstica, esses resíduos são transformados em excelente adubo para suas plantas.Aprenda a montar sua própria composteira com garrafa pets"
                            href="https://youtu.be/zMLnAT1VYvQ"
                        />
                    </div>
                    <div>
                        <Cards
                            src={imgCard2}
                            alt="Foto de balde preto com folhas e restos de alimentos para adudo"
                            tituloCard="Como produzir seu próprio adubo Orgânico"
                            texto="Já pensou em reaproveitar o lixo orgânico e ainda produzir seu proprio adubo orgânico, leia mais sobre no link Saiba mais"
                            href="https://ciclovivo.com.br/vida-sustentavel/bem-estar/aprenda-a-usar-corretamente-o-lixo-organico-como-adubo-caseiro/"
                        />
                    </div>
                    <div>
                        <Cards
                            src={imgCard3}
                            alt="Conjunto de três fotos de hortas feitas com garrafas pets, plantas dentro das garrafas"
                            tituloCard="Faça sua própria horta sustentável"
                            texto="Reparou que podemos fazer várias coisas utilizando garrafas pets. Aprenda a plantar tomate invertido em garrafas pets, veja dicas de como é a melhor forma."
                            href="https://youtu.be/xQIPOCs4Ryk"
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

export default Hortas;