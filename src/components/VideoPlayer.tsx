'use client'

import { useRef, useEffect } from 'react'

interface VideoPlayerProps {
    src: string
    poster?: string
    className?: string
    autoPlay?: boolean
    muted?: boolean
    loop?: boolean
    controls?: boolean
}

export default function VideoPlayer({
    src,
    poster,
    className = '',
    autoPlay = false,
    muted = true,
    loop = false,
    controls = true
}: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (autoPlay && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error('Autoplay failed:', error)
            })
        }
    }, [autoPlay])

    return (
        <div className={`relative ${className}`}>
            <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-[12px]"
                poster={poster}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                playsInline
                controls={controls}
                preload="metadata"
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
} 