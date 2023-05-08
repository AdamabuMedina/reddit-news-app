import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./dropdown.css"

interface IDropdownProps {
   children: React.ReactNode
   onClick?: () => void
   coords: {
      x: number,
      y: number
   }
}

const NOOP = () => {}

export function DropdownPortal({children, onClick, coords}: IDropdownProps) {
   const node = document.querySelector("#dropdown_root")
   if(!node) return null

   return ReactDOM.createPortal((
      <div className={styles.listContainer} style={{left: coords.x, top: coords.y}}>
         <div className={styles.list} onClick={onClick}>
            {children}
         </div>
      </div>
   ), node)
}