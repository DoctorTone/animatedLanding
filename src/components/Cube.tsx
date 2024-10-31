import { useRef } from "react";
import { Instance } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { SCENE } from "../utils/Config";

interface CubeProps {
  coord: number[];
}

const Cube = ({ coord }: CubeProps) => {
  const cubeRef = useRef();
  let j = 0;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    cubeRef.current!.position.set(
      SCENE.X_START + coord[1] * SCENE.ROW_INC_X,
      SCENE.WAVE_AMP * Math.sin(2 * time + coord[1] / 3),
      SCENE.Z_START + coord[0] * SCENE.ROW_INC_Z
    );
  });

  return <Instance ref={cubeRef} color="red" />;
};

export default Cube;
