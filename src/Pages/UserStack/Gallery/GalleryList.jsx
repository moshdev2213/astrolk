import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Spinner } from '@nextui-org/react'

import mediaService from '../../../Services/NasaMedia/MediaService'
import formatDate from '../../../Utils/Formula/Formatdate'
import Shimmer from '../../../Components/Skeleton/Shimmer'
import newsService from '../../../Services/NasaNews/NewsService'

export default function GalleryList() {
    const [loading, setLoading] = useState(false)
    const [medias, setMedias] = useState([''])
    const fetchAllMedia = async () => {
        try {
            setLoading(true)
            const result = await newsService.getAllNews()
            setMedias(result.data.collection.items.slice(0, 8))
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
        <>
            {
                loading ? (
                    <div className='gap-5 grid grid-cols-12 grid-rows-1 pt-10 pb-7 px-5 md:px-10'>
                        {/* <Spinner /> */}
                        <Shimmer/>
                    </div>
                ) : (
                    < div className="gap-5 grid grid-cols-12 grid-rows-2 pt-10 pb-7 px-5 md:px-10 " >
                        {
                            medias.map((item) => {
                                if (!item) {
                                    return null; // Skip rendering if item is null
                                }
                                return (
                                    <>
                                        {/* row 1 */}
                                        <Card className="col-span-12 sm:col-span-3 h-[300px]" key={item.data[0].nasa_id}>
                                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                                <p className="text-tiny text-white/60 uppercase font-bold">{formatDate(item.data[0].date_created)}</p>
                                                <h4 className="text-white font-medium text-large">{item.data[0].title}</h4>
                                            </CardHeader>
                                            <Image
                                                removeWrapper
                                                alt="Card background"
                                                className="z-0 w-full h-full object-cover"
                                                src={item.links[0].href}
                                            />
                                        </Card>
                                        {/* <Shimmer/> */}
                                    </>
                                )
                            })
                        }
                    </div>
                )
            }
        </>
    )
}
