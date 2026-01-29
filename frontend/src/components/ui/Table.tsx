import clsx from 'clsx';
import { ReactNode } from 'react';

export function Table({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className="w-full overflow-auto">
            <table className={clsx("w-full caption-bottom text-sm", className)}>
                {children}
            </table>
        </div>
    );
}

export function TableHeader({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <thead className={clsx("[&_tr]:border-b border-white/10", className)}>
            {children}
        </thead>
    );
}

export function TableBody({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <tbody className={clsx("[&_tr:last-child]:border-0", className)}>
            {children}
        </tbody>
    );
}

export function TableRow({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <tr className={clsx("border-b border-white/5 transition-colors hover:bg-white/5 data-[state=selected]:bg-white/10", className)}>
            {children}
        </tr>
    );
}

export function TableHead({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <th className={clsx("h-12 px-4 text-left align-middle font-medium text-gray-400 [&:has([role=checkbox])]:pr-0", className)}>
            {children}
        </th>
    );
}

export function TableCell({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <td className={clsx("p-4 align-middle [&:has([role=checkbox])]:pr-0 text-gray-300", className)}>
            {children}
        </td>
    );
}
