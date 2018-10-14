import * as React from "react";

export interface InputMaterialUiProps extends React.Props<InputMaterialUi> {
  id?: string;
  type?: string;
  label: string;
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

declare class InputMaterialUi extends React.Component<InputMaterialUiProps> {}

declare module "input-material-ui" {}

export default InputMaterialUi;
