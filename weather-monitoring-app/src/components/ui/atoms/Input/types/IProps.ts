import React from "react";

export interface IProps extends React.ComponentProps<"input"> {
    label?: string;
    errors?: string[];
    isInvalid?: boolean;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    color?: "primary" | "default" | "secondary" | "success" | "warning" | "danger" | undefined;
    variant?: "faded" | "bordered" | "flat" | "underlined" | undefined;
    otherVariant?: "glassmorphism" | undefined;
    labelPlacement?: "outside" | "outside-left" | "inside" | undefined;
    radius?: "none" | "md" | "sm" | "lg" | "full" | undefined;
    disable?: boolean;
    description?: string;
    endContent?: React.ReactNode;
    className?: string;
}

export interface FormErrors {
    [field: string]: string[]; // Cada campo es una lista de mensajes de error
}

export interface FormResponse {
    errors: FormErrors;
    message: string;
}
