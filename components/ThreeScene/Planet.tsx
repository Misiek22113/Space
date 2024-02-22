import React, { use, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export function Model({
  path,
  position,
  rotateDirection,
  scale,
}: {
  path: string;
  position: [number, number, number];
  rotateDirection?: "right" | "left";
  scale: number;
}) {
  const gltf = useGLTF(path);
  const planetRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (rotateDirection === "right") {
      // planetRef.current.rotation.x += 0.001;
      planetRef.current.rotation.y += 0.001;
    } else {
      // planetRef.current.rotation.x -= 0.001;
      planetRef.current.rotation.y -= 0.001;
    }
  });

  return (
    <primitive
      object={gltf.scene}
      ref={planetRef}
      scale={scale}
      position={position}
    />
  );
}

// useGLTF.preload("/alien_planet.glb");
