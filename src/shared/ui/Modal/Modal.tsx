import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    MutableRefObject,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}
const ANIMATION_DELAY = 300;
export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose, lazy,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isOpening, setIsOpening] = useState(false);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const mods: Mods = {
        [cls.opened]: isOpening,
        [cls.isClosing]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
        return () => setIsMounted(false);
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            timerRef.current = setTimeout(() => {
                setIsOpening(true);
            }, 0);
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            setIsOpening(false);
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
