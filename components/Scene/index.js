import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "/components/Model";

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 15 }}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <pointLight position={[0, 20, 10]} intensity={0.1} />
      <ambientLight intensity={0.2} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.1} />
      <Suspense fallback={null}>
        <Model position={[0, 0, 0]} />
        <Environment
          background={false}
          files="../images/envmap.hdr"
          preset={null}
        />
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
