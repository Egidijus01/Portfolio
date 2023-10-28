import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf'); // Use an absolute path
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0} // Use position-y
      rotation-y={0} // Use rotation-y
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}
            camera={{fov:45, near:0.1, far:200, position: [-4,3,6]}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2} // Correct the case of Math.PI
          minPolarAngle={Math.PI / 2} // Correct the case of Math.PI
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
