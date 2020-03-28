import BreakpointTypes from "./breakpointTypes";

export interface IBreakpoint {
  min: number;
  max: number;
  label: BreakpointTypes;
}

const breakpointDefinitions: IBreakpoint[] = [
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

export default breakpointDefinitions;
