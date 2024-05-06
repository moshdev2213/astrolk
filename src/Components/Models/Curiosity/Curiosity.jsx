import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

useGLTF.preload('/curiosity.glb')
export default function Curiosity() {
    const group = useRef(null)
    const { nodes, materials, animations, scene } = useGLTF('/curiosity.glb')
    const { actions, clips } = useAnimations(animations, scene)
    
    useEffect(() => {
        console.log(actions)
    }, [])
    return (
        <group ref={group} scale={1.3} >
            <primitive object={scene}/>
        </group>
    )
}
