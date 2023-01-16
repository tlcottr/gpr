import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "/components/Model";
import { OrbitControls, Environment } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 15 }}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <pointLight position={[0, 20, 10]} intensity={.1} />
      <ambientLight intensity={.2} />
      <ambientLight intensity={.1} />
      <directionalLight intensity={.1} />
      <Suspense fallback={null}>
        <Model position={[0, 0, 0]} />
        <Environment preset="city" background={false}/>
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        target={[0, 0, 0]}
        autoRotate
      />
    </Canvas>
  );
};

export default Scene;
