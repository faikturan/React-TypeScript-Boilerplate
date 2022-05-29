import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from '../..';

const BasicDropdown = (): JSX.Element => (
  <div className="mb-8">
    <h2 className="mb-4 text-gray-600 text-lg font-bold md:text-2xl">
      Basic Dropdown
    </h2>
    <Dropdown
      ToggleComponent={
        <DropdownToggle>
          <span className="flex">
            Options
            <svg
              className="-mr-1 ml-2 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </DropdownToggle>
      }
      MenuComponent={
        <DropdownMenu>
          <DropdownItem>Enoch Ndika</DropdownItem>
          <DropdownItem>Josue Kazenga</DropdownItem>
          <DropdownItem>Business</DropdownItem>
        </DropdownMenu>
      }
    />
  </div>
);

export default BasicDropdown;
