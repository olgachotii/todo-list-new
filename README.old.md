# Создание и настройка React-App

## 1. Создать репозиторий и склонировать на ПК

## 2. Установить React application

Открыть терминал в папке проекта и установить `react-app`

```powershell
npx create-react-app .
```

или

```powershell
npx create-react-app my-app
cd my-app
npm start
```

## 3. Удалить ненужные файлы

### 3.1 `public/index.html`

В папке `public` оставить только `index.html`. Удалить код из `index.html`,
создать базовую разметку с помощью Emmet.

Разметка может выглядеть так:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 3.2 `/src`

В папке `/src` достаточно оставить `index.js`, `App.js`, `index.css`, `App.css`

В папке `/src` создать папку `components` для размещения будущих компонентов.

### 3.3 `index.js`

В `index.js` достаточно оставить следующий код:

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

### 3.4 `App.js`

В `App.js` достаточно оставить следующий код:

```js
// App.js
import "./App.css";

function App() {
  return <div className="App">TEST</div>;
}

export default App;
```

### 3.4 `App.css`

В `App.css` удалить ненужные стили.

## 4. Запустить сервер проверить, нет ли ошибкок.

```powershell
npm start
```

## 5. Настройка pre-commit хуков

### 5.1 Установка зависимостей

Установить в проект следующие пакеты.

`Примечание:` react-app корректно работает с более старой версией
`eslint 7.11.0`

```powershell
npm install --save-dev prettier eslint@7.11.0
```

### 5.2 Инициализация lint-staged и husky

Пользователям `MacOS` и `Linux` систем необходимо выполнить в терминале
следующую команду. Она установит и настроит husky и lint-staged в зависимости от
инструментов качества кода из зависимостей проекта в package.json.

```powershell
npx mrm lint-staged
```

Пользователям `Windows` необходимо выполнить следующую команду. Она делает тоже
самое.

```powershell
npx mrm@2 lint-staged
```

### 5.3 Настройка в VSCode

Провреить наличие следующих раширений:

`Prettier - Code formatter`

`Formatting Toggle`

`ESLint`

Можно добавить настройки `Prettier`, создав файл `.prettierrc.yaml` в корневой
папке проекта. Можно добавить следующие настройки.

```yaml
printWidth: 100
useTabs: false
semi: true
singleQuote: true
trailingComma: "all"
bracketSpacing: true
arrowParens: "avoid"
proseWrap: "always"
```

Открыть настройки `VSCode` и проверить следующее:

`autoSave`

![Превью настроек VSCode](./README/1.png)

`formatOnSave`

![Превью настроек VSCode](./README/2.png)

`codeActionsOnSave`

![Превью настроек VSCode](./README/3.png)

Или же добавить код в файл `settings.json`

`Ctrl + Shift + P` => `settings.json` => `Open Settings (JSON)`

```json
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

Набрать на клавиатуре сочетание клавиш CTRL + SHIFT + P

Выполните в палитре команд поиск по ключевому слову format и выберите Format Document.

Затем выберите Prettier - Code Formatter.

## 6. Настройка Деплоя

[Ссылка на create-react-app](https://create-react-app.dev/docs/deployment#github-pages)

В `package.json` добавить следующию строку:

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

Сделать билд через терминал:

```powershell
npm run build
```

Установить пакет `gh-pages`

```powershell
npm install --save gh-pages
```

В `package.json` в `scripts` добавить 2 скрипта:

```json
  "scripts":
    // добавить к остальным скриптам
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```

Запустить деплой

```powershell
npm run deploy
```

Скрипт `predeploy` запускать не нужно, он выполнится автоматически. Будет
создана ветка `gh-pages`, выполнен автоккоммит и её пуш в ваш репозиторий на
GitHub.сom, в настройках GitHub Pages автоматически будет подставлена ветка
`gh-pages`, достаточно взять ссылку. Сам проект как обычно коммитим, пушим,
чтобы код отразился в ветке `main`.

## Інструменти розробника

[React DevTools](http://fecore.net.ua/books/rq7s2k-react/lesson-01/#react-devtools)

# Дополнительные пакеты

## 1. Пакет prop-types

[](https://www.npmjs.com/package/prop-types)

```powershell
npm i prop-types
```

```js
import PropTypes from "prop-types";

MyComponent.propTypes = {
  optionalArray: PropTypes.array,
  optionalBigInt: PropTypes.bigint,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
};
```

можливо встановити extensions VS Code ES7+ React/Redux/React-Native/JS snippets

- скорочуе написання propTypes (та не тільки) по типу :

```js
pta→	PropTypes.array
ptar→	PropTypes.array.isRequired
ptb→	PropTypes.bool
```

[документація](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)

## 2. React Icons

- [react-icons](https://react-icons.github.io/react-icons/)

```powershell
npm install react-icons --save
```

```js
import { FaBeer } from "react-icons/fa";

class Question extends React.Component {
  render() {
    return (
      <h3>
        Lets go for a <FaBeer />?
      </h3>
    );
  }
}
```

## 3. Date-fns - бібліотека нормолизаціі часу

- [date-fns](https://date-fns.org/)

```powershell
npm install date-fns --save
```

```js
import { format } from "date-fns";
import { uk } from "date-fns/locale"; //якщо треба локилізувати

export const formatEventStart = (start) => {
  return format(Date.parse(start), "dd MMMM yyyy, HH:mm", {
    //якщо треба локилізувати
    locale: ua,
  });
};
```

## 4. Emotion

- [emotion](https://emotion.sh/docs/introduction)

```powershell
npm i @emotion/styled @emotion/react
```

```js
import styled from "@emotion/styled";
```

```js
//изменение цвета по условию:
const setBgColor = (props) => {
  switch (props.eventType) {
    case "free":
      return `var(--color-green)`;
    case "paid":
      return ` var(--color-blue)`;
    case "vip":
      return `var(--color-red)`;

    default:
      return `#000;`;
  }
};

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  color: #fff;

  background-color: ${setBgColor};
`;

<Chip type={eventType}>{type}</Chip>;
```

## 5 classnames біблеотека для динамічного змінення класів:

- [classnames](https://github.com/JedWatson/classnames)

```powershell
npm install classnames
```

-[силка на лекцію](https://www.youtube.com/watch?v=2tPxoJxaCes&t=3420s)

# 1. this.setState - метод изменения сосотояния (state) в React

если нужно изменить `изначальное` состояние state

```js
state = {
  value: 5,
};

handleIncrement = () => {
  this.setState({
    value: 10,
  });
};
```

если нужно изменить `текущее` состояние state

```js
state = {
  value: 5,
};

handleIncrement = () => {
  this.setState((prevState) => {
    return { value: prevState.value + 1 };
  });
};
```
