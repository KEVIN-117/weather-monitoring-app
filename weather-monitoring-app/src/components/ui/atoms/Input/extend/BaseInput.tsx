// MyButton.tsx
import { extendVariants, Input } from "@nextui-org/react";

export const BaseInput = extendVariants(Input, {
    defaultVariants: {

    },
    slots: {

    },
    variants:{
        bordered: {
            container: "border border-[#84cc16]",
        },
    },
    compoundVariants: [ // <- modify/add compound variants
        {
            
        },
    ],
});