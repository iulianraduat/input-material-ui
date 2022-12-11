import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import { FormHelperTextProps } from '@mui/material/FormHelperText';
import { InputProps } from '@mui/material/Input';
import { InputLabelProps } from '@mui/material/InputLabel';
import isEmpty from 'lodash/isEmpty';
import kebabCase from 'lodash/kebabCase';
import React from 'react';

const style: React.CSSProperties = {
  height: '1.1875rem',
};

const getType = (type?: string): string =>
  isEmpty(type) ? 'text' : (type as string);

const getLabel = (
  id?: string,
  label?: string,
  inputLabelProps?: InputLabelProps
) => {
  if (isEmpty(label)) {
    return null;
  }

  if (inputLabelProps === undefined) {
    inputLabelProps = {};
  }

  return (
    <InputLabel {...inputLabelProps} htmlFor={id}>
      {label}
    </InputLabel>
  );
};

const getHelperText = (
  helperText: React.ReactNode,
  helperTextProps?: FormHelperTextProps
) => {
  if (isEmpty(helperText)) {
    return null;
  }

  if (helperTextProps === undefined) {
    helperTextProps = {};
  }

  return <FormHelperText {...helperTextProps}>{helperText}</FormHelperText>;
};

const InputField = (props: InputFieldProps) => {
  const inputProps: InputProps = props.inputProps
    ? props.inputProps
    : {
        inputProps: {},
      };

  return (
    <FormControl fullWidth={true}>
      {getLabel(props.id, props.label, props.inputLabelProps)}
      <Input
        {...inputProps}
        id={props.id}
        inputProps={{
          ...inputProps.inputProps,
          style,
        }}
        type={getType(props.type)}
        placeholder={props.placeholder}
        value={props.value}
        name={kebabCase(props.id || props.label || props.placeholder)}
        onFocus={props.onGotFocus}
        onBlur={props.onLostFocus}
        onChange={props.onChange}
        startAdornment={props.startAdornment}
        endAdornment={props.endAdornment}
      />
      {getHelperText(props.helperText, props.helperTextProps)}
    </FormControl>
  );
};

export interface InputFieldProps {
  endAdornment?: React.ReactNode;
  helperText?: string;
  helperTextProps?: FormHelperTextProps;
  id?: string;
  inputProps?: InputProps;
  inputLabelProps?: InputLabelProps;
  label?: string;
  onGotFocus?: () => void;
  onLostFocus?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  startAdornment?: React.ReactNode;
  type: string;
  value?: string;
}

export default InputField;
