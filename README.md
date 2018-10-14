# input-material-ui

A material-ui INPUT component which allows to see/hide the password text of the field and to clear the input value

---

## Props

The component accepts the props defined bellow in the table.

### Props accepted by InputMaterialUi

| Name        | Type                    | Required | Default   | Description                                            |
| ----------- | ----------------------- | -------- | --------- | ------------------------------------------------------ |
| id          | string                  | no       | undefined | The id of the field                                    |
| label       | string                  | yes      | -         | The label of the field                                 |
| onChange    | (value: string) => void | yes      | -         | The callback function called when the value is changed |
| placeholder | string                  | no       | undefined | The placeholder of the field                           |
| type        | string                  | no       | text      | The type of the field; ex. text, password              |
| value       | string                  | no       | undefined | The value of the field                                 |

---

## Versions

| InputMaterialUi _uses_ | Material-ui | React  |
| ---------------------: | :---------: | :----: |
|                  1.0.x |    3.2.0    | 16.5.2 |

### About versioning schema used for InputMaterialUi

- Major - it will be increased if the major version of material-ui changes or there are breaking changes in the code of InputMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of InputMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

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
