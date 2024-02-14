import { useFrame } from "@react-three/fiber";
import { FC, ReactNode, useRef } from "react";
import { Scene } from "three";

interface LayerProps {
  layer: number;
  children: ReactNode;
}

const Layer: FC<LayerProps> = ({ layer, children }) => {
  const sceneRef = useRef<Scene>(null!);

  useFrame(({ gl, camera }) => {
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(sceneRef.current, camera);
  }, layer);

  return <scene ref={sceneRef}>{children}</scene>;
};

export default Layer;
