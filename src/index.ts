import merge from 'lodash/merge';
import createMuiTheme, { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';
import { detectIE } from './tools';

export default (preset: ThemeOptions, {
  shadow = false,
} = {}): Theme => {
  const theme = createMuiTheme(preset);
  const enhanced: ThemeOptions = {
    typography: {
      fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
    palette: {
      action: {
        hoverOpacity: 0.08,
        disabledBackground: 'rgba(0, 0, 0, 0.08)',
      },
    },
    overrides: {
      MuiGrid: {
        'grid-xs-12': {
          flexBasis: detectIE() ? 'unset' : '100%',
        },
      },
      MuiButton: {
        text: {
          padding: '6px 15px',
        },
        contained: {
          ...(shadow ? {} : { boxShadow: 'none' }),
          backgroundColor: 'white',
          '&:hover': {
            ...(shadow ? {} : { boxShadow: 'none' }),
          },
          '&:active': {
            ...(shadow ? {} : { boxShadow: 'none' }),
            '&::before': {
              content: '""',
              backgroundColor: 'rgba(0,0,0,0.05)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
          },
        },
        root: {
          ...(shadow ? {} : { boxShadow: 'none' }),
          borderRadius: 2,
          border: '1px solid rgba(0,0,0,0.15)',
          padding: '6px 15px',
          textTransform: 'none',
          '&:hover': {
            ...(shadow ? {} : { boxShadow: 'none' }),
          },
          '&:active': {
            ...(shadow ? {} : { boxShadow: 'none' }),
            '&::before': {
              content: '""',
              backgroundColor: 'rgba(0,0,0,0.05)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
            '& > $label': {
              transform: 'translateY(1px)',
            },
          },
        },
        label: {
          lineHeight: '20px',
        },
      },
      MuiInput: {
        underline: {
          '&:before': {
            display: 'none',
          },
          '&:after': {
            display: 'none',
          },
        },
      },
      MuiInputLabel: {
        root: {
          left: '12px',
          top: 3,
        },
        formControl: {
          left: '12px',
          top: 3,
        },
        animated: {
          top: 0,
        },
      },
      MuiInputBase: {
        input: {
          paddingTop: 8,
          paddingLeft: 10,
          paddingRight: 10,
          border: 'none',
        },
        root: {
          margin: 1,
          border: '1px solid rgba(0, 0, 0, 0.15)',
          'border-top-color': 'rgba(0, 0, 0, 0.15)',
          '&$error': {
            margin: 0,
            border: '2px solid black',
            borderColor: theme.palette.error.main,
          },
          '&$focused': {
            margin: 0,
            border: '2px solid black',
            borderColor: theme.palette.primary.main,
          },
          letterSpacing: 'normal',
          color: 'inherit',
          boxShadow: 'none',
          boxSizing: 'content-box',
          'font-size': '0.9rem',
          lineHeight: detectIE() ? '1em' : '1.5em',
        },
      },
    },
  };

  return createMuiTheme(merge(enhanced, preset));
};
