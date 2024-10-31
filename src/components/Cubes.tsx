import { Instances } from "@react-three/drei";
import Cube from "./Cube";
import { data } from "../data/cubeData";

const Cubes = () => {
  return (
    <Instances>
      <boxGeometry />
      <meshStandardMaterial />
      {data.map((item, index) => (
        <Cube coord={item} key={index} />
      ))}
    </Instances>
  );
};

export default Cubes;
