import React from "react"
import {IconAnon} from "./iconAnon";
import {IconHide} from "./IconHide";
import {IconMenu} from "./IconMenu";
import {IconWarning} from "./IconWarning";
import { IconMessage } from "./IconMessage";
import { IconSave } from "./IconSave";
import { IconShare } from "./IconShare";
import { IconComment } from "./IconComment";
import { IconKarmaUp } from "./IconKarmaUp";
import { IconKarmaDown } from "./IconKarmaDown";

const Icons: { [key in keyof typeof EIcons]: any } = {
   menu: IconMenu,
   complain: IconWarning,
   save: IconSave,
   message: IconMessage,
   share: IconShare,
   hide: IconHide,
   anonIcon: IconAnon,
   comment: IconComment,
   karmaUp: IconKarmaUp,
   karmaDown: IconKarmaDown,
}

interface IIconProps {
   size: number,
   name: EIcons,
}

export enum EIcons {
   menu="menu",
   complain="complain",
   save="save",
   message="message",
   share="share",
   hide="hide",
   anonIcon="anonIcon",
   comment="comment",
   karmaUp="karmaUp",
   karmaDown="karmaDown"
}

export  function Icon({size, name}: IIconProps) {
   const IconName = Icons[name];
   return  <IconName size={size}/>;
}