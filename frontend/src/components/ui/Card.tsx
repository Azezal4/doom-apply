import clsx from 'clsx';
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={clsx("glass-card rounded-2xl p-6", className)}>
            {children}
        </div>
    );
}

export function CardHeader({ children, className }: CardProps) {
    return (
        <div className={clsx("mb-4", className)}>
            {children}
        </div>
    );
}

export function CardTitle({ children, className }: CardProps) {
    return (
        <h3 className={clsx("text-lg font-semibold text-white", className)}>
            {children}
        </h3>
    );
}

export function CardContent({ children, className }: CardProps) {
    return (
        <div className={clsx("", className)}>
            {children}
        </div>
    );
}
