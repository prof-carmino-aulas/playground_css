/**************************
data/ListaProdutos.tsx
***************************/

import type { Produto } from "../data/produtos";
import { ProdutoCard } from "./ProdutoCard";

type ListaProdutosProps = {
    produtos: Produto[];
    mostrarCards?: boolean;
    limiteCards?: number;
    destacarUltimoCard?: boolean;
};

export function ListaProdutos({
    produtos,
    mostrarCards = true,
    limiteCards = produtos.length,
    destacarUltimoCard = false,
}: Readonly<ListaProdutosProps>) {
    const produtosVisiveis = produtos.slice(0, limiteCards);

    return (
        <section className="product-list">
            <div className="product-list__intro">
                <p className="level level--primary">Nível 2</p>

                <h3 className="product-list__title">Lista de Produtos</h3>

                <p className="card__text">
                    O componente <code>ListaProdutos</code> recebe um conjunto de dados por
                    propriedade e usa <code>map</code> para renderizar um{" "}
                    <code>ProdutoCard</code> para cada item visível.
                </p>
            </div>

            {mostrarCards ? (
                <div className="product-list__grid">
                    {produtosVisiveis.map((produto, indice) => (
                        <ProdutoCard
                            key={produto.id}
                            produto={produto}
                            destacado={destacarUltimoCard && indice === produtosVisiveis.length - 1}
                        />
                    ))}
                </div>
            ) : (
                <div className="product-list__grid">
                    {produtos.map((produto) => (
                        <div className="mock-root" key={produto.id}>
                            <p className="mock-root__label">ProdutoCard</p>
                            <div className="mock-root__box">
                                Card de {produto.nome} ainda não expandido
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}