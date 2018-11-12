import * as React from 'react';
import { Dictionary } from "lodash";
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';

import EyeSlashSvg from './EyeSlashSvg';
import EyeSvg from './EyeSvg';

const styles: Dictionary<React.CSSProperties> = {
	adornment:{
		color: '#0080cc',
		cursor: 'pointer'
	},
	iconContainer:{
		display: "flex"
	}
};

class SeeHidePassword extends React.Component<SeePasswordProps> {
	public render() {
		return (
			<InputAdornment style={styles.adornment} position="start">
				<div aria-label={this.getAriaLabel()} onClick={this.handleClick} style={styles.iconContainer}>
					{this.getIcon()}
				</div>
			</InputAdornment>
		);
	}

	private getAriaLabel() {
		const { isPasswordVisible } = this.props;

		return isPasswordVisible ? 'Hide the password' : 'See the password';
	}

	private getIcon() {
		const size: number = 20;
		return this.props.isPasswordVisible ? <EyeSlashSvg size={size} /> : <EyeSvg size={size} />;
	}

	private handleClick = () => this.props.onClick(!this.props.isPasswordVisible);
}

export interface SeePasswordProps {
	isPasswordVisible: boolean;
	onClick: (isPasswordVisible: boolean) => void;
}

export default SeeHidePassword;
