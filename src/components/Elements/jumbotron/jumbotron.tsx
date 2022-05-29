import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  children: ReactNode;
  className?: string;
}

const Jumbotron = ({ className, children }: Props): JSX.Element => (
  <div
    className={clsx(
      className,
      'shadow-lg border font-light border-solid rounded-sm py-12 px-8 mb-8',
    )}
  >
    {children}
  </div>
);

export { Jumbotron };
