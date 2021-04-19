import InputMaterialUi from '../src/InputMaterialUi';
import React from 'react';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { InputProps } from '@material-ui/core/Input';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: 20,
};

const inputLabelProps: InputLabelProps = {
  style: {
    color: '#000088',
    fontWeight: 'bold',
    marginLeft: 20,
  },
};

const inputProps: InputProps = {
  style: {
    color: '#888888',
    fontStyle: 'italic',
  },
};

const helperTextProps: FormHelperTextProps = {
  style: {
    color: 'white',
    backgroundColor: 'red',
    padding: 3,
  },
};

const doNothing = () => {};

storiesOf('InputMaterialUi', module)
  .addParameters({ options: { showPanel: false } })
  .add('the field', () => (
    <div>
      <InputMaterialUi label="As text field" onChange={doNothing} />
      <div style={style} />
      <InputMaterialUi label="As password field" type="password" onChange={doNothing} />
    </div>
  ))
  .add('with default value', () => (
    <div>
      <InputMaterialUi label="As text field" defaultValue="username" onChange={doNothing} />
      <div style={style} />
      <InputMaterialUi label="As password field" defaultValue="password" type="password" onChange={doNothing} />
    </div>
  ))
  .add('with value', () => (
    <div>
      <InputMaterialUi label="As text field" value="username" onChange={doNothing} />
      <div style={style} />
      <InputMaterialUi label="As password field" value="password" type="password" onChange={doNothing} />
    </div>
  ))
  .add('with placeholder', () => (
    <div>
      <InputMaterialUi label="With placeholder" placeholder="Start writing here" onChange={doNothing} />
      <div style={style} />
      <InputMaterialUi label="With placeholder" placeholder="Start writing here" type="password" onChange={doNothing} />
    </div>
  ))
  .add('with helper text', () => (
    <div>
      <InputMaterialUi label="With helper text" helperText="My I suggest?" onChange={doNothing} />
      <div style={style} />
      <InputMaterialUi label="With helper text" helperText="My I suggest?" type="password" onChange={doNothing} />
    </div>
  ))
  .add('customized', () => (
    <div>
      <InputMaterialUi
        label="As text field"
        placeholder="Start writing here"
        helperText="My I suggest?"
        InputLabelProps={inputLabelProps}
        InputProps={inputProps}
        FormHelperTextProps={helperTextProps}
        onChange={doNothing}
      />
      <div style={style} />
      <InputMaterialUi
        label="As password field"
        placeholder="Start writing here"
        helperText="My I suggest?"
        InputLabelProps={inputLabelProps}
        InputProps={inputProps}
        FormHelperTextProps={helperTextProps}
        type="password"
        onChange={doNothing}
      />
    </div>
  ));
