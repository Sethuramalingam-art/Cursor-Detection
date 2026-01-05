import { useCallback, useEffect, useState } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [element, setElement] = useState(null);

  const ref = useCallback((node) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;
    const updatePosition = (e) => {
      const rect = element.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    element.addEventListener("mousemove", updatePosition);

    return () => {
      element.removeEventListener("mousemove", updatePosition);
    };
  }, [element]);

  return [position, ref];
};

export default useMousePosition;
