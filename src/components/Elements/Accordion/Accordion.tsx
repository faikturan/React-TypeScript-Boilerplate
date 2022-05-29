import React, {
  useCallback,
  createContext,
  useState,
  useContext,
  useRef,
} from 'react';
import clsx from 'clsx';

interface AccordionProps {
  children: React.ReactNode;
  defaultPanel?: string;
}

interface AccordionContextProps {
  selected?: string;
  toggleItem?: (id: string) => void;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLElement> {
  toggle?: string;
  children: React.ReactNode;
  className?: string;
}

interface AccordionPanelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
}

const style = {
  item: 'focus:outline-none border-b my-2 p-3',
  panel: `overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600`,
};

const AngleUpIcon = () => (
  <svg
    fill="white"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4"
  >
    <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
  </svg>
);

const AngleDownIcon = () => (
  <svg
    stroke="currentColor"
    fill="white"
    strokeWidth="0"
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4"
  >
    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
  </svg>
);

/* Logic */
const Context = createContext<AccordionContextProps>({});

function Accordion({ children, defaultPanel }: AccordionProps) {
  const [selected, setSelected] = useState(defaultPanel || '');

  const toggleItem = useCallback((id: string) => {
    setSelected((prevState) => (prevState !== id ? id : ''));
  }, []);

  return (
    <Context.Provider value={{ selected, toggleItem }}>
      {children}
    </Context.Provider>
  );
}

//custom hook to consume all accordion values
const useAccordion = () => useContext(Context);

function AccordionItem({
  className,
  toggle = '',
  children,
}: AccordionItemProps) {
  const { selected, toggleItem } = useAccordion();
  return (
    <div
      role="button"
      onClick={() =>
        toggleItem
          ? toggleItem(toggle)
          : () => console.log('no toggle callback')
      }
      className={clsx(className, style.item)}
    >
      {children}
      <span className="float-right">
        {selected === toggle ? <AngleUpIcon /> : <AngleDownIcon />}
      </span>
    </div>
  );
}

function AccordionPanel({ children, id }: AccordionPanelProps) {
  const { selected } = useAccordion();
  const ref = useRef<HTMLDivElement>(null);
  const inlineStyle =
    selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div ref={ref} id={id} className={style.panel} style={inlineStyle}>
      {children}
    </div>
  );
}

export { Accordion, AccordionItem, AccordionPanel };
