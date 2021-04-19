import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { InputProps } from '@material-ui/core/Input';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { isEmpty, isNil } from 'lodash';
import * as React from 'react';
import InputField from './InputField';
import RemoveValue from './RemoveValue';
import SeeHidePassword from './SeeHidePassword';

class InputMaterialUi extends React.PureComponent<InputMaterialUiProps, InputMaterialUiState> {
  public state: InputMaterialUiState = {
    isPasswordVisible: false,
    value: undefined,
  };

  public render() {
    const {
      FormHelperTextProps,
      helperText,
      id,
      InputLabelProps,
      InputProps,
      label,
      placeholder,
      value: valueInProps,
    } = this.props;
    const { value: valueInState = '' } = this.state;

    const value: string | undefined = isNil(valueInProps) ? valueInState : valueInProps;

    return (
      <InputField
        endAdornment={this.getEndAdornament()}
        helperText={helperText}
        helperTextProps={FormHelperTextProps}
        id={id}
        inputLabelProps={InputLabelProps}
        inputProps={InputProps}
        label={label}
        onChange={this.handleChange}
        placeholder={placeholder}
        startAdornment={this.getStartAdornament()}
        type={this.getType()}
        value={value}
      />
    );
  }

  public componentDidMount() {
    const { defaultValue, value } = this.props;

    if (isNil(this.state.value) && isNil(defaultValue) === false) {
      this.setState({
        value: defaultValue,
      });
      return;
    }

    if (isNil(value) === false && value !== this.state.value) {
      this.setState({
        value: this.props.value,
      });
    }
  }

  private getType(): string {
    const { type } = this.props;

    if (isNil(type)) {
      return 'text';
    }

    if (type !== 'password') {
      return type;
    }

    return this.state.isPasswordVisible ? 'text' : 'password';
  }

  private getStartAdornament() {
    if (this.props.type !== 'password') {
      return null;
    }

    const isPasswordVisible: boolean = this.state.isPasswordVisible;

    return <SeeHidePassword isPasswordVisible={isPasswordVisible} onClick={this.handleInputVisibility} />;
  }

  private getEndAdornament() {
    if (isEmpty(this.state.value)) {
      return null;
    }

    return <RemoveValue onClick={this.handleRemoveValue} />;
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => this.handleChangeValue(event.target.value);

  private handleRemoveValue = () => this.handleChangeValue('');

  private handleChangeValue = (value: string) => {
    this.setState({
      value,
    });

    this.props.onChange(value);
  };

  private handleInputVisibility = (isPasswordVisible: boolean) =>
    this.setState({
      isPasswordVisible,
    });
}

interface InputMaterialUiState {
  isPasswordVisible: boolean;
  value?: string;
}

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

export default InputMaterialUi;
