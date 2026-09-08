# Uso do padrão BEM nos estilos CSS

## 1. O que é BEM

BEM é uma convenção de nomenclatura para classes CSS. O nome vem de:

- **Block**: bloco ou componente independente;
- **Element**: parte interna de um bloco;
- **Modifier**: variação de um bloco ou elemento.

A estrutura básica utilizada neste projeto é:

```text
.block
.block__element
.block--modifier
```

## 2. Block

O Block representa um componente que possui significado próprio na interface.

Exemplo:

```css
.card {
  padding: 24px;
}
```

Uso:

```html
<section class="card"></section>
```

Outros Blocks presentes no projeto incluem:

```text
.app
.card
.sidebar
.controls
.explanation
.mock-root
.page-header
.product-card
.product-list
.level
```

## 3. Element

Um Element representa uma parte que pertence semanticamente a um Block.

A separação é feita com dois sublinhados:

```text
block__element
```

Exemplo:

```css
.card__title {
  font-size: 2rem;
}

.card__text {
  line-height: 1.6;
}
```

Uso:

```html
<section class="card">
  <h2 class="card__title">Título</h2>
  <p class="card__text">Conteúdo do card.</p>
</section>
```

`card__title` informa imediatamente que `title` pertence ao componente `card`.

## 4. Modifier

Um Modifier representa uma variação de estado, aparência ou comportamento.

A separação é feita com dois hífens:

```text
block--modifier
```

Exemplo:

```css
.action-button--primary {
  background-color: #3730a3;
  color: #ffffff;
}
```

Uso:

```html
<button class="action-button action-button--primary">
  Avançar
</button>
```

O Modifier normalmente é usado junto com a classe base.

Outro exemplo:

```html
<p class="level level--success">
  Concluído
</p>
```

## 5. Exemplo completo

```html
<article class="product-card product-card--highlight">
  <h3 class="product-card__title">
    Produto Premium
  </h3>

  <p class="product-card__description">
    Descrição do produto.
  </p>

  <p class="product-card__price">
    R$ 99,00
  </p>
</article>
```

Neste exemplo:

```text
product-card
```

é o **Block**;

```text
product-card__title
product-card__description
product-card__price
```

são **Elements**;

```text
product-card--highlight
```

é um **Modifier**.

## 6. Por que utilizar BEM

O padrão ajuda a tornar o CSS mais previsível e reduz conflitos de nomes. Também permite identificar, pelo próprio nome da classe, a qual componente determinada regra pertence.

Por exemplo:

```css
.product-card__title
```

é mais específico semanticamente do que uma classe genérica como:

```css
.title
```

Em aplicações React, isso facilita a correspondência entre os componentes `.tsx` e seus estilos.

Uma organização possível é:

```text
components/
  ProductCard.tsx

styles/
  product-card.css
```

## 7. Regra prática utilizada neste projeto

Para novos componentes, utilizar preferencialmente:

```text
.nome-do-bloco
.nome-do-bloco__elemento
.nome-do-bloco--modificador
```

Exemplo:

```css
.user-profile {}
.user-profile__name {}
.user-profile__avatar {}
.user-profile--compact {}
```

Uso em React:

```tsx
<div className="user-profile user-profile--compact">
  <img className="user-profile__avatar" />
  <p className="user-profile__name">Maria</p>
</div>
```

## 8. O que não precisa seguir BEM

Seletores globais não precisam utilizar BEM:

```css
*
body
html
code
```

Também podem existir classes estruturais ou utilitárias quando isso fizer sentido. O importante é não transformar BEM em uma regra artificial: ele deve ser utilizado principalmente para tornar componentes e suas relações mais claras.

## 9. Importação dos estilos

Todos os arquivos são reunidos por:

```css
/* styles/index.css */
@import "./global.css";
@import "./app.css";
/* ... */
```

No React, basta importar:

```tsx
import "./styles/index.css";
```

Dessa forma, os componentes utilizam as classes BEM normalmente por meio de `className`.
