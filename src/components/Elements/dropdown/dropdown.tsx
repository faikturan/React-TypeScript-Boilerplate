import React, {
  useRef,
  useCallback,
  useState,
  useEffect,
  AnchorHTMLAttributes,
  ReactNode,
} from 'react';

interface Props {
  children: ReactNode;
}

interface DropdownItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

interface DropdownProps {
  ToggleComponent: ReactNode;
  MenuComponent: ReactNode;
}

const style = {
  menu: `block z-30 absolute top-0 left-0 bg-white float-left py-2 px-0 text-left border border-gray-300 rounded-sm mt-0.5 mb-0 mx-0 bg-clip-padding`,
  item: `block w-full py-1 px-8 mb-2 text-sm font-normal clear-both whitespace-nowrap border-0 hover:bg-gray-200 cursor-pointer`,
};

/** Logic */

// set up custom hook
const useToggle = () => {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    setShow((prevState) => !prevState);
  }, []);

  // close dropdown when you click outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, ref]);

  // close dropdown when you click on "ESC" key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!show) return;

      if (event.key === 'Escape') {
        setShow(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  return {
    show,
    toggle,
    ref,
  };
};

function DropdownToggle({ children }: Props) {
  return <>{children}</>;
}

function DropdownMenu({ children }: Props) {
  return (
    <div className="relative">
      <div
        style={{ transform: 'translate3d(0px, 3px, 0px)' }}
        className={style.menu}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {children}
      </div>
    </div>
  );
}

function Dropdown({ ToggleComponent, MenuComponent }: DropdownProps) {
  const { show, toggle } = useToggle();
  // /* First child contains the dropdown toggle */
  // const dropdownToggle = children[0];

  // /* Second child contains the dropdown menu */
  // const dropdownMenu = children[1];

  return (
    <>
      <button
        onClick={toggle}
        type="button"
        className="px-6 py-2 text-white font-medium bg-indigo-900 rounded focus:outline-none shadow"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {ToggleComponent}
      </button>
      {show && <>{MenuComponent}</>}
    </>
  );
}

/* You can wrap the a tag with Link if you are using either Create-React-App, Next.js or Gatsby */
function DropdownItem({ children }: DropdownItemProps) {
  return (
    <a tabIndex={0} className={style.item} role="menuitem">
      {children}
    </a>
  );
}

function DropdownDivider() {
  return <hr className="my-2 text-gray-300" />;
}

export {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  DropdownDivider,
};
