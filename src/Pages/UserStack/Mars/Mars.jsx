import React from 'react'
import MarsBanner from './MarsBanner'
import MarsCuriosity from './MarsCuriosity'
import MarsPerseverance from './MarsPerseverance'
import MarsPhotos from './MarsPhotos'

export default function Mars() {
    return (
        <>
            <MarsBanner />
            <h1 className='capitalize text-4xl font-bold text-center text-primary-500'>The Mars Rovers</h1>
            <MarsPerseverance />
            <MarsCuriosity />
            <MarsPhotos/>
        </>
    )
}
