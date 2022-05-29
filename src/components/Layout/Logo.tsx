import React from 'react';
import logo from 'Assets/logo.svg';

interface Props {
  className?: string;
  height?: number;
  width?: number;
  altText?: string;
}

const Logo = ({
  className = '',
  height = 50,
  width = 50,
  altText = 'logo',
}: Props): JSX.Element => {
  return (
    <img
      className={className}
      src={logo}
      height={height}
      width={width}
      placeholder="blur"
      // objectFit="cover"
      alt={altText}
    />
  );
};

export default Logo;
