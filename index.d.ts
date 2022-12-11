import * as React from 'react';
import { FormHelperTextProps } from '@mui/material/FormHelperText';
import { InputLabelProps } from '@mui/material/InputLabel';
import { InputProps } from '@mui/material/Input';

export interface InputMaterialUiProps {
  defaultValue?: string;
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
