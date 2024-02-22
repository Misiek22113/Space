import { Suspense, useRef } from "react";
import "./ThreeScene.scss";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Planet";
import Astronaut from "./Astronaut";
import Layer from "./Layer";
import { Stars } from "@react-three/drei";
import COMPASS from "../../public/three/compass.svg";
import SPACE_TRAVEL from "../../public/three/space-travel.png";
import Image from "next/image";
import Button from "../Button/Button";

const ThreeScene = () => {
  const astronautRef = useRef();

  return (
    <div className="three-page-background">
      <div className="background">
        <div className="site-content">
          <div className="compass-container">
            <Image
              alt="compass"
              src={COMPASS}
              id="compass-icon"
              width={55}
              height={55}
            />
          </div>
          <div className="space-expedition-container">
            <div className="space-journey-icon-container">
              <Image
                alt="space-travel"
                src={SPACE_TRAVEL}
                id="space-journey-icon"
                width={65}
                height={65}
              />
            </div>
            <div className="journey-data">
              <p>
                <span>EXPEDITION</span> DATA
              </p>
              <p className="data-paragraph">{"> "}COMMUNICATION: ESTABLISHED</p>
              <p className="data-paragraph">
                {"> "}COORDINATES: 1.55, -0.08, -5.94 kpc
              </p>
              <p className="data-paragraph">{"> "}DESTINATION: UNKNOWN</p>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="home-content-container">
          <div className="home-typography">
            <h1>THE SPACE</h1>
            <h2>WE LIVE IN</h2>
          </div>
          <Button />
        </div>
      </div>
      <Canvas
        orthographic={true}
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 100] }}
        className="canvas-container"
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
              rotateDirection="right"
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
              rotateDirection="left"
            />
            <Model
              path="./three/cloud_planet.glb"
              position={[-800, -400, 8]}
              scale={30}
              rotateDirection="right"
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
              position={[-600, 200, 0]}
            />
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
