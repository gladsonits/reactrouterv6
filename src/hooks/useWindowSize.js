import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowsize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    function handleWindowResize() {
      const newsize = { width: window.innerWidth, height: window.innerHeight };
      console.log(newsize);
      setWindowSize(newsize);
    }

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize, { signal });

    return () => controller.abort();
  }, []);

  return windowsize;
};

export default useWindowSize;
