import React from 'react';
import styles from './dropdown.css';
import { DropdownPortal } from './DropdownPortal';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

interface ICoords {
  x: number
  y: number
}

const NOOP = () => {};

export function Dropdown({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)
  const [dropdownCoords, setDropdownCoords] = React.useState<ICoords>({x: 0, y: 0})
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => isDropdownOpen ? onOpen(): onClose(), [isDropdownOpen]);
  React.useEffect(() => setIsDropdownOpen(isOpen),[isOpen]);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if(isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
    const boundings = event.currentTarget.getBoundingClientRect()
    setDropdownCoords({
      x: boundings.x,
      y: event.pageY
    })
  }

  React.useEffect(()=> {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("click", handleClick)
    return () => {document.removeEventListener("click", handleClick)}
  }, [])

  return (
    <div className={styles.container} ref={ref}>
      <div onClick={handleOpen} className={styles.button}>
        {button}
      </div>
      {isDropdownOpen && (
        <DropdownPortal coords={dropdownCoords} children={children} onClick={() => setIsDropdownOpen(false)}/>
      )}
    </div>
  )
}