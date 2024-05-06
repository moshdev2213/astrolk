import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import aiodService from '../../../../Services/AIOD/AIODService'

export default function ImgGallery() {
    const [loading, setLoading] = useState(false)
    const [medias, setMedias] = useState({})
    const fetchAllMedia = async () => {
        try {
            setLoading(true)
            const result = await aiodService.getAllMedia()
            setMedias(result.data)
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
        <section className='bg-gradientbanner grid grid-rows-1 my-5 py-10 px-5 md:px-10'>
            <h1 className='capitalize text-4xl font-bold text-center text-primary-500'>Featured Gallery</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-6 pt-10'>
                <Card className="py-4 order-2 md:order-1">
                    <CardHeader className="pb-0 pt-2 px-4 flex justify-between items-start">
                        <div>
                            <p className="text-base uppercase font-bold">Date Published</p>
                            <small className="text-default-500 text-sm ">{medias.date}</small>
                        </div>
                        <div>
                            <Button>See More</Button>
                        </div>
                    </CardHeader>
                    <CardBody className="overflow-visible">
                        <img
                            src={medias.hdurl}
                            className='w-full h-[450px] object-cover rounded-lg'
                            alt=""
                        />
                    </CardBody>
                </Card>
                <div className="flex flex-col gap-40 order-1 md:order-2">
                    <div className="flex flex-col gap-5">
                        <h4 className=" text-lg font-bold text-red-600">TODAY</h4>
                        <h1 className="text-6xl font-bold">
                            <span className="text-success-500 capitalize">Image Of The Day</span>
                        </h1>
                        <h2 className="text-3xl font-bold">
                            {medias.title}
                        </h2>
                        <p className="text-base font-bodyFont leading-6 tracking-wide">
                            {medias.explanation}
                        </p>
                        <p className='font-bodyFont italic text-sm'>
                            Through the NASA Image of the Day program, viewers are invited on a journey of discovery, where they can marvel at the intricate details of distant galaxies, witness the majesty of planetary landscapes, and appreciate the ingenuity of space exploration technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
