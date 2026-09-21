import { useState } from "react";

export function useGallery(imagesCount: number) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    if (imagesCount <= 0) return;
    setSelectedIndex((prev) => (prev === 0 ? imagesCount - 1 : prev - 1));
  };

  const handleNext = () => {
    if (imagesCount <= 0) return;
    setSelectedIndex((prev) => (prev === imagesCount - 1 ? 0 : prev + 1));
  };

  const selectImage = (index: number) => {
    if (index >= 0 && index < imagesCount) {
      setSelectedIndex(index);
    }
  };

  return {
    selectedIndex,
    handlePrev,
    handleNext,
    selectImage,
  };
}
