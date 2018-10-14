import * as React from "react";
import { isEmpty, isNil } from "lodash";
import InputField from "./InputField";
import RemoveValue from "./RemoveValue";
import SeeHidePassword from "./SeeHidePassword";

class InputMaterialUi extends React.Component<InputMaterialUiProps, InputMaterialUiState> {
  public state: InputMaterialUiState = {
    isPasswordVisible: false
  };

  public render() {
    const { id, label, placeholder, value } = this.props;

    return (
      <InputField
        id={id}
        type={this.getType()}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={this.handleChange}
        startAdornment={this.getStartAdornament()}
        endAdornment={this.getEndAdornament()}
      />
    );
  }

  private getType(): string {
    const { type } = this.props;

    if (isNil(type)) {
      return "text";
    }

    if (type !== "password") {
      return type;
    }

    return this.state.isPasswordVisible ? "text" : "password";
  }

  private getStartAdornament() {
    if (this.props.type !== "password") {
      return null;
    }

    return <SeeHidePassword isPasswordVisible={this.state.isPasswordVisible} onClick={this.handleInputVisibility} />;
  }

  private getEndAdornament() {
    if (isEmpty(this.props.value)) {
      return null;
    }

    return <RemoveValue onClick={this.handleRemoveValue} />;
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => this.props.onChange(event.target.value);

  private handleRemoveValue = () => this.props.onChange("");

  private handleInputVisibility = (isPasswordVisible: boolean) =>
    this.setState({
      isPasswordVisible
    });
}

interface InputMaterialUiState {
  isPasswordVisible: boolean;
}

export interface InputMaterialUiProps {
  id?: string;
  type?: string;
  label: string;
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default InputMaterialUi;
