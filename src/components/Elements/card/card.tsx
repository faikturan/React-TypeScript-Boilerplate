import React, { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const inlineStyle = {
  boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
};

function Card({ children, className }: Props) {
  return (
    <div className={clsx('relative rounded-lg', className)} style={inlineStyle}>
      {children}
    </div>
  );
}

function CardBody({ children, className }: Props) {
  return (
    <div className={clsx('block flex-grow flex-shrink p-5', className)}>
      {children}
    </div>
  );
}

function CardTitle({ children, className }: Props) {
  return (
    <div className={clsx('font-medium text-gray-700 mb-3', className)}>
      {children}
    </div>
  );
}

function CardText({ children, className }: Props) {
  return <div className={clsx('text-gray-500', className)}>{children}</div>;
}

export { Card, CardBody, CardTitle, CardText };
