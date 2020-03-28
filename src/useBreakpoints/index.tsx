import { useEffect, useState } from "react";

import { IBreakpoint } from "../core/breakpointDefinitions";
import { getViewportWidth, getRelatedBreakpoint } from "../utils";

interface IUseBreakpointArgs {
  viewportWidth: number;
  isXS: boolean;
  isSM: boolean;
  isMD: boolean;
  isLG: boolean;
  isXL: boolean;
  isXXL: boolean;
}

const useBreakpoints = (): IUseBreakpointArgs => {
  const [viewportWidth, setViewportWidth] = useState(getViewportWidth());
  const [currentBreakpoint, setCurrentBreakpoint] = useState<IBreakpoint>(
    getRelatedBreakpoint()
  );

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const tempCurrentBreakpoint = getRelatedBreakpoint({ viewportWidth });
    if (tempCurrentBreakpoint.label === currentBreakpoint.label) {
      return;
    }

    setCurrentBreakpoint(tempCurrentBreakpoint);
  }, [viewportWidth]);

  const onResize = () => {
    const newViewportWidth = getViewportWidth();
    if (viewportWidth === newViewportWidth) {
      return;
    }

    setViewportWidth(newViewportWidth);
  };

  return {
    viewportWidth,
    isXS: isOfType(currentBreakpoint, "xs"),
    isSM: isOfType(currentBreakpoint, "sm"),
    isMD: isOfType(currentBreakpoint, "md"),
    isLG: isOfType(currentBreakpoint, "lg"),
    isXL: isOfType(currentBreakpoint, "xl"),
    isXXL: isOfType(currentBreakpoint, "xxl")
  };
};

export default useBreakpoints;

const isOfType = (
  currentBreakpoint: IBreakpoint,
  wantedLabel: string
): boolean => {
  return currentBreakpoint && currentBreakpoint.label === wantedLabel;
};
