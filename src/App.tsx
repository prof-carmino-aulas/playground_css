/**************************
App.tsx
***************************/

import { useState } from "react";
import { produtos } from "./data/produtos";
import { RenderizacaoPorEtapa } from "./components/RenderizacaoPorEtapa";
import "./styles/index.css";

export default function App() {
  const [etapa, setEtapa] = useState(0);
  const [quantidadeCards, setQuantidadeCards] = useState(1);

  function selecionarEtapa(novaEtapa: number) {
    setEtapa(novaEtapa);

    if (novaEtapa === 5) {
      setQuantidadeCards(1);
    }
  }

  function renderizarProximoCard() {
    setQuantidadeCards((quantidadeAtual) => {
      if (quantidadeAtual >= produtos.length) {
        return produtos.length;
      }

      return quantidadeAtual + 1;
    });
  }

  function reiniciarCards() {
    setQuantidadeCards(1);
  }

  return (
    <main className="app">
      <div className="app__container">
        <section className="card">
          <h1 className="card__title">
            Playground: renderização por níveis no React
          </h1>

          <p className="card__text">
            Use os botões laterais para visualizar como a interface é construída
            progressivamente: raiz da aplicação, página, lista, cards finais e
            cards renderizados um a um.
          </p>
        </section>

        <div className="layout">
          <aside className="sidebar">
            <h2 className="sidebar__title">Etapas da renderização</h2>

            <p className="sidebar__text">
              Cada botão mostra uma etapa da árvore de componentes.
            </p>

            <div className="steps">
              <button
                className={etapa === 0 ? "step-button step-button--active" : "step-button"}
                onClick={() => selecionarEtapa(0)}
              >
                0. Árvore conceitual
              </button>

              <button
                className={etapa === 1 ? "step-button step-button--active" : "step-button"}
                onClick={() => selecionarEtapa(1)}
              >
                1. Raiz React
              </button>

              <button
                className={etapa === 2 ? "step-button step-button--active" : "step-button"}
                onClick={() => selecionarEtapa(2)}
              >
                2. Página
              </button>

              <button
                className={etapa === 3 ? "step-button step-button--active" : "step-button"}
                onClick={() => selecionarEtapa(3)}
              >
                3. Lista
              </button>

              <button
                className={etapa === 4 ? "step-button step-button--active" : "step-button"}
                onClick={() => selecionarEtapa(4)}
              >
                4. Cards finais
              </button>

              <button
                className={etapa === 5 ? "step-button step-button--active" : "step-button"}
                onClick={() => selecionarEtapa(5)}
              >
                5. Cards um a um
              </button>
            </div>
          </aside>

          <section className="preview">
            <RenderizacaoPorEtapa
              etapa={etapa}
              quantidadeCards={quantidadeCards}
              onProximoCard={renderizarProximoCard}
              onReiniciarCards={reiniciarCards}
            />
          </section>
        </div>
      </div>
    </main>
  );
}