# Welcome to UiMui 👋
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)


Тема для [material-ui](https://material-ui.com/), делающая компоненты похожими на [Контур гайды](https://guides.kontur.ru/)

## Установка

```sh
npm install @anissoft/uimui --save
```

## Компоненты

Все стили пишутся по мере необходимости, поэтому если вам не хватает реализации какого-нибудь компонента - [велкам](https://github.com/Anissoft/ui-mui/issues)

- Button
- TextField (только variant="standard")

> Поддерживается только плоская тема!

## Использование

```js
import React from 'react';
import ReactDOM from 'react-dom';
import uimuize from '@anissoft/uimui';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';

const myTheme = {
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
};

ReactDOM.render(
  <ThemeProvider theme={uimuize(myTheme)}>
    <App/>
  </ThemeProvider>,
  document.getElementById('root'),
);
```

## Автор

👤 **Alexey Anisimov**

* Github: [@Anissoft](https://github.com/Anissoft)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/Anissoft/ui-mui/issues). 

## Show your support

Give a ⭐️ if this project helped you!
