import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import React from 'react';
import EyeSlashSvg from './EyeSlashSvg';
import EyeSvg from './EyeSvg';

const styles: { [key: string]: React.CSSProperties } = {
  adornment: {
    color: '#0080cc',
    cursor: 'pointer',
  },
  iconContainer: {
    display: 'flex',
  },
};

class SeeHidePassword extends React.Component<SeePasswordProps> {
  public render() {
    return (
      <InputAdornment style={styles.adornment} position="start">
        <div
          aria-label={this.getAriaLabel()}
          onClick={this.handleClick}
          style={styles.iconContainer}
        >
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
    return this.props.isPasswordVisible ? (
      <EyeSlashSvg size={size} />
    ) : (
      <EyeSvg size={size} />
    );
  }

  private handleClick = () => this.props.onClick(!this.props.isPasswordVisible);
}

export interface SeePasswordProps {
  isPasswordVisible: boolean;
  onClick: (isPasswordVisible: boolean) => void;
}

export default SeeHidePassword;
