import React, { Component } from 'react';
import NavBar from '../../Components/navBar';
import Sobre from '../../Components/sobre';
import Cards from '../../Components/cards';
import Footer from '../../Components/footer';
import imgNav from '../../img/imgNav.jpg';
import imgSobre from '../../img/planeta-terra.svg';
import imgCard1 from '../../img/img_cards/telefones1ecoponto.jpg';
import imgCard2 from '../../img/img_cards/telefones2estacoes.jpg';
import imgCard3 from '../../img/img_cards/telefones3ministerio.jpg';
import './linksUteis.css';

class LinksUteis extends Component {
    constructor() {
        super();

        this.state = {}
    }
    render() {
        return (
            <>
                <NavBar
                    imgNav={imgNav}
                    textoImgNav="imagem de perfil de pessoa na cor verde"
                    textoImgLogoReciclartexto="Imagem do logo da Reclicar Bem Reciclar Já"
                />
                <main>

                    <Sobre
                        imgSobre={imgSobre}
                        titulo="Links Úteis"
                        texto="Aqui você encontrará alguns links para Ecopontos na em divresas regiões de São Paulo, estações de reciclagem e link para o Ministério do Meio Ambiente. Você sabia que hoje vários supermercados e hipermercados possuem estações de recilcagem para coleta de pilhas, lâmpadas e até óleo de cozinha."
                        textoImg="imagem do planeta verde"
                    />

                    <section className="secaoCards">

                        <Cards
                            src={imgCard1}
                            alt="Image com circulo verde, escrito Ecoponto e símbolo amarelo e verde de reciclagem"
                            tituloCard="Encontre aqui endereço do EcoPonto mais próximo de você"
                            texto="Você sabia que há um limite para descartes nos Ecopontos? Saiba mais no telefone (informações: 0800 7777 156), assim como o horário de funcionamento e muito mais no link Saiba mais."
                            href="https://saopaulosao.com.br/conteudos/outros/1679-saiba-o-que-descartar-nos-90-ecopontos-de-sao-paulo.html#"
                            height="300"
                        />
                        <Cards
                            src={imgCard2}
                            alt="Imagem de 4 lixeiras coloridas com simbolo de reciclagem"
                            tituloCard="Estações de reciclagem"
                            texto="Busque telefones e endereços de estações de reciclagem. Existem também estações de recliclagem em muitos supermercados, que coletam óleo de cozinha lâmpadas, garrafas de bebidas e etc, façauma busca e saiba mais."
                            href="https://www.zapmeta.com.br/?vid=l1792091185I1595521808&bkw=n&template=&asid=br_gc5_02&awc=zmbr&ac=1847&de=c&nwc=&suggest=1&q=coleta+de+material+reciclavel"
                            height="300" 
                        />
                        <Cards
                            src={imgCard3}
                            alt="Imagem com o nome do Ministério do Meio Ambiente, Governo Federal Brasil"
                            tituloCard="Ministério do Meio Ambiente"
                            texto="Nesse link você vai conhecer um pouco mais os programas do Ministério do Meio Ambiente, como educação ambiental, cerrado sustentável e atendimento ao cidadão, dentre outras informações."
                            href="https://www.mma.gov.br/"
                            height="300"
                        />

                    </section>
                </main>
                <Footer
                    textoFooter="© 2020 Produzido por Sindi Raimundo da Silva enquanto aluna da {reprograma}. Todos os direitos reservados." />

            </>
        )
    }
}

export default LinksUteis;