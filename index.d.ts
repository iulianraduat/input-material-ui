import * as React from 'react';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { InputProps } from '@material-ui/core/Input';

export interface InputMaterialUiProps extends React.Props<InputMaterialUi> {
  FormHelperTextProps?: FormHelperTextProps;
  helperText?: string;
  id?: string;
  InputLabelProps?: InputLabelProps;
  InputProps?: InputProps;
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  value?: string;
}

declare class InputMaterialUi extends React.Component<InputMaterialUiProps> {}

declare module 'input-material-ui' {}

export default InputMaterialUi;
