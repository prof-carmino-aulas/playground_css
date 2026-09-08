/**************************
data/PaginaProdutos.tsx
***************************/

import { produtos } from "../data/produtos";
import { ListaProdutos } from "./ListaProdutos";

type PaginaProdutosProps = {
    mostrarLista?: boolean;
    mostrarCards?: boolean;
    limiteCards?: number;
    destacarUltimoCard?: boolean;
};

export function PaginaProdutos({
    mostrarLista = true,
    mostrarCards = true,
    limiteCards = produtos.length,
    destacarUltimoCard = false,
}: Readonly<PaginaProdutosProps>) {
    return (
        <section>
            <header className="page-header">
                <p className="level level--primary">Nível 1</p>

                <h2 className="page-header__title">Página de Produtos</h2>

                <p className="card__text">
                    O componente <code>PaginaProdutos</code> representa uma área maior da
                    interface. Ele organiza o título da página e pode delegar a exibição
                    dos produtos ao componente <code>ListaProdutos</code>.
                </p>
            </header>

            {mostrarLista ? (
                <ListaProdutos
                    produtos={produtos}
                    mostrarCards={mostrarCards}
                    limiteCards={limiteCards}
                    destacarUltimoCard={destacarUltimoCard}
                />
            ) : (
                <div className="mock-root mock-root--spaced">
                    <p className="mock-root__label">Próximo componente</p>
                    <div className="mock-root__box">
                        ListaProdutos ainda não renderizado nesta etapa
                    </div>
                </div>
            )}
        </section>
    );
}