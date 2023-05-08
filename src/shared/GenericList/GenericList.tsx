import * as React from "react"
import styles from "./genericlist.css"
import {EIcons, Icon} from "../Icons";

interface IItem {
    value: string
    id: string
    onClick: (id: string) => void
}

interface IMyListProps {
    list: IItem[]
}

export function MyList({list}: IMyListProps) {
    return (
        <ul>
            {
                list.map((item) => (
                    <li key={item.id} onClick={() => item.onClick(item.id)}>
                        {item.value}
                    </li>
                ))
            }
        </ul>
    )
}

interface IGItem {
    id: string
    text: string
    onClick: (id: string) => void
    className?: string
    As?: "a" | "li" | "button" | "div"
    href?: string
    icon?: EIcons
}

interface IGenericListProps {
    list: IGItem[]
}

export function GenericList({list}: IGenericListProps) {
    const NOOP = () => {
    }
    return (
        <>
            {list.map(({As = 'div', text, onClick = NOOP, className, id, href, icon}) => (
                <As
                    className={className ? className.split(' ').map((el) => (styles[el])).join(' ') : ''}
                    onClick={() => onClick(id)}
                    key={id}
                    href={href}
                >
                    {icon && (
                        <Icon name={icon} size={14}/>
                    )}
                    {text}
                </As>
            ))}
        </>
    )
}