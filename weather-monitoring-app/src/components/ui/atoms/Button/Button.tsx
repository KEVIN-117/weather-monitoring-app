import classNames from 'classnames';
import { Button as BaseButton } from '@nextui-org/react'
import React from 'react'
import { IButtonProps } from './'

export function Button(props: IButtonProps) {
    const { children, type, color, variant, value, onClick, icon, className, size, radius, loading, as, href } = props

    const buttonClass = classNames(className, {})

    return (
        <BaseButton as={as} href={href} type={type} color={color} variant={variant} value={value} onClick={onClick} size={size} className={buttonClass} radius={radius} isLoading={loading}>
            {icon}
            {children}
        </BaseButton>
    )
}

