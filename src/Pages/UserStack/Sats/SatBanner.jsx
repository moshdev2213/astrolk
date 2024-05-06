import { Button } from '@nextui-org/react'
import React, { Suspense } from 'react'
import { useProgress, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import Model from '../../../Components/Models/Sats/Model'


function Loader() {
    const { progress, active } = useProgress()
    return <Html center>{progress.toFixed(1)}</Html>
}
export default function SatBanner() {
    return (
        <section className="bg-commets w-full pt-10 pb-7 px-5 md:px-10 flex flex-col gap-10 lg:flex-row items-center font-titleFont"
        >
            <div className="w-full lg:w-1/2 flex flex-col gap-20 order-2 md:order-1">
                <div className="flex flex-col gap-5">
                    <h4 className=" text-lg font-bold text-red-600 capitalize">satellites matters!!!</h4>
                    <h1 className="text-6xl font-bold">
                        Explore <span className="text-secondary capitalize">Satellites</span>
                    </h1>
                    <h2 className="text-4xl font-bold capitalize">
                        the spinners of space
                    </h2>
                    <p className="text-lg italic font-bodyFont font-semibold">
                        Satellites are humanity's silent sentinels, orbiting above, casting their gaze upon the Earth, connecting distant lands, and unlocking the mysteries of the universe.
                    </p>
                    <p className="text-base font-bodyFont leading-6 tracking-wide">
                        Satellites, orbiting high above Earth, are instrumental in communication, navigation, weather monitoring, and scientific research. These artificial bodies traverse the cosmos, providing critical data, enabling global connectivity, and expanding our understanding of space, making profound impacts on industries, economies, and everyday life.
                    </p>
                    <Button variant='shadow' className='bg-secondary text-white text-xl font-bold mr-auto p-7 px-16'>Explore More</Button>
                </div>
            </div>
            <div className="z-10 w-full lg:w-1/2 flex justify-center items-center order-1 md:order-2 h-[400px] md:h-[600px]">
                {/* <img src={sats_banner} className='object-contain' alt="" /> */}
                <Canvas style={{ objectFit: 'cover' }} gl={{ antialias: true }} camera={{ position: [3, 4, 3] }} >
                    <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} />
                    <directionalLight intensity={10} />
                    <ambientLight intensity={5} />
                    <Suspense fallback={<Loader />}>
                        <Model />
                    </Suspense>
                    <Environment preset='sunset' />
                    <ContactShadows position={[0, 0, 0.1]} opacity={1} scale={10} blur={1} far={2} />
                </Canvas>
            </div>
        </section>
    )
}
