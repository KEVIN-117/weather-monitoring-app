import React from "react";

export interface IButtonProps extends React.ComponentProps<"button"> {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined
    size?: "sm" | "md" | "lg";
    variant?: "light" | "solid" | "bordered" | "flat" | "faded" | "shadow" | "ghost" | undefined;
    fullWidth?: boolean;
    radius?: "sm" | "md" | "lg" | "none" | "full" | undefined;
    loading?: boolean;
    icon?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    target?: string;
    rel?: string;
    as?: React.ElementType;
    ref?: React.RefObject<HTMLButtonElement>;
}