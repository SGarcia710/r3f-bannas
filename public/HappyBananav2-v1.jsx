/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 happyBananav2-v1.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/happyBananav2-v1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.happyBanana_1.geometry} material={materials.bodySkin} />
        <mesh geometry={nodes.happyBanana_2.geometry} material={materials.faceSkin} />
      </group>
    </group>
  )
}

useGLTF.preload('/happyBananav2-v1-transformed.glb')
