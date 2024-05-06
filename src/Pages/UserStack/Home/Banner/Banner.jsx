import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

export default function Banner() {

    return (
        <>
            <section className="bg-earth w-full pt-10 pb-7 px-5 md:px-10 flex flex-col gap-10 lg:flex-row items-center font-titleFont"
            >
                <LeftBanner />
                <RightBanner />
            </section>
            {/* <Divider /> */}
           
        </>
    )
}
