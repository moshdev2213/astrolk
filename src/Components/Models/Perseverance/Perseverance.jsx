import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

useGLTF.preload('/perseverance.glb')
export default function Perseverance() {
    const group = useRef(null)
    const { nodes, materials, animations, scene } = useGLTF('/perseverance.glb')
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
