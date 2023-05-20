import React from 'react';

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

export const BananasLoader = () => {
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
      <Suspense fallback={null}>
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
      </Suspense>
    </Canvas>
  );
};
