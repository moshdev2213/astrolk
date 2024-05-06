import React from 'react'
import iod1 from '../../../assets/IOD/iod1.jpg'
import { Button } from '@nextui-org/react'

export default function GalleryBanner() {
    return (
        <section className="bg-commets w-full pt-10 pb-7 px-5 md:px-10 flex flex-col gap-10 lg:flex-row items-center font-titleFont"
        >
            <div className="w-full lg:w-1/2 flex flex-col gap-20 order-2">
                <div className="flex flex-col gap-3">
                    <h4 className=" text-lg font-bold text-red-600">Browse The Gallery</h4>
                    <h1 className="text-6xl font-bold">
                        Browse <span className="text-green-600 capitalize">Images</span>
                    </h1>
                    <h2 className="text-4xl capitalize font-bold">
                        images that shines
                    </h2>
                    <p className="text-base font-semibold font-bodyFont leading-6 tracking-wide">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem exercitationem, voluptatum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem exercitationem, voluptatum labore, molestiae iste inventore asperiores, corrupti dicta error culpa nobis perspiciatis impedit aliquam fugit porro laboriosam sint nisi. Magni voluptates aut minus dolorem animi molestiae illum provident aspernatur, tenetur iusto soluta placeat excepturi iste rerum distinctio, voluptatum a velit.
                    </p>
                    <p className="text-base font-bodyFont leading-6 tracking-wide italic">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos laudantium harum pariatur molestiae, doloremque amet aspernatur incidunt, ducimus praesentium sequi culpa odio illum assumenda quaerat corporis nulla eius saepe aut.
                    </p>
                    <Button variant='shadow' className='bg-green-600 text-white text-xl font-bold mr-auto p-7 px-16'>Explore More</Button>
                </div>
            </div>
            <div className="z-10 w-full lg:w-1/2 flex justify-center items-center order-1 md:p-10">
                <img src={iod1} className='object-contain rounded-2xl' alt="" />
            </div>
        </section>
    )
}
