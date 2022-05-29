import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
}

const style = {
  group: `list-reset flex flex-col pl-0 mb-0 `,
  item: `relative block py-3 px-5 relative -mb-px block border border-grey`,
};

function ListGroup({ children, className }: Props): JSX.Element {
  return <ul className={clsx(className, style.group)}>{children}</ul>;
}

function ListGroupItem({ children, className, href }: Props): JSX.Element {
  return (
    <a href={href} className={clsx(className, style.item)}>
      {children}
    </a>
  );
}

export { ListGroup, ListGroupItem };
