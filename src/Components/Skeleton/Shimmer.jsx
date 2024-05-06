import { Card,Skeleton } from '@nextui-org/react'
import React from 'react'

export default function Shimmer() {
    return (
        <>
            <Card className="col-span-12 sm:col-span-3 h-[300px] space-y-5 p-4" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-10 rounded-lg bg-default-500"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-10 rounded-lg bg-default-500"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-96 rounded-lg bg-default-500"></div>
                </Skeleton>
            </Card>
            <Card className="col-span-12 sm:col-span-3 h-[300px] space-y-5 p-4" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-10 rounded-lg bg-default-500"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-10 rounded-lg bg-default-500"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-96 rounded-lg bg-default-500"></div>
                </Skeleton>
            </Card>
            <Card className="col-span-12 sm:col-span-3 h-[300px] space-y-5 p-4" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-10 rounded-lg bg-default-500"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-10 rounded-lg bg-default-500"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-96 rounded-lg bg-default-500"></div>
                </Skeleton>
            </Card>
            <Card className="col-span-12 sm:col-span-3 h-[300px] space-y-5 p-4" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-10 rounded-lg bg-default-500"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-10 rounded-lg bg-default-500"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-96 rounded-lg bg-default-500"></div>
                </Skeleton>
            </Card>
        </>
    )
}
