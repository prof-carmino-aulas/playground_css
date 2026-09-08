/**************************
data/produtos.ts
***************************/

export type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
};

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Notebook",
    descricao: "Equipamento para estudo, programação e produção acadêmica.",
    preco: 3500,
  },
  {
    id: 2,
    nome: "Mouse",
    descricao: "Dispositivo de entrada usado para interação com a interface.",
    preco: 80,
  },
  {
    id: 3,
    nome: "Teclado",
    descricao: "Periférico utilizado para digitação e comandos no sistema.",
    preco: 150,
  },
];