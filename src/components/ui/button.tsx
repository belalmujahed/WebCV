'use client';
import * as React from 'react';
import Button from '@mui/material/Button';

interface Props {
    children: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export function AppButton({
                              children,
                              variant = 'contained',
                              color = 'primary',
                              size = 'medium',
                              onClick,
                              disabled,
                              type = 'button',
                              className,
                          }: Props) {
    return (
        <Button
            variant={variant}
            color={color}
            size={size}
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={className}
        >
            {children}
        </Button>
    );
}
