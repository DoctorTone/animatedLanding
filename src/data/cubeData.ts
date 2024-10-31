import { SCENE } from "../utils/Config";

const data: number[][] = [];

for (let x = 0; x < SCENE.NUM_ROWS_X; ++x) {
  for (let z = 0; z < SCENE.NUM_ROWS_Z; ++z) {
    data.push([x, z]);
  }
}

export { data };
