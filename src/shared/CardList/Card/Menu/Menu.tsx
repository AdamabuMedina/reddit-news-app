import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {Icon, EIcons} from '../../../Icons';
import { CloseButton } from './CloseButton';
import { MenuItem } from './MenuItem';


export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown onOpen={() => {}}
                      onClose={() => {}}
                      button={
                          <button className={styles.menuButton}>
                              <Icon name={EIcons.menu} size={5}/>
                          </button>
                      }>
                <div className={styles.menuContainer}>
                    <MenuItem postId="1234"/>
                    <CloseButton />
                </div>
            </Dropdown>
        </div>
    );
}
