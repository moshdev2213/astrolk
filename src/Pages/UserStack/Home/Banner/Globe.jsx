import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

useGLTF.preload('/nasa_earth.glb')
export default function Globe() {
    const group = useRef(null)
    const { nodes, materials, animations, scene } = useGLTF('/nasa_earth.glb')
    const { actions, clips } = useAnimations(animations, scene)
    
    useEffect(() => {
        console.log(actions)
    }, [])
    return (
        <group ref={group}  scale={0.01080}>
            <primitive object={scene}/>
        </group>
    )
}
