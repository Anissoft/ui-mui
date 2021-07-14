import { ThemeProvider } from '@material-ui/core/styles'
import uimuize from '../src/index';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (story) => (
    <ThemeProvider theme={uimuize()}>{story()}</ThemeProvider>
  )
];
