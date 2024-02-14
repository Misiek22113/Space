import { Suspense, useRef } from "react";
import "./ThreeScene.scss";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Planet";
import Astronaut from "./Astronaut";
import Layer from "./Layer";
import { Stars, Text } from "@react-three/drei";
import HomeInfo from "../HomeInfo/HomeInfo";

const ThreeScene = () => {
  const astronautRef = useRef();

  return (
    <div className="background">
      <HomeInfo />
      <Canvas orthographic={true}>
        <Suspense fallback={null}>
          <Layer layer={0}>
            <Stars
              radius={400}
              fade={true}
              saturation={8}
              factor={0}
              depth={20}
              count={20000}
            />
            <directionalLight
              color="#ffffff"
              intensity={1}
              position={[600, -700, -2]}
            />
            <ambientLight intensity={0.2} />
            <Model
              path="./three/alien_planet.glb"
              position={[-620, 100, 0]}
              rotateDirection="right"
              scale={100}
            />
            <Model
              path="./three/lava_planet.glb"
              position={[200, -150, 0]}
              rotateDirection="left"
              scale={150}
            />
          </Layer>
          <Layer layer={1}>
            <directionalLight
              color="#ffffff"
              intensity={0.5}
              position={[-600, -700, 0]}
            />
            <ambientLight intensity={2} />
            <directionalLight
              intensity={1.2}
              color={"red"}
              position={[100, 10, 2]}
              target={astronautRef.current}
            />
            <directionalLight
              intensity={1.2}
              color={"blue"}
              position={[-100, 10, 2]}
              target={astronautRef.current}
            />
            <Astronaut ref={astronautRef} />
          </Layer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
