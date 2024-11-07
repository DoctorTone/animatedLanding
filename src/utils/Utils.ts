import { Vector3 } from "three";
import { BREAKPOINTS } from "../utils/Config";

export const getCameraPosition = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width < BREAKPOINTS.SMALL) {
    return new Vector3(20, 15, 35);
  }

  if (width < BREAKPOINTS.MEDIUM && height > width) {
    return new Vector3(20, 15, 35);
  }

  if (width < BREAKPOINTS.MEDIUM) {
    return new Vector3(20, 15, 25);
  }

  return new Vector3(20, 15, 25);
};
