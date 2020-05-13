/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import MuiInput from '@material-ui/core/TextField';
import MuiTextField from '@material-ui/core/TextField';
import MuiInput from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import SkbInput from '@skbkontur/react-ui/Input';

import { storiesOf } from '@storybook/react';
import {
  withKnobs, text,
} from '@storybook/addon-knobs';
import { Wrapper } from './Wrapper';

const stories = storiesOf('Inputs', module);
stories.addDecorator(withKnobs({ escapeHTML: false }));

stories.add('Regular', () => {
  const inputValue = text('inputText', 'Hello');
  return (
    <Wrapper
      mui={() => [
        <MuiInput
          key="1"
          value={inputValue}
        />,
        <MuiTextField
          key="2"
          value={inputValue}
        />,
      ]}
      skb={() => [
        <SkbInput
          key="1"
          value={inputValue}
        />,
      ]}
    />
  );
});
