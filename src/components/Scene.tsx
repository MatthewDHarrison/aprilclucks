import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Chicken } from "./Chicken";
import { TextGroup } from "./TextGroup";

interface ISceneProps {
  width: number;
}
export const Scene = ({ width }: ISceneProps) => {
  return (
    <Canvas dpr={[1, 2]}>
      <ambientLight intensity={0.7} />
      <directionalLight color="white" position={[0, 0, 5]} intensity={2.5}/>
      <Suspense fallback={"Loading"}>
        <Chicken width={width} />
      </Suspense>
      <TextGroup />
    </Canvas>
  );
};
