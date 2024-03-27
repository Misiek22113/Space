import { Suspense, useRef } from "react";
import "./ThreeScene.scss";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Planet";
import Astronaut from "./Astronaut";
import Layer from "./Layer";
import { Loader, Stars, useGLTF } from "@react-three/drei";
import SceneTypography from "./SceneTypography";
import CustomLoader from "./Loader";

const ThreeScene = () => {
  const astronautRef = useRef();

  return (
    <>
      <div className="three-page-background">
        <SceneTypography />
        <Canvas
          orthographic={true}
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 100] }}
          className="canvas-container"
        >
          <Suspense fallback={null}>
            <Layer layer={0}>
              {/* <Stars
                radius={100}
                fade={true}
                saturation={8}
                factor={0}
                depth={500}
                count={20000}
              /> */}
              <directionalLight
                color="#ffffff"
                intensity={1.5}
                position={[600, -700, -2]}
              />
              <ambientLight intensity={1} />
              <Model
                path="./three/terrestrial_planet.glb"
                position={[-200, -150, 0]}
                scale={90}
                rotateDirection="right"
                rotate={[0, 0, 0]}
              />
              <Model
                path="./three/ice.glb"
                position={[800, 250, 10]}
                rotateDirection="right"
                scale={50}
              />
              <Model
                path="./three/dirt_planet.glb"
                position={[-620, 100, -20]}
                scale={60}
                rotateDirection="left"
              />
              <Model
                path="./three/mustafar.glb"
                position={[700, -400, 10]}
                scale={30}
                rotateDirection="left"
              />
            </Layer>
            <Layer layer={1}>
              <directionalLight
                color="#D7D7D7"
                intensity={3}
                position={[600, 200, 0]}
              />
              <directionalLight
                color="#D7D7D7"
                intensity={0.3}
                position={[-600, -200, 0]}
              />
              <Astronaut
                ref={astronautRef}
                position={[150, -100, -100]}
                scale={100}
              />
            </Layer>
          </Suspense>
        </Canvas>
        <CustomLoader />
      </div>
    </>
  );
};

useGLTF.preload("./three/mustafar.glb");
useGLTF.preload("./three/terrestrial_planet.glb");
useGLTF.preload("./three/ice.glb");
useGLTF.preload("./three/dirt_planet.glb");

export default ThreeScene;
