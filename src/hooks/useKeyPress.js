import { useState, useEffect } from 'react';

export default function useKeyPress (targetKey, keyDownCallback = () => {}, keyUpCallback = () => {}) {
    const [keyPressed, setKeyPressed] = useState(false);
    
    useEffect(() => {
        const downHandler = ({ key }) => {
            if (key === targetKey) {
                setKeyPressed(true);
                keyDownCallback();
            }
        }
    
        const upHandler = ({ key }) => {
            if (key === targetKey) {
                setKeyPressed(false);
                keyUpCallback();
            }
        }

        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [targetKey, keyDownCallback, keyUpCallback]); // rerun the effect if the targetKey changes

    return keyPressed;
}