import { Vector3 } from "three";

const SCENE = {
  cameraPosition: new Vector3(20, 15, 35),
  targetPosition: new Vector3(12.5, 0, 0),
  lightPosition: new Vector3(15, 50, 7),
  lightAngle: 0.5,
  lightIntensity: 100,
  NUM_ROWS_X: 35,
  NUM_ROWS_Z: 35,
  ROW_INC_X: 2.5,
  ROW_INC_Z: 2.5,
  BOX_SIZE: 1,
  RADIUS: 0.75,
  HEIGHT: 0.75,
  SEGMENTS: 6,
  X_START: -40,
  Z_START: -45,
  WAVE_AMP: 2.5,
  CUBE_COLOUR: "hotpink",
  PLANE_SIZE_X: 100,
  PLANE_SIZE_Y: 100,
};

const BREAKPOINTS = {
  SMALL: 600,
  MEDIUM: 900,
  LARGE: 1200,
  EXTRA_LARGE: 1536,
};

export { SCENE, BREAKPOINTS };
