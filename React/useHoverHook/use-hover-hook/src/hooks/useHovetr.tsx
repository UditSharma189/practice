import { useEffect, useRef, useState, Ref } from "react"

export const useHover = <T extends HTMLElement> (): [Ref<T | undefined>, boolean] => {
  const ref = useRef();
  const [isHovering, setHovering] = useState(false);

  useEffect(() => {
    setHovering(false);

    const element = ref.current;
    if (!element) return;

    element.addEventListener("mouseenter", () => setHovering(true));
    element.addEventListener("mouseleave", () => setHovering(false));

    return () => {
      element.removeEventListener("mouseenter", () => setHovering(true));
      element.removeEventListener("mouseenter", () => setHovering(false));
    };
  }, [ref.current]);

  return [ref, isHovering]
};