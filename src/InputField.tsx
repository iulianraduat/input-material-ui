import * as React from 'react';
import { isEmpty, kebabCase } from 'lodash';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';

const style: React.CSSProperties = {
	height: '1.1875rem'
};

const getType = (type?: string): string => (isEmpty(type) ? 'text' : type as string);

const getLabel = (id?: string, label?: string) => {
	if (isEmpty(label)) {
		return null;
	}

	return <InputLabel htmlFor={id}>{label}</InputLabel>;
};

const getHelperText = (helperText: React.ReactNode) => {
	if (isEmpty(helperText)) {
		return null;
	}

	return <FormHelperText>{helperText}</FormHelperText>;
};

const InputField = (props: InputFieldProps) => (
	<FormControl fullWidth={true}>
		{getLabel(props.id, props.label)}
		<Input
			id={props.id}
			inputProps={{
				style
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
		{getHelperText(props.helperText)}
	</FormControl>
);

export interface InputFieldProps {
	id?: string;
	type: string;
	label?: string;
	placeholder?: string;
	value?: string;
	onGotFocus?: () => void;
	onLostFocus?: () => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	startAdornment?: React.ReactNode;
	endAdornment?: React.ReactNode;
	helperText?: string;
}

export default InputField;
