import React, { ReactNode, type FC } from 'react';
import './index.scss';

interface ButtonProps {
  type?: string;
  disabled?: boolean;
  icon?: ReactNode;
  text?: string;
  children?: ReactNode;
  className?: string;
  style: object;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    type,
    disabled,
    className = '',
    icon,
    text,
    children,
    style,
    onClick,
  } = props;
  return (
    <button
      className={`btn ${type === 'primary' ? 'btn-primary' : ''}  
      ${disabled ? 'btn-disabled' : ''} 
      ${className}`}
      style={style}
      onClick={onClick}
    >
      {icon}
      {text}
      {children}
    </button>
  );
};
export default Button;
