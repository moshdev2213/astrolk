import React, { useEffect, useState } from 'react'

import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Image, Spinner } from '@nextui-org/react'
import formatDate from '../../../Utils/Formula/Formatdate'
import Shimmer from '../../../Components/Skeleton/Shimmer'
import mediaService from '../../../Services/NasaMedia/MediaService'

export default function NewsList() {
    const [loading, setLoading] = useState(false)
    const [news, setNews] = useState([''])
    const fetchAllNews = async () => {
        try {
            setLoading(true)
            const result = await mediaService.getAllMedia()
            setNews(result.data.collection.items.slice(0, 6))
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchAllNews()
        // console.log(news[0].data[0].nasa_id)
    }, [''])

    return (
        <>
            {
                loading ? (
                    <div className='gap-5 grid grid-cols-12 grid-rows-1 pt-10 pb-7 px-5 md:px-10 '>
                        {/* <Spinner /> */}
                        <Shimmer/>
                    </div>
                ) : (
                    <div className="gap-5 grid grid-cols-12 grid-rows-2 pt-10 pb-7 px-5 md:px-10 ">
                        {
                            news.map((item) => {
                                if (!item) {
                                    return null; // Skip rendering if item is null
                                }
                                return (
                                    <>
                                        <Card className="col-span-12 sm:col-span-4 h-[300px]" key={item.data[0].nasa_id}>
                                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                                <p className="text-tiny text-white/60 uppercase font-bold">Center :{item.data[0].center}</p>
                                                <h4 className="text-white/90 font-medium text-xl">{item.data[0].title}</h4>
                                            </CardHeader>
                                            <Image
                                                removeWrapper
                                                alt="Relaxing app background"
                                                className="z-0 w-full h-full object-cover"
                                                src={item.links[0].href}
                                            />
                                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                                <div className="flex flex-grow gap-2 items-center">
                                                    <div className="flex flex-col">
                                                        <p className="text-tiny text-white/60">Creators</p>
                                                        <p className="text-tiny text-white">{item.data[0].secondary_creator}</p>
                                                    </div>
                                                </div>
                                                <p className='bg-red-600 text-white p-1 rounded-md text-tiny font-semibold'>{ formatDate(item.data[0].date_created)}</p>
                                            </CardFooter>
                                        </Card>
                                    </>
                                )
                            })
                        }
                    </div >
                )
            }
        </>
    )
}
