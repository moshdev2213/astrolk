import React from 'react'
import { Button, Card, CardBody } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

export default function LeftBanner() {
    const navigate = useNavigate()
    const handleExploreMore = () => {
        navigate('/user/news')
    }
    return (
        <div className="w-full lg:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-bold text-red-600">WELCOME TO EARTH908</h4>
                <h1 className="text-6xl font-bold">
                    Explore <span className="text-primary-500 capitalize">Earth day</span>
                </h1>
                <h2 className="text-4xl font-bold capitalize">
                    A peak beyond the globe
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem deleniti ratione illo dolorum dolor sapiente placeat tempora dignissimos repudiandae recusandae esse accusantium sequi culpa amet doloribus labore veritatis voluptas soluta rem nesciunt, laudantium, reiciendis assumenda! Laboriosam, nulla reprehenderit? Est officia magni qui quisquam, nostrum cumque autem culpa? Earum, ex aliquam?
                </p>
                <p className="text-base font-bodyFont leading-6 tracking-wide italic">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sed harum ducimus laboriosam, velit in, similique ipsam earum quasi debitis nostrum non cupiditate. A hic vitae at nobis est. Ullam, deleniti porro. Quasi cum molestiae hic facere. Distinctio, reprehenderit? Ut.
                </p>
                <Button onClick={handleExploreMore} variant='shadow' className='bg-primary-400 text-white text-xl font-bold mr-auto p-7 px-16'>Explore More</Button>
            </div>
        </div>
    )
}
