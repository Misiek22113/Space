import React, { useRef, useEffect } from "react";

import { useGLTF, useAnimations } from "@react-three/drei";

export default function Astronaut({ ref }: { ref: any }) {
  const group = useRef();

  const { scene, animations } = useGLTF("./three/astronaut.glb", true);
  const { actions, names } = useAnimations(animations, group);
  console.log(names);
  useEffect(() => {
    if (actions && names.length > 0) {
      actions[names[0]]!.reset().fadeIn(0.5).play();
    }
  }, []);

  return (
    <mesh ref={ref}>
      <primitive
        position={[-100, -80, -70]}
        ref={group}
        object={scene}
        dispose={null}
        scale={80}
        rotation={[0, 0.5, 0]}
      />
    </mesh>
  );
}

useGLTF.preload("./three/astronaut.glb");
