import classNames from 'classnames';
import { Button as BaseButton } from '@nextui-org/react'
import React from 'react'
import { IButtonProps } from './'

export function Button(props: IButtonProps) {
    // desectructure all prop
    const { children, type, color, variant, value, onClick, icon, className, size, radius, loading } = props

    const buttonClass = classNames(className, {
        // 'text-xl': size === 'xl',
    })

    return (
        <BaseButton type={type} color={color} variant={variant} value={value} onClick={onClick} size={size} className={buttonClass} radius={radius} isLoading={loading}>
            {icon}
            {children}
        </BaseButton>
    )
}

