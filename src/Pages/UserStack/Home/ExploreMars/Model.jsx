import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
// import perseverance from '../../assets/rover/perseverance.glb'
// import curiosity from '../../assets/rover/curiosity.glb'

useGLTF.preload('/curiosity.glb')
export default function Model() {
    const group = useRef(null)
    const { nodes, materials, animations, scene } = useGLTF('/curiosity.glb')
    const { actions, clips } = useAnimations(animations, scene)
    
    useEffect(() => {
        console.log(actions)
    }, [])
    return (
        <group ref={group} scale={1.5} >
            <primitive object={scene}/>
        </group>
    )
}
