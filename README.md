# input-material-ui

A material-ui INPUT component which allows to see/hide the password text of the field and to clear the input value

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/input-material-ui/).

## Props

The component accepts the props defined bellow in the table.

### Props accepted by InputMaterialUi

| Name                | Type                    | Required | Default   | Description                                            |
|---------------------|-------------------------|----------|-----------|--------------------------------------------------------|
| FormHelperTextProps | FormHelperTextProps     | no       | undefined | The props passed to helper text                        |
| helperText          | string                  | no       | undefined | The helper text                                        |
| id                  | string                  | no       | undefined | The id of the field                                    |
| InputLabelProps     | InputLabelProps         | no       | undefined | The Props passed to label                              |
| InputProps          | InputProps              | no       | undefined | The props passed to input field                        |
| label               | string                  | yes      | -         | The label of the field                                 |
| onChange            | (value: string) => void | yes      | -         | The callback function called when the value is changed |
| placeholder         | string                  | no       | undefined | The placeholder of the field                           |
| type                | string                  | no       | text      | The type of the field; ex. text, password              |
| value               | string                  | no       | undefined | The value of the field                                 |

---

## Versions

| InputMaterialUi _uses_ | Material-ui | React  |
|-----------------------:|:-----------:|:------:|
|                  1.0.x |    3.2.0    | 16.5.2 |
|                  1.1.x |    3.6.0    | 16.6.3 |
|                  1.2.x |    3.9.2    | 16.8.1 |
|                  1.3.x |    3.9.3    | 16.8.6 |
|                  2.0.x |    4.0.2    | 16.8.6 |
|                  2.1.x |    4.2.0    | 16.8.6 |

### About versioning schema used for InputMaterialUi

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of InputMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of InputMaterialUi

---

## Example

The base component which allows to create an input with a visible or masked input:

```js
import * as React from "react";
import InputMaterialUi from "input-material-ui";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <InputMaterialUi
          type="text"
          label="Account"
          placeholder="contains this text"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }

  handleChange = (event: any) => {
    console.log(event);
  };
}

export default App;
```

```js
import * as React from "react";
import InputMaterialUi from "input-material-ui";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <InputMaterialUi type="password" label="Password" onChange={onChange} />
      </div>
    );
  }

  handleChange = (event: any) => {
    console.log(event);
  };
}

export default App;
```

---

## Changelog

### 1.0.0

- input-material-ui is made publicly available

### 1.0.1

- Replaced fontawesome icon with an svg icon

### 1.0.3

- Fixed display of remove value when the field has a value

### 1.0.5

- Fixed the bug related to switching between being uncontroled/controled

### 1.1.0

- Updated the react and material-ui package

### 1.1.1

- Fixed the controlled mode for input

### 1.2.0

- Updated packages

### 1.2.1

- The input field received a name automatically. The name is created by doing kebabCase from the first defined of: id, label or placeholder.
- Fixed the height of the input field to do not cut the letter 'g' or 'y'

### 1.3.0

- Updated packages

### 2.0.0

- Updated packages

### 2.0.1

- Added the possibility to display a helper text
- Added new props for passing props to input field, label and helper text
- Added a storybook for this component

### 2.1.0

- Updated packages
