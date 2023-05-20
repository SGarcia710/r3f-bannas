import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState, Suspense, lazy } from 'react';
import { useGLTF, Environment } from '@react-three/drei';
import { Banana } from './Banana';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';

// function Box({ z }) {
//   const ref = useRef();
//   const { nodes, materials } = useGLTF('/happyBananav2-v1-transformed.glb');
//   const [clicked, setClicked] = useState(false);

//   const { viewport, camera } = useThree();
//   const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
//   const [data] = useState({
//     // x: Math.random() * 3,// Math.random() only gives positive values
//     // x: THREE.MathUtils.randFloatSpread(6), // this will generate a value between -3 to 3
//     x: THREE.MathUtils.randFloatSpread(2),
//     y: THREE.MathUtils.randFloatSpread(height),
//   });

//   useFrame((state, delta, frame) => {
//     // ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 2; // -1 to 1

//     // ref.current.position.z = THREE.MathUtils.lerp(
//     //   ref.current.position.z, // original value
//     //   clicked ? 1 : 0, // new value
//     //   0.1 // friction: 0 slow, 1 faster
//     // );

//     // ref.current.position.y += 0.1;
//     ref.current.position.set(data.x * width, (data.y += 0.05), z);
//     if (data.y > height / 1.5) {
//       data.y = -height / 1.5;
//     }
//   });
//   return (
//     <mesh ref={ref} onClick={() => setClicked(!clicked)}>
//       <boxGeometry />
//       <meshBasicMaterial color="orange" />
//     </mesh>
//   );
// }

// export function BananaModel(props) {
//   const { nodes, materials } = useGLTF('/simpleBanana-v1-transformed.glb');
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         geometry={nodes.banana.geometry}
//         material={materials.skin}
//         rotation={[-Math.PI / 2, 0, 0]}
//         material-emissive="orange"
//       />
//     </group>
//   );
// }

// export function HappyBananaModel(props) {
//   const { nodes, materials } = useGLTF('/happyBananav2-v1-transformed.glb');
//   return (
//     <group {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh
//           geometry={nodes.happyBanana_1.geometry}
//           material={materials.bodySkin}
//         />
//         <mesh
//           geometry={nodes.happyBanana_2.geometry}
//           material={materials.faceSkin}
//         />
//       </group>
//     </group>
//   );
// }

const NUMBER = 80;
const DEPTH = 80;
const BACKGROUND_COLOR = '#ffbf40';
const easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2));
const GL_CONFIG = {
  // alpha: false,
  antialias: false,
};
const CAMERA_CONFIG = {
  near: 0.01,
  far: DEPTH + 15,
  fov: 20,
  position: [0, 0, 10],
};

export default function App() {
  return (
    <Canvas dpr={[1, 1.5]} gl={GL_CONFIG} camera={CAMERA_CONFIG}>
      <color attach="background" args={[BACKGROUND_COLOR]} />
      {/* <ambientLight intensity={0.2} /> */}
      <spotLight
        position={[10, 20, 10]}
        penumbra={0.5} // this remove the clipping shadow bug
        intensity={2}
        color="orange"
      />
      {/* <HappyBananaModel /> */}
      {/* <BananaModel scale={0.5} /> */}
      {Array.from({ length: NUMBER }, (_, i) => (
        <Banana
          key={i}
          index={i}
          // z={-(i / NUMBER) * DEPTH - 20}
          z={Math.round(easing(i / NUMBER) * DEPTH)}
          speed={1}
        />
      ))}
      <Environment preset="sunset" />
      <EffectComposer multisampling={0}>
        <DepthOfField
          target={[0, 0, 60]}
          focalLength={0.4}
          bokehScale={14}
          height={700}
        />
      </EffectComposer>
    </Canvas>
  );
}
