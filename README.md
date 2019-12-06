# Welcome to UiMui 👋
![Version](https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)


Тема для [material-ui](https://material-ui.com/), делающая компоненты похожими на [Контур гайды](https://guides.kontur.ru/)

## Установка

```sh
npm install @anissoft/uimui
```

## Использование

```js
import React from 'react';
import ReactDOM from 'react-dom';
import KonturTheme from '@anissoft/uimui';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={KonturTheme}>
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
