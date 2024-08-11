import { useState, useEffect } from 'react';

function useIsMobile() {
    const [isMobile, setIsMobile] = setState(window.innerWidth <= 700);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
}

export default useIsMobile;