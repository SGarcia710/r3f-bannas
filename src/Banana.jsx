import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export const Banana = ({ z, index, speed }) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/happyBananav2-v1-transformed.glb');
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);
  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height * 2),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, delta) => {
    if (delta < 0.01)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += delta * speed),
        -z
      );
    ref.current.rotation.set(
      (data.rX += delta / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += delta / data.spin)
    );

    // ref.current.position.set(data.x * width, (data.y += 0.02), z);
    // if (data.y > height) {
    //   data.y = -height;
    // }
    if (data.y > height * (index === 0 ? 4 : 1)) {
      data.y = -(height * (index === 0 ? 4 : 1));
    }
  });
  return (
    <group ref={ref} scale={1.2} distances={[0, 65, 80]}>
      <mesh
        geometry={nodes.happyBanana_1.geometry}
        material={materials.bodySkin}
      />
      <mesh
        geometry={nodes.happyBanana_2.geometry}
        material={materials.faceSkin}
      />
    </group>
  );
};
