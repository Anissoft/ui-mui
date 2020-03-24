import React from 'react';
import Grid, { GridProps } from '@material-ui/core/Grid';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as SkbThemeProvider } from '@skbkontur/react-ui/ThemeProvider';
import FlatTheme from '@skbkontur/react-ui/lib/theming/themes/FlatTheme';
import Typography from '@material-ui/core/Typography';
import uimuize from '../src';

const segmentProps: GridProps = {
  item: true,
  container: true,
  xs: 6,
  justify: 'center',
  alignItems: 'center',
  direction: 'column',
  spacing: 2,
};

const myTheme = uimuize(createMuiTheme({
  palette: {
    primary: {
      main: '#1d85d0',
    },
  },
}));

export const Wrapper = ({ mui, skb }: Record<'mui' | 'skb', (() => React.ReactNode[])>) => (
  <Grid container spacing={2}>
    <Grid {...segmentProps}>
      <Typography variant="h5">Material-UI</Typography>
      <MuiThemeProvider theme={myTheme}>
        {mui().map((el, i) => <Grid item key={`${+i}`}>{el}</Grid>)}
      </MuiThemeProvider>
    </Grid>
    <Grid {...segmentProps}>
      <Typography variant="h5">React-UI</Typography>
      <SkbThemeProvider value={FlatTheme}>
        <div style={{ fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif' }}>
          {skb().map((el, i) => <Grid item key={`${+i}`}>{el}</Grid>)}
        </div>
      </SkbThemeProvider>
    </Grid>
  </Grid>
);
