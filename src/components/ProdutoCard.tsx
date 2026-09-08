/**************************
data/ProdutoCard.tsx
***************************/

import type { Produto } from "../data/produtos";

type ProdutoCardProps = {
  produto: Produto;
  destacado?: boolean;
};

export function ProdutoCard({ produto, destacado = false }: Readonly<ProdutoCardProps>) {
  return (
    <article className={destacado ? "product-card product-card--highlight" : "product-card"}>
      <p className="level level--success">Nível 3</p>

      <h4 className="product-card__title">{produto.nome}</h4>

      <p className="product-card__description">{produto.descricao}</p>

      <p className="product-card__price">
        {produto.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </article>
  );
}