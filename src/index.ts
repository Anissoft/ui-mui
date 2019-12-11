import merge from 'lodash/merge';
import { Theme, createMuiTheme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export default (preset: ThemeOptions): Theme => {
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
      },
    },
    overrides: {
      MuiButton: {
        text: {
          padding: '6px 15px',
        },
        contained: {
          boxShadow: 'none',
          backgroundColor: 'white',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
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
          boxShadow: 'none',
          backgroundColor: 'white',
          borderRadius: 2,
          border: '1px solid rgba(0,0,0,0.15)',
          padding: '6px 15px',
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
            // backgroundColor: 'rgba(0,0,0,0.05)',
          },
          '&:active': {
            boxShadow: 'none',
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
          // color: '#404040',
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
          border: '1px solid rgba(0, 0, 0, 0.15)',
          'border-top-color': 'rgba(0, 0, 0, 0.15)',
          margin: 1,
          '&:focus': {
            margin: 0,
            border: '2px solid black',
            borderColor: theme.palette.primary.main,
          },
        },
        root: {
          letterSpacing: 'normal',
          // 'line-height': 'normal',
          // 'font-family': 'inherit',
          // fontWeight: 'normal',
          // fontStyle: 'normal',
          // fontVariant: 'normal',
          // 'font-stretch': 'normal',
          // 'text-align': 'initial',
          // 'text-transform': 'none',
          // 'text-shadow': 'none',
          // width: 250px,
          color: 'inherit',
          // backgroundColor: 'white',
          boxShadow: 'none',
          // border: '1px solid rgba(0, 0, 0, 0.15)',
          // 'border-top-color': 'rgba(0, 0, 0, 0.15)',
          'font-size': '0.9rem',
          'line-height': 20,
          // 'padding-top': 2,
          // 'padding-bottom': 1,
          // height: 34,
        },
      },
    },
  };

  return createMuiTheme(merge(enhanced, preset));
};
