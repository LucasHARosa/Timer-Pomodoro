## Escrevendo o css em javaScript

```sh
    $ npm i styled-components
    $ npm i @types/styled-components -D 
```

Nesse caso a estilização será feita por um arquivo javaScript, ou melhor, nesse caso será typescript. De forma que o botão é estilizado e acordo com o atributo passado

* Nome do componente: Button.tsx
* Nome da estilização: Button.styles.ts

```ts
```
```ts
//Arquivo de estilização
import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}
//O props vai puxar todos os atributos derivados da chamada do componente
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }}
`;
```
```ts
//Arquivo do componente
import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
```

## Configurando temas

É possível estilizar o componente dependendo do tipo de argumento é passado para ele como o tema

```ts
//Arquivo do componente
import { ThemeProvider } from "styled-components";
import { Button } from './components/Button';
import { defaultTheme } from "./styles/themes/default";
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
    </ThemeProvider>
    
  )
}
```
```ts
//Arquivo da estilização
import styled from "styled-components";

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  
`;
```
## Adicionando nossas configurações de estilo globalmente

Uma forma de sobrescrever os estilos ao nosso gosto é primeiro criar um arquivo com nossos gostos, depois criar um arquivo para importar essas atualizações e sobrescrever no padrão. Exemplo:

```ts
//arquivo: src/styles/themes/default.ts
export const defaultTheme = {
    white: '#FFF',
    'gray-100': '#E1E1E6',
}
```
```ts
//arquivo: src/@types/styled.d.ts
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
```

## Validando que o estilo do codigo está igual para todas

Se trata de uma ferramenta que tem como objetivo arrumar a codagem par aum padrão especifico
```sh
    $ npm i eslint -D
    $ npm i @rocketseat/eslint-config -D 
```
Criar pasta .eslintrc.json

Para ver todos os erros

```sh
    $ npx eslint src --ext .ts,.tsx  
```
Para arrumar todos os erros:
```sh
    $ npx eslint src --ext .ts,.tsx --fix 
```
Arrumar o json para rodar com o comando "npm run lint"

## Lidando com rotas

react router dom

```sh
    $ npm i react-router-dom 
```
 
 ## Biblioteca de icones

Aula 11 Finalizando Sidebar - A biblioteca de imagens é a https://phosphoricons.com/

```sh
    $ npm i phosphor-react
```
    