import { Suspense, useRef } from "react";
import "./ThreeScene.scss";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Planet";
import Astronaut from "./Astronaut";
import Layer from "./Layer";
import { Stars } from "@react-three/drei";
import HomeInfo from "../HomeInfo/HomeInfo";
import COMPASS from "../../public/three/compass.svg";
import Image from "next/image";

const ThreeScene = () => {
  const astronautRef = useRef();

  return (
    <div className="background">
      <HomeInfo />
      <Image alt="compass" src={COMPASS} id="compass-icon"></Image>
      <Canvas
        orthographic={true}
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 100] }}
      >
        <Suspense fallback={null}>
          <Layer layer={0}>
            <Stars
              radius={100}
              fade={true}
              saturation={8}
              factor={0}
              depth={500}
              count={20000}
            />
            <directionalLight
              color="#ffffff"
              intensity={1.5}
              position={[600, -700, -2]}
            />
            <ambientLight intensity={1} />
            <Model
              path="./three/alien_planet.glb"
              position={[-700, 450, 10]}
              rotateDirection="right"
              scale={30}
            />
            <Model
              path="./three/lava_planet.glb"
              position={[100, 400, 10]}
              rotateDirection="left"
              scale={50}
            />
            <Model
              path="./three/terrestial_planet.glb"
              position={[200, -150, 0]}
              scale={90}
            />
            <Model
              path="./three/ice.glb"
              position={[800, 250, 10]}
              rotateDirection="right"
              scale={50}
            />
            <Model
              path="./three/barren.glb"
              position={[-200, -200, 0]}
              scale={50}
            />
            <Model
              path="./three/cloud_planet.glb"
              position={[-800, -400, 8]}
              scale={30}
            />
            <Model
              path="./three/dirt_planet.glb"
              position={[-620, 100, -20]}
              scale={60}
            />
            <Model
              path="./three/mustafar.glb"
              position={[700, -400, 10]}
              scale={30}
            />
          </Layer>
          <Layer layer={1}>
            <directionalLight
              color="#D7D7D7"
              intensity={3}
              position={[-600, 200, 0]}
            />
            {/* <directionalLight
              color="#ffffff"
              intensity={0.3}
              position={[600, 700, 0]}
            /> */}
            {/* <directionalLight
              intensity={1}
              color={"red"}
              position={[100, 10, 2]}
              target={astronautRef.current}
            />
            <directionalLight
              intensity={1}
              color={"blue"}
              position={[-100, 10, 2]}
              target={astronautRef.current}
            /> */}
            <Astronaut
              ref={astronautRef}
              position={[-150, -100, -100]}
              scale={100}
            />
          </Layer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
