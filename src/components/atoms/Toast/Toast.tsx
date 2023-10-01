import { useEffect, useState } from 'react';
import styled from 'styled-components';

type PropsT = {
    toastData: { text: string, timestamp: number } | null,
    handleCloseToast: () => void;
}

const ToastContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;

    /* overflow: hidden; */
`;

const Text = styled.div<{ visible: boolean }>`
    border-radius: 8px;
    background-color: black;
    color: white;
    font-size: 18px;
    padding: 8px 16px;

    transition: transform 300ms, opacity 300ms;
    transform: ${({ visible }) => !visible ? 'translateY(-200%)': 'translateY(10px)'};
    opacity: ${({ visible }) => !visible ? 0: 1};
`;

const Toast: React.FC<PropsT> = ({ toastData, handleCloseToast }) => {
    const [localToast, setLocalToast] = useState<PropsT['toastData'] | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(
        () => {
            if (toastData) {
                setLocalToast(toastData);
                setIsVisible(true);
            }
        },
        [toastData],
    );

    useEffect(
        () => {
            if (!localToast && toastData) {
                handleCloseToast();
            }
        },
        [localToast]
    );

    useEffect(
        () => {
            if (!isVisible && localToast) {
                const id = setTimeout(
                    () => {
                        setLocalToast(null); 
                    },
                    300,
                );

                return (): void => {
                    clearTimeout(id);
                }
            }
        },
        [isVisible],
    );

    useEffect(
        () => {
            if (!localToast) {
                return;
            }

            const id = setTimeout(() => {
                setIsVisible(false)
            }, 3000);

            return (): void => {
                clearTimeout(id);
            }
        },
        [localToast],
    );

    return (
        <ToastContainer >
            <Text visible={isVisible}>{localToast?.text}</Text>
        </ToastContainer>
    )
}

export default Toast;