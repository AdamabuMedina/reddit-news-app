import React from 'react'
import styles from './saveButton.css'
import {EIcons, Icon} from "../../../../../Icons";

export function SaveButton() {
  return (
    <button className={styles.saveButton}>
      <Icon name={EIcons.save} size={20}/>
    </button>
  )
}