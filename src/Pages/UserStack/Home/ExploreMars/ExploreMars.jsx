import React, { Suspense } from 'react'
import { useProgress, Html } from '@react-three/drei'
import { Button } from '@nextui-org/react'
import marsrovbanner from '../../../../assets/marsrovbanner.jpg'
import { useNavigate } from 'react-router-dom'


export default function ExploreMars() {
    const navigate = useNavigate()
    const handleExploreMore = () => {
        navigate('/user/mars')
    }
    return (
        <section className="bg-mars w-full pt-10 pb-7 px-5 md:px-10  font-titleFont my-5"
        >
            <h1 className='capitalize text-4xl font-bold text-center text-primary-500'>Explore Mars</h1>
            <div className='flex flex-col gap-10 lg:flex-row items-center pt-10 md:pt-0'>
                <div className="w-full lg:w-1/2 flex flex-col gap-20 order-1">
                    <div className="flex flex-col gap-5">
                        {/* <h4 className=" text-lg font-bold text-red-600">WELCOME TO Mars</h4> */}
                        <h1 className="text-6xl font-bold">
                            Explore <span className="text-orange-400 capitalize">Mars</span>
                        </h1>
                        <h2 className="text-4xl font-bold capitalize">
                            the dusty brown
                        </h2>
                        <p className="text-base font-semibold font-bodyFont leading-6 tracking-wide">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem exercitationem, voluptatum labore, molestiae iste inventore asperiores, corrupti dicta error culpa nobis perspiciatis impedit aliquam fugit porro laboriosam sint nisi. Magni voluptates aut minus dolorem animi molestiae illum provident aspernatur, tenetur iusto soluta placeat excepturi iste rerum distinctio, voluptatum a velit.
                        </p>
                        <p className="text-base font-bodyFont leading-6 tracking-wide italic">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos laudantium harum pariatur molestiae, doloremque amet aspernatur incidunt, ducimus praesentium sequi culpa odio illum assumenda quaerat corporis nulla eius saepe aut.
                        </p>
                        <Button onClick={handleExploreMore} variant='shadow' className='bg-orange-600 text-white text-xl font-bold mr-auto p-7 px-16'>Explore More</Button>
                    </div>
                </div>
                <div className="z-10 w-full lg:w-1/2 flex justify-center items-center order-2 h-[400px] md:h-[600px]">
                    <img src={marsrovbanner} className='object-contain rounded-2xl' alt="" />
                </div>
            </div>
        </section>
    )
}
