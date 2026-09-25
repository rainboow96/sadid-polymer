import { useCallback, useEffect, useMemo, useState } from "react";

function wrapIndex(index: number, count: number) {
  if (count <= 0) return 0;
  // wrap امن برای اعداد منفی هم
  return ((index % count) + count) % count;
}

type UseGalleryOptions = {
  initialIndex?: number;
};

export function useGallery(imagesCount: number, options?: UseGalleryOptions) {
  const initialIndex = options?.initialIndex ?? 0;

  const [selectedIndex, setSelectedIndex] = useState(() =>
    wrapIndex(initialIndex, imagesCount)
  );

  // همگام‌سازی وقتی imagesCount تغییر می‌کند
  useEffect(() => {
    setSelectedIndex((prev) => wrapIndex(prev, imagesCount));
  }, [imagesCount]);

  const canNavigate = imagesCount > 1;

  const handlePrev = useCallback(() => {
    if (!canNavigate) return;
    setSelectedIndex((prev) => wrapIndex(prev - 1, imagesCount));
  }, [canNavigate, imagesCount]);

  const handleNext = useCallback(() => {
    if (!canNavigate) return;
    setSelectedIndex((prev) => wrapIndex(prev + 1, imagesCount));
  }, [canNavigate, imagesCount]);

  const selectImage = useCallback(
    (index: number) => {
      if (imagesCount <= 0) return;
      setSelectedIndex(wrapIndex(index, imagesCount));
    },
    [imagesCount]
  );

  return useMemo(
    () => ({
      selectedIndex,
      canNavigate,
      handlePrev,
      handleNext,
      selectImage,
    }),
    [selectedIndex, canNavigate, handlePrev, handleNext, selectImage]
  );
}
