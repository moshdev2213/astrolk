import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { useProgress, Html } from '@react-three/drei'
import Globe from './Globe'

function Loader() {
    const { progress, active } = useProgress()
    return <Html center>{progress.toFixed(1)}</Html>
}

export default function RightBanner() {
    return (
        <div className="w-full lg:w-1/2 flex justify-center items-center h-[400px] md:h-[600px]">
            {/* <img
                className="z-10"
                src={imgbanner}
                alt="bannerImg"
            /> */}
            <Canvas camera={{ position: [0, 0, 10] }}>
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} />
                <directionalLight intensity={4} />
                <ambientLight intensity={4} />
                <Suspense fallback={<Loader />}>
                    <Globe />
                </Suspense>
                <Environment preset='apartment' />
                <ContactShadows position={[1, 1, 1]} opacity={1} scale={10} blur={1} far={2} />
            </Canvas>
        </div>
    )
}
