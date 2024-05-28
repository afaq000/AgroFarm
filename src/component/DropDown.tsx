import { ReactNode, useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Option {
  label: string;
  value: string;
}
interface Props {
  Button?: ReactNode;
  options: Option[];
  onSelect: (options: Option) => void;
  className?: string;
  labelCalssName?: string;
  selected?: Option;
  placeholder?: string;
  placeholderClassName?: string;
  icon?: any;
  bodyClassName?: string;
  isShowDropIcon?: boolean;
  buttonClassName?: string;
}

const Dropdown: React.FC<Props> = ({
  Button,
  options,
  onSelect,
  className,
  labelCalssName,
  selected,
  placeholder,
  placeholderClassName,
  icon,
  bodyClassName,
  isShowDropIcon = true,
  buttonClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<Option | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = (options: Option) => {
    onSelect(options);
    setValue(options);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleOutsideclick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideclick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideclick);
    };
  });
  const getSelectedItem = () => {
    if (value) return value?.label;
    if (selected) return selected?.label;
    if (placeholder) return placeholder;
    return 'States';
  };
  return (
    <div className={`relative ${className} w-full rounded`} ref={ref}>
      {Button ? (
        <span onClick={() => setIsOpen(!isOpen)}>{Button}</span>
      ) : (
        <button
          className={`${buttonClassName} flex items-center justify-between w-full px-4 h-full rounded-md focus:outline-none `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={` ${placeholderClassName} whitespace-nowrap ${value || selected ? 'text-black' : 'text-gray-400'}`}
          >
            {' '}
            {getSelectedItem()}
          </span>
          {isShowDropIcon &&
            (icon ? (
              <icon.type
                {...icon.props}
                className={
                  isOpen
                    ? 'rotate-180 transition-transform duration-300 '
                    : icon.props.className
                }
              />
            ) : (
              <IoIosArrowDown
                className={`text-[#092C4C] ${isOpen ? 'rotate-180 transition-transform duration-300 ' : ''}`}
              />
            ))}
        </button>
      )}
      {isOpen && (
        <div
          className={`absolute top-full left-0 p-3  w-full bg-white mt-1 rounded shadow-lg z-10 ${bodyClassName}`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleClick(option)}
              className={`flex items-center cursor-pointer gap-4 px-4 py-1 text-gray-800 hover:bg-gray-100 ${` ${labelCalssName}`}`}
            >
              <span> {option.label} </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
