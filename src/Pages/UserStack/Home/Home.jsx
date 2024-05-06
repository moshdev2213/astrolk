import React from 'react'
import Banner from './Banner/Banner'
import ImgGallery from './Gallery/ImgGallery'
import ExploreMars from './ExploreMars/ExploreMars'
import LatestNews from './LatestNews/LatestNews'
import Satellites from './Satellites/Satellites'

export default function Home() {
    return (
        <>
            <Banner />
            <ImgGallery />
            <ExploreMars />
            <LatestNews />
            <Satellites />
        </>
    )
}
