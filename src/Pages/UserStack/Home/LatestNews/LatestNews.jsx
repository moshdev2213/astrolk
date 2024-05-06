import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import news1 from '../../../../assets/news/news1.jpg'
import news2 from '../../../../assets/news/news2.jpg'
import { useNavigate } from 'react-router-dom'

export default function LatestNews() {
    const navigate = useNavigate()
    const handleExploreMore = () => {
        navigate('/user/news')
    }
    return (
        <section className='bg-loop grid grid-rows-1 my-5 mb-0 py-10 px-5 md:px-10'>
            <h1 className='capitalize text-4xl font-bold text-center text-primary-500'>Latest News</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 my-6 mb-1 py-10'>
                <div className="flex flex-col gap-10 col-span-1">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-6xl font-bold">
                            Latest <span className="text-red-600 capitalize">News</span>
                        </h1>
                        <h2 className="text-4xl capitalize font-bold">
                            news from space
                        </h2>
                        <p className="text-base font-semibold font-bodyFont leading-6 tracking-wide">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem exercitationem, voluptatum labore, molestiae iste inventore asperiores, corrupti dicta error culpa nobis perspiciatis impedit aliquam fugit porro laboriosam sint nisi. Magni voluptates aut minus dolorem animi molestiae illum provident aspernatur, tenetur iusto soluta placeat excepturi iste rerum distinctio, voluptatum a velit.
                        </p>
                        <p className="text-base font-bodyFont leading-6 tracking-wide italic">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos laudantium harum pariatur molestiae, doloremque amet aspernatur incidunt, ducimus praesentium sequi culpa odio illum assumenda quaerat corporis nulla eius saepe aut.
                        </p>
                        <Button onClick={handleExploreMore} variant='shadow' className='bg-red-600 text-white text-lg font-bold mr-auto p-7 px-10'>Learn More</Button>
                    </div>
                </div>
                <div className='col-span-1 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                    <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex justify-between items-start">
                            <div>
                                <p className="text-tiny uppercase font-bold">Nasa News</p>
                                <small className="text-default-500">Global Reach</small>
                            </div>
                            <div>
                                <Button>Read More</Button>
                            </div>
                        </CardHeader>
                        <CardBody className="overflow-visible">
                            <img
                                src={news1}
                                className='w-full h-[400px] object-cover rounded-lg'
                                alt=""
                            />
                        </CardBody>
                    </Card>
                    <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex justify-between items-start">
                            <div>
                                <p className="text-tiny uppercase font-bold">Nasa News</p>
                                <small className="text-default-500">Global Reach</small>
                            </div>
                            <div>
                                <Button>Read More</Button>
                            </div>
                        </CardHeader>
                        <CardBody className="overflow-visible">
                            <img
                                src={news2}
                                className='w-full h-[400px] object-cover rounded-lg'
                                alt=""
                            />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    )
}
