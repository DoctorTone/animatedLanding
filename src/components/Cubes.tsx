import { Instances } from "@react-three/drei";
import Cube from "./Cube";
import { data } from "../data/cubeData";
import { SCENE } from "../utils/Config";

const Cubes = () => {
  return (
    <Instances>
      <cylinderGeometry
        args={[SCENE.RADIUS, SCENE.RADIUS, SCENE.HEIGHT, SCENE.SEGMENTS]}
      />
      <meshStandardMaterial />
      {data.map((item, index) => (
        <Cube coord={item} key={index} />
      ))}
    </Instances>
  );
};

export default Cubes;
