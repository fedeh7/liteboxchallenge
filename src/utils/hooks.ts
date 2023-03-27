import { useEffect, useState } from 'react';

export const useMobileSize = (size: number) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setWidth]);

    return size >= width;
};

export const useClickOutside = (ref: any, callBack: () => void) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            callBack();
        };
        document.addEventListener('click', listener);
        return () => {
            document.removeEventListener('click', listener);
        };
    }, [ref, callBack]);
};
