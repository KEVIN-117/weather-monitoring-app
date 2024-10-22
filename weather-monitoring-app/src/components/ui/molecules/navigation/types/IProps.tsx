import React from "react";

export interface IProps extends React.ComponentProps<"nav"> {
    links: NavItemProps[],
    children?: React.ReactNode;
}

export interface NavItemProps extends React.ComponentProps<"button"> {
    name: string;
    url: string;
    icon: React.ReactNode;
}