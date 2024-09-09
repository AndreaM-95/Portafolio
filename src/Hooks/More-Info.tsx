import { useState, useEffect } from 'react';

export default function useToggleVisibility(
  descriptionId: string, // ID del primer elemento
  moreInfoId: string      // ID del segundo elemento
) {
  const [isDescriptionActive, setIsDescriptionActive] = useState(true);

  useEffect(() => {
    const descriptionElement = document.querySelector(`#${descriptionId}`);
    const moreInfoElement = document.querySelector(`#${moreInfoId}`);

    if (isDescriptionActive) {
      descriptionElement?.classList.remove('hidden');     // Muestra el primer elemento
      moreInfoElement?.classList.add('hidden');           // Oculta el segundo
    } else {
      descriptionElement?.classList.add('hidden');        // Oculta el primer elemento
      moreInfoElement?.classList.remove('hidden');        // Muestra el segundo
    }
  }, [isDescriptionActive, descriptionId, moreInfoId]);

  const toggleView = () => {
    setIsDescriptionActive(prevState => !prevState);
  };

  return { isDescriptionActive, toggleView };
}