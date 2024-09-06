import { useState, useEffect } from 'react';

export default function useToggleVisibility() {
    const [isDescriptionActive, setIsDescriptionActive] = useState(true);

    useEffect(() => {
        const descriptionElement = document.querySelector('#description');
        const moreInfoElement = document.querySelector('#more-info');

        if (isDescriptionActive) {
            descriptionElement?.classList.remove('hidden');     // Muestra el elemento
            moreInfoElement?.classList.add('hidden');           // Oculta el otro
        } else {
            descriptionElement?.classList.add('hidden');        // Oculta este
            moreInfoElement?.classList.remove('hidden');        // Muestra el otro
        }
    }, [isDescriptionActive]);

    const toggleView = () => {
        setIsDescriptionActive(prevState => !prevState);
    };

    return { isDescriptionActive, toggleView };
}