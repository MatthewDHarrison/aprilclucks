import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Chicken } from "./Chicken";
import { MattyText } from "./Text";

export const Scene = () => {
  return (
    <Canvas dpr={[1, 2]}>
      <ambientLight intensity={0.7} />
      <Suspense fallback={"Loading"}>
        <Chicken />
      </Suspense>
      <MattyText />
    </Canvas>
  );
};
