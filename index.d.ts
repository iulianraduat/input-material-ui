import * as React from "react";

export interface InputMaterialUiProps extends React.Props<InputMaterialUi> {
  id?: string;
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  value?: string;
}

declare class InputMaterialUi extends React.Component<InputMaterialUiProps> {}

declare module "input-material-ui" {}

export default InputMaterialUi;
