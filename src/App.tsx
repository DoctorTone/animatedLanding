import { Canvas } from "@react-three/fiber";
import Cubes from "./components/Cubes";
import { OrbitControls } from "@react-three/drei";
import { SCENE } from "./utils/Config";
import { DRT } from "./models/DRT";
import { Suspense } from "react";
import Text from "./UI/Text";
import { getCameraPosition } from "./utils/Utils";

const INTERACTIVE = false;

function App() {
  return (
    <>
      <Canvas camera={{ position: getCameraPosition() }}>
        <spotLight
          position={SCENE.lightPosition}
          distance={100}
          angle={SCENE.lightAngle}
          intensity={SCENE.lightIntensity}
          penumbra={1}
          decay={1}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          shadow-camera-near={1}
          shadow-camera-far={100}
        />
        <Cubes />
        <Suspense fallback={null}>
          <DRT position={[11, 7, 0]} />
        </Suspense>
        <OrbitControls
          target={SCENE.targetPosition}
          enablePan={INTERACTIVE}
          enableRotate={INTERACTIVE}
          enableZoom={INTERACTIVE}
        />
      </Canvas>
      <Text />
    </>
  );
}

export default App;
