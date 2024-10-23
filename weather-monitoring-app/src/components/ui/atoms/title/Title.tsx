"use client";
import classNames from "classnames";

import type { IProps } from "./types/IProps";
export function Title(props: IProps) {
  const { classname, content, size } = props;
  const titleClass = classNames(classname,{
    "text-2xl font-bold ": size === 'large',
    "text-xl mt-2 ": size === 'middle',
    "text-base mt-2 ": size === 'small'
  });

  return <div className={titleClass}>{content}</div>;
}
