import css from './alert.module.css';
import { clsx } from 'clsx';

export default function Alert({ children, type }) {
    return (
        <div
            className={clsx({
                [css.success]: type === 'success',
                [css.error]: type === 'error',
            })}
        >
            {children}
        </div>
    );
}