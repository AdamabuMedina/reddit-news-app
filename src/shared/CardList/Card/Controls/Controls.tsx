import React from 'react';
import styles from './controls.css';
import { Actions } from './Actions';
import { Comments } from './Comments';
import { KarmaCounter } from './KarmaCounter';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <Comments />
      <Actions />
    </div>
  );
}
