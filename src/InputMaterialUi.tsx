import * as React from 'react';
import { isEmpty, isNil } from 'lodash';

import InputField from './InputField';
import RemoveValue from './RemoveValue';
import SeeHidePassword from './SeeHidePassword';

class InputMaterialUi extends React.PureComponent<InputMaterialUiProps, InputMaterialUiState> {
	public state: InputMaterialUiState = {
		isPasswordVisible: false,
		value: ''
	};

	public render() {
		const { id, label, placeholder } = this.props;
		const { value } = this.state;

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

	public componentDidMount() {
		const { value } = this.props;

		if (isNil(value) === false && value !== this.state.value) {
			this.setState({
				value: this.props.value
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
			value
		});

		this.props.onChange(value);
	};

	private handleInputVisibility = (isPasswordVisible: boolean) =>
		this.setState({
			isPasswordVisible
		});
}

interface InputMaterialUiState {
	isPasswordVisible: boolean;
	value?: string;
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
