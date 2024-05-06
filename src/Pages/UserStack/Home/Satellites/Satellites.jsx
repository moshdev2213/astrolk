import React from 'react'
import { Button } from '@nextui-org/react'
import sats_banner from '../../../../assets/sat_banner.png'
import { useNavigate } from 'react-router-dom'

export default function Satellites() {
    const navigate = useNavigate()
    const handleExploreMore = () => {
        navigate('/user/sats')
    }
    return (
        <section className="bg-commets w-full pt-10 pb-7 px-5 md:px-10 my-5 font-titleFont"
        >
            <h1 className='capitalize text-4xl font-bold text-center text-primary-500'>Satellites</h1>
            <div className='flex flex-col gap-10 lg:flex-row items-center pt-10 md:pt-0'>
                <div className="w-full lg:w-1/2 flex flex-col gap-20 order-1 md:order-2">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-6xl font-bold">
                            Explore <span className="text-secondary capitalize">Satellites</span>
                        </h1>
                        <h2 className="text-4xl font-bold capitalize">
                            the spinners of space
                        </h2>
                        <p className="text-lg italic font-bodyFont font-semibold">
                            Satellites serve as humanity's vigilant guardians, silently orbiting above, their watchful eyes scanning the Earth's surface, monitoring weather patterns, tracking environmental changes, and facilitating global communication. They bridge the vast distances between remote corners of the world, enabling seamless connectivity and offering invaluable insights into the mysteries of the cosmos, from distant galaxies to our own planet's intricate ecosystems.
                        </p>
                        <p className="text-base font-bodyFont leading-6 tracking-wide">
                            Satellites, orbiting high above Earth, are instrumental in communication, navigation, weather monitoring, and scientific research. These artificial bodies traverse the cosmos, providing critical data, enabling global connectivity, and expanding our understanding of space, making profound impacts on industries, economies, and everyday life.
                        </p>
                        <Button onClick={handleExploreMore} variant='shadow' className='bg-secondary text-white text-xl font-bold mr-auto p-7 px-16'>Explore More</Button>
                    </div>
                </div>
                <div className="hidden z-10 w-full lg:w-1/2 md:flex justify-center items-center order-2 md:order-1 h-[400px] md:h-[600px]">
                    <img src={sats_banner} className='object-contain' alt="" />
                </div>
            </div>
        </section>
    )
}
