import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import data from '../../../Utils/Data/Satellites/Satallites.json'

export default function SatList() {
    return (
        <section className='bg-gradientbanner grid grid-rows-1 mt-0 my-20 mb-0 py-10 px-5 md:px-10'>
            <h1 className='capitalize text-5xl font-bold text-center text-red-600 mb-20'>Satellite List</h1>
            <div className='col-span-1 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10'>
                {
                    data.satellites.map((item) => {
                        return (
                            <Card className="py-4" key={item.name}>
                                <CardBody className="overflow-visible">
                                    <img
                                        src={item.image}
                                        className='w-full h-[250px] object-cover rounded-lg'
                                        alt=""
                                    />
                                </CardBody>
                                <div className="pb-0 pt-2 px-4 flex justify-between items-start">
                                    <div>
                                        <p className="text-tiny uppercase font-bold">Launched</p>
                                        <small className="text-default-500">{item.launch_date}</small>
                                    </div>
                                    <div>
                                        <Button className='bg-success'>active</Button>
                                    </div>
                                </div>
                                <div className='px-4 text-sm text-justify mt-3'>
                                    <h4 className="font-bold text-large">{item.name}</h4>
                                    <p className='opacity-75'>{item.description}</p>
                                </div>
                            </Card>
                        )
                    })
                }

            </div>
        </section>
    )
}
