// https://dev.to/fayaz/making-a-navigation-drawer-sliding-sidebar-with-tailwindcss-blueprint-581l
import React from 'react';
import SidenavItems from './items';
import { useToggle } from '../helpers/context';
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from 'Components/Elements';
import Logo from '../Logo';

const SideNavigation = () => {
  const { open, toggle } = useToggle();

  return (
    <Drawer isOpen={open} toggle={toggle} position="right">
      <DrawerHeader>
        <Logo className="inline mr-2" />
        <p className="inline">Header</p>
      </DrawerHeader>
      <DrawerBody>
        <ul className="md:pl-6">
          <SidenavItems />
        </ul>
      </DrawerBody>
      <DrawerFooter>Copyright 2021</DrawerFooter>
    </Drawer>
  );
};

export default SideNavigation;
