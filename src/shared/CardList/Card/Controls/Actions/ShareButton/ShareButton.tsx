import React from 'react'
import styles from './shareButton.css'
import {EIcons, Icon} from "../../../../../Icons";

export function ShareButton() {
  return (
    <button className={styles.shareButton}>
      <Icon name={EIcons.share} size={20}/>
    </button>
  )
}