import clsx from 'clsx';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import LayoutProvider from './helpers/context';
import Overlay from './helpers/overlay';
import SideNav from './Sidebar/sideNavbar';

type LayoutProps = {
  children: JSX.Element;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <LayoutProvider>
      <div className={clsx('bg-gray-300', 'flex font-body items-start')}>
        <Overlay />
        <Header />
        <SideNav />
        <div className="flex flex-col pl-0 w-full">
          <main className="pt-24 pb-1 md:px-4 lg:px-6 lg:pl-2">{children}</main>
          <Footer />
        </div>
      </div>
    </LayoutProvider>
  );
}
