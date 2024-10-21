export interface IProps extends React.ComponentProps<"select"> {
    className?: string;
    defaultSelectedKeys?: string[];
    placeholder?: string;
    label?: string;
    startContent?: React.ReactNode;
    errors?: string[];
    isInvalid?: boolean;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
    required?: boolean;
    color?: "primary" | "default" | "secondary" | "success" | "warning" | "danger" | undefined;
    variant?: "faded" | "bordered" | "flat" | "underlined" | undefined;
    otherVariant?: "glassmorphism" | undefined;
    labelPlacement?: "outside" | "outside-left" | "inside" | undefined;
    radius?: "none" | "md" | "sm" | "lg" | "full" | undefined;
    disable?: boolean;
    description?: string;
}
