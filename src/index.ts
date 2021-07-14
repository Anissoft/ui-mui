import createMuiTheme, { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';

import deepMerge from './utils';
import { typography } from './typography';

export default (preset?: ThemeOptions, {
  shadow = false,
} = {}): Theme => {
  // const theme = createMuiTheme(preset);
  const enhanced: ThemeOptions = {
    palette: {
      secondary: {
        main: '#336fee',
      },
      primary: {
        main: '#ffdd2c',
      },
    },
    typography: typography,
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  };

  return createMuiTheme(deepMerge(enhanced, preset || {}));
};
