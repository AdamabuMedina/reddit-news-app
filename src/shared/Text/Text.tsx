import React from 'react'
import styles from './text.css'
import classNames from 'classnames'


export enum EColors {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  greyF4 = 'greyF4',
  greyF3 = 'greyFF3',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66'
}

type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As ?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p';
  children ?: React.ReactNode
  size: Tsizes
  mobileSize ?: Tsizes;
  tabletSize ?: Tsizes;
  desktopSize ?: Tsizes;
  color?: EColors;

}

export function Text(props: ITextProps) {

  const {
  As = 'span', 
  color = EColors.black,
  children, 
  size, 
  mobileSize, 
  tabletSize, 
  desktopSize} = props
  
  const classes = classNames(
    styles[`s${size}`],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
    styles[color]
  );

  return(
    <As className={classes}>
      {children}
    </As>
  )
}