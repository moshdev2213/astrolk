import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import Curiosity from '../../../Components/Models/Curiosity/Curiosity'
import { useProgress, Html } from '@react-three/drei'
import { Button, Card, CardBody } from '@nextui-org/react'
import curiosityData from '../../../Utils/Data/Mars/Curiosity.json'

function Loader() {
    const { progress, active } = useProgress()
    return <Html center>{progress.toFixed(1)}</Html>
}
const handleScroll = (e) => {
    e.stopPropagation();
};

export default function MarsCuriosity() {
    return (
        <section className="bg-mars w-full pt-0 pb-7 px-5 md:px-10 flex flex-col gap-10 lg:flex-row items-center font-titleFont"
        >
            <div className="w-full lg:w-1/2 flex flex-col gap-20 order-1 md:order-1">
                <div className="flex flex-col gap-3">
                    <h4 className=" text-lg font-bold text-green-600">Status: <span className='bg-green-300 rounded-md px-2'>{curiosityData.rover.status}</span></h4>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        <span className="text-orange-400 capitalize text-ellipsis">{curiosityData.rover.name}</span>
                    </h1>
                    <h2 className="text-xl font-bold">
                        launched Date : <span>{curiosityData.rover.launch_date}</span>
                    </h2>
                    <p className="text-base font-bodyFont leading-6 tracking-wide">
                        {curiosityData.rover.description} below are the objectives of the rover
                    </p>
                    <ul className="list-disc ml-5 md:ml-16 ">
                        {curiosityData.rover.mission.objectives.map((objective, index) => (
                            <li key={index} className="mb-2 font-semibold">{objective}</li>
                        ))}
                    </ul>
                    <div className='flex flex-col md:flex-row items-center gap-3'>
                        {
                            curiosityData.rover.cameras.map((camera, index) => {
                                const cameraNumber = index + 1;
                                return (
                                    <Card shadow='sm' className="w-full h-[100px] md:h-[112px]">
                                        <CardBody>
                                            <p className='font-bold text-xl'>Camera  0{cameraNumber}</p>
                                            <p className='font-semibold text-sm opacity-65'>{camera.name}</p>
                                            {/* <p className='text-sm opacity-65 text-ellipsis'>{ camera.description}</p> */}
                                            <p className='text-sm opacity-65'>{camera.type}</p>
                                        </CardBody>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="z-10 w-full lg:w-1/2 flex justify-center items-center order-2 md:order-2 h-[400px] md:h-[600px]">
                <Canvas style={{ objectFit: 'cover' }} gl={{ antialias: true }} camera={{ position: [3, 4, 3] }} onWheel={handleScroll} >
                    <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} />
                    <directionalLight intensity={10} />
                    <ambientLight intensity={5} />
                    <Suspense fallback={<Loader />}>
                        <Curiosity />
                    </Suspense>
                    <Environment preset='sunset' />
                    <ContactShadows position={[0, 0, 0.1]} opacity={1} scale={10} blur={1} far={2} />
                </Canvas>
            </div>
        </section>
    )
}
