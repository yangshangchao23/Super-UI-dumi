import cs from 'classnames';
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

  // 优化
  // 使用classnames库优化 类名代码可读性
  // 加前缀，防止类名冲突   su-btn  su-btn-primary
  const libPrefix = 'su'; // 组件库前缀
  const btnPrefix = libPrefix + '-btn'; // 再加组件类型前缀
  const buttonClass = cs(
    btnPrefix,
    {
      [`${btnPrefix}-primary`]: type === 'primary',
      [`${btnPrefix}-disabled`]: disabled,
    },
    className,
  );
  return (
    <button className={buttonClass} style={style} onClick={onClick}>
      {icon}
      {text}
      {children}
    </button>
  );
};
export default Button;
