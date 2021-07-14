import { Palette } from "@material-ui/core/styles/createPalette";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: 'haas, pragmatica, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  h1: {
    fontSize: '50px',
    lineHeight: '56px',
    fontWeight: 'normal',
    letterSpacing: '0px',
    fontFamily: 'TinkoffSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  h2: {
    fontSize: '44px',
    lineHeight: '48px',
    fontWeight: 'normal',
    letterSpacing: '0px',
    fontFamily: 'TinkoffSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  h3: {
    fontSize: '36px',
    lineHeight: '40px',
    fontWeight: 'normal',
    letterSpacing: '0px',
    fontFamily: 'TinkoffSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  h4: {
    fontSize: '28px',
    lineHeight: '32px',
    fontWeight: 'normal',
    letterSpacing: '0px',
    fontFamily: 'TinkoffSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  h5: {
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: 'normal',
    letterSpacing: '0px',
    fontFamily: 'TinkoffSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  h6: {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 'normal',
    letterSpacing: '0px',
    fontFamily: 'TinkoffSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  button: {
    fontSize: '13px',
    lineHeight: '30px',
    fontWeight: 400,
    letterSpacing: '1px',
  },
  body1: {
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: '0px',
  },
  body2: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: '0px',
  },
  subtitle1: {
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: '0px',
  },
  subtitle2: {
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: '0px',
  },
}