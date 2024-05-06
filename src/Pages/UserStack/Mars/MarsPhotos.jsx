import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import marsService from '../../../Services/MarsRover/MarsService'
import Shimmer from '../../../Components/Skeleton/Shimmer'

export default function MarsPhotos() {
    const [loading, setLoading] = useState(false)
    const [medias, setMedias] = useState([''])
    const fetchAllMedia = async () => {
        try {
            setLoading(true)
            const result = await marsService.getAllMedia()
            setMedias(result.data.photos.slice(0, 4))
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchAllMedia()
    }, [''])
    return (
        <section className='bg-gradientbanner grid grid-rows-1 mt-0 my-20 mb-0 py-10 px-5 md:px-10'>
            <h1 className='capitalize text-5xl font-bold text-center text-primary-500 mb-20'>Rover Photos</h1>

            {
                loading ? (
                    <div className='gap-5 grid grid-cols-12 grid-rows-1 pt-10 pb-7 px-5 md:px-10 '>
                        {/* <Spinner /> */}
                        <Shimmer />
                    </div>
                ) : (
                    <div className='col-span-1 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10'>
                        {
                            medias.map((photo) => {
                                if (!photo) {
                                    return null; // Skip rendering if item is null
                                }
                                return (
                                    <Card key={photo.id} className="py-4">
                                        <CardBody className="overflow-visible">
                                            <img
                                                src={photo.img_src}
                                                className='w-full h-[300px] object-cover rounded-lg'
                                                alt=""
                                            />
                                        </CardBody>
                                        <CardHeader className="pb-0 pt-2 px-4 flex justify-between items-start">
                                            <div>
                                                <p className="text-tiny uppercase font-bold">Rover: {photo.rover.name}</p>
                                                <small className="text-default-500">Date: {photo.earth_date}</small>
                                                <h4 className="font-bold text-large">{photo.camera.full_name}</h4>
                                            </div>
                                            <div>
                                                <Button>{photo.id}</Button>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                )
                            }
                            )
                        }
                    </div>
                )
            }

        </section>
    )
}
