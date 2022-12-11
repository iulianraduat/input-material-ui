import { FormHelperTextProps } from '@mui/material/FormHelperText';
import { InputProps } from '@mui/material/Input';
import { InputLabelProps } from '@mui/material/InputLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import InputMaterialUi from '../src/InputMaterialUi';

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

export default {
  title: 'InputMaterialUi',
  component: InputMaterialUi,
} as ComponentMeta<typeof InputMaterialUi>;

export const TheField: ComponentStory<typeof InputMaterialUi> = () => (
  <div>
    <InputMaterialUi label="As text field" onChange={doNothing} />
    <div style={style} />
    <InputMaterialUi
      label="As password field"
      type="password"
      onChange={doNothing}
    />
  </div>
);

export const WithDefaultValue: ComponentStory<typeof InputMaterialUi> = () => (
  <div>
    <InputMaterialUi
      label="As text field"
      defaultValue="username"
      onChange={doNothing}
    />
    <div style={style} />
    <InputMaterialUi
      label="As password field"
      defaultValue="password"
      type="password"
      onChange={doNothing}
    />
  </div>
);

export const WithValue: ComponentStory<typeof InputMaterialUi> = () => (
  <div>
    <InputMaterialUi
      label="As text field"
      value="username"
      onChange={doNothing}
    />
    <div style={style} />
    <InputMaterialUi
      label="As password field"
      value="password"
      type="password"
      onChange={doNothing}
    />
  </div>
);

export const WithPlaceholder: ComponentStory<typeof InputMaterialUi> = () => (
  <div>
    <InputMaterialUi
      label="With placeholder"
      placeholder="Start writing here"
      onChange={doNothing}
    />
    <div style={style} />
    <InputMaterialUi
      label="With placeholder"
      placeholder="Start writing here"
      type="password"
      onChange={doNothing}
    />
  </div>
);

export const WithHelperText: ComponentStory<typeof InputMaterialUi> = () => (
  <div>
    <InputMaterialUi
      label="With helper text"
      helperText="My I suggest?"
      onChange={doNothing}
    />
    <div style={style} />
    <InputMaterialUi
      label="With helper text"
      helperText="My I suggest?"
      type="password"
      onChange={doNothing}
    />
  </div>
);

export const Customized: ComponentStory<typeof InputMaterialUi> = () => (
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
);
