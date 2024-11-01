import { Canvas } from "@react-three/fiber";
import Cubes from "./components/Cubes";
import { OrbitControls } from "@react-three/drei";
import { SCENE } from "./utils/Config";
import { DRT } from "./models/DRT";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Canvas camera={{ position: SCENE.cameraPosition }}>
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
          <DRT />
        </Suspense>
        <OrbitControls target={SCENE.targetPosition} />
      </Canvas>
    </>
  );
}

export default App;
