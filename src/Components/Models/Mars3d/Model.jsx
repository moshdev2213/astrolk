import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

useGLTF.preload('/mars.glb')
export default function Model() {
    const group = useRef(null)
    const { nodes, materials, animations, scene } = useGLTF('/mars.glb')
    const { actions, clips } = useAnimations(animations, scene)
    
    useEffect(() => {
        console.log(actions)
    }, [])
    return (
        <group ref={group} scale={2} >
            <primitive object={scene}/>
        </group>
    )
}