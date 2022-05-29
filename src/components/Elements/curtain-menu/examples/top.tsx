import React, { useState } from 'react';
import { Menu, MenuContainer, MenuItem, Button } from '../..';

const CurtainMenuTop = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="mb-8">
      <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">
        Transition from top
      </h2>
      <Button color="indigo" onClick={toggle}>
        Open
      </Button>
      <Menu open={open} transition="top">
        <button
          aria-label="Close"
          className="absolute right-3 top-3 text-white text-5xl cursor-pointer"
          onClick={toggle}
        >
          &times;
        </button>
        <MenuContainer>
          <MenuItem href="#">Home</MenuItem>
          <MenuItem href="#">Contact</MenuItem>
          <MenuItem href="#">Services</MenuItem>
          <MenuItem href="#">Components</MenuItem>
        </MenuContainer>
      </Menu>
    </div>
  );
};

export default CurtainMenuTop;
