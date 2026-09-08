/*****************************
data/RenderizacaoPorEtapa.tsx
*****************************/

import { produtos } from "../data/produtos";
import { PaginaProdutos } from "./PaginaProdutos";
import arvoreProdutos from "../assets/arvore-produtos.png";

type RenderizacaoPorEtapaProps = {
    etapa: number;
    quantidadeCards: number;
    onProximoCard: () => void;
    onReiniciarCards: () => void;
};

export function RenderizacaoPorEtapa({
    etapa,
    quantidadeCards,
    onProximoCard,
    onReiniciarCards,
}: Readonly<RenderizacaoPorEtapaProps>) {
    if (etapa === 0) {
        return (
            <section className="card">
                <div className="explanation">
                    <h2 className="explanation__title">Árvore conceitual</h2>
                    <p className="explanation__text">
                        Antes da renderização visual, a interface pode ser compreendida como
                        uma árvore de componentes. Essa árvore mostra quais componentes
                        dependem de outros componentes.
                    </p>
                </div>

                <h2 className="section-title">Árvore de componentes</h2>
                
                <img
                    className="mock__image"
                    src={arvoreProdutos}
                    alt="Hierarquia de componentes: App, PaginaProdutos, ListaProdutos e ProdutoCard"
                />
            </section>
        );
    }

    if (etapa === 1) {
        return (
            <section className="card">
                <div className="explanation">
                    <h2 className="explanation__title">Etapa 1: raiz React</h2>
                    <p className="explanation__text">
                        O React começa a aplicação a partir de uma raiz. Em um projeto real,
                        essa raiz é criada com <code>createRoot</code> e ligada a um elemento
                        HTML, normalmente <code>div id="root"</code>.
                    </p>
                </div>

                <div className="mock-root">
                    <p className="mock-root__label">DOM do navegador</p>
                    <div className="mock-root__box">
                        &lt;div id="root"&gt; Aplicação React será renderizada aqui &lt;/div&gt;
                    </div>
                </div>
            </section>
        );
    }

    if (etapa === 2) {
        return (
            <section className="card">
                <div className="explanation">
                    <h2 className="explanation__title">Etapa 2: renderização da página</h2>
                    <p className="explanation__text">
                        O componente <code>App</code> renderiza o componente{" "}
                        <code>PaginaProdutos</code>. Neste momento, aparece a estrutura
                        principal da página, mas a lista detalhada ainda não foi exibida.
                    </p>
                </div>

                <PaginaProdutos mostrarLista={false} />
            </section>
        );
    }

    if (etapa === 3) {
        return (
            <section className="card">
                <div className="explanation">
                    <h2 className="explanation__title">Etapa 3: renderização da lista</h2>
                    <p className="explanation__text">
                        O componente <code>PaginaProdutos</code> passa os dados para{" "}
                        <code>ListaProdutos</code>. A lista já aparece, mas os cards ainda
                        são representados de forma conceitual.
                    </p>
                </div>

                <PaginaProdutos mostrarLista={true} mostrarCards={false} />
            </section>
        );
    }

    if (etapa === 4) {
        return (
            <section className="card">
                <div className="explanation">
                    <h2 className="explanation__title">Etapa 4: renderização dos cards finais</h2>
                    <p className="explanation__text">
                        O componente <code>ListaProdutos</code> usa <code>map</code> para
                        renderizar um <code>ProdutoCard</code> para cada produto. Esta é a
                        interface final visível ao usuário.
                    </p>
                </div>

                <PaginaProdutos mostrarLista={true} mostrarCards={true} />
            </section>
        );
    }

    return (
        <section className="card">
            <div className="explanation">
                <h2 className="explanation__title">Etapa 5: cards renderizados um a um</h2>
                <p className="explanation__text">
                    Esta etapa simula mudanças incrementais na interface. A cada clique, o
                    estado muda e a lista passa a conter mais um card. O React recalcula a
                    interface necessária e atualiza no DOM apenas as diferenças observadas
                    pela reconciliação.
                </p>
            </div>

            <div className="controls">
                <p className="controls__text">
                    Cards visíveis: {quantidadeCards} de {produtos.length}
                </p>

                <div className="controls__actions">
                    <button
                        className="action-button action-button--primary"
                        onClick={onProximoCard}
                        disabled={quantidadeCards >= produtos.length}
                    >
                        Renderizar próximo card
                    </button>

                    <button
                        className="action-button action-button--secondary"
                        onClick={onReiniciarCards}
                    >
                        Reiniciar
                    </button>
                </div>
            </div>

            <PaginaProdutos
                mostrarLista={true}
                mostrarCards={true}
                limiteCards={quantidadeCards}
                destacarUltimoCard={true}
            />
        </section>
    );
}