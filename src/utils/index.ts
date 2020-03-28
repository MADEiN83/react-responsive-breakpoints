import breakpointsDefinition, {
  IBreakpoint
} from "../core/breakpointDefinitions";

export const getViewportWidth = (): number => {
  const { innerWidth = 0 } = window;
  const {
    documentElement: { clientWidth }
  } = document;
  return Math.max(clientWidth, innerWidth);
};

export const getRelatedBreakpoint = (
  options: {
    viewportWidth?: number;
  } = {}
): IBreakpoint | undefined => {
  const { viewportWidth = getViewportWidth() } = options;

  const findPredicate = (def: IBreakpoint) =>
    viewportWidth >= def.min && viewportWidth < def.max;
  const foundBreakpoint = breakpointsDefinition.find(findPredicate);
  return foundBreakpoint;
};
