import {useState, useEffect} from "react";

function useDetectOutsideClick(el, initialState) {
    const [isActive, setIsActive] = useState(initialState);
    useEffect(() => {
        const pageClickEvent = (e) => {
            if (el.current !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive);
              }
        };
        if (isActive) {
            window.addEventListener('mousedown', pageClickEvent);

        }        
        return () => {
            window.removeEventListener('mousedown', pageClickEvent);

        }
    }, [isActive, el]); 
    return [isActive, setIsActive]    
};

export default useDetectOutsideClick;