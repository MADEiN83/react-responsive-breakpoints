import { useEffect, useState } from "react";

const BP = [
  {
    min: 0,
    max: 575,
    label: "xs"
  },
  {
    min: 576,
    max: 767,
    label: "sm"
  },
  {
    min: 768,
    max: 991,
    label: "md"
  },
  {
    min: 992,
    max: 1199,
    label: "lg"
  },
  {
    min: 1200,
    max: 1599,
    label: "xl"
  },
  {
    min: 1600,
    max: 9999,
    label: "xxl"
  }
];

const getVW = (): number => {
  const {
    documentElement: { clientWidth }
  } = document;
  const viewportWidth = Math.max(clientWidth, window.innerWidth || 0);
  return viewportWidth;
};

const useBreakpoints = () => {
  const [vw, setVW] = useState(getVW());
  const currentSize: any = BP.find(p => vw >= p.min && vw < p.max) || {};

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onResize = () => {
    const temp = getVW();
    setVW(temp);
  };

  return {
    vw,
    isXS: currentSize.label === "xs",
    isDM: currentSize.label === "sm",
    isMD: currentSize.label === "md",
    isLG: currentSize.label === "lg",
    isXL: currentSize.label === "xl",
    isXXL: currentSize.label === "xxl"
  };
};

export default useBreakpoints;
