import { useState, useEffect } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

const settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default function MainSlider () {
  const [ready, setReady] = useState(false)
  useEffect(() => setTimeout(() => setReady(true), 700), [])
  return (
    <Slider {...settings} className={`main-slider${ready ? ' ready' : ''}`} beforeChange={(oldIndex) => oldIndex === 0 && setReady(true)}>
      <div className='slide-inner w-full'>
        <Image
          src='/images/snapcpa-devices.png'
          width={889}
          height={560}
          alt='SnapCPA'
        />
      </div>
      <div className='slide-inner w-full'>
        <Image
          src='/images/newportlaworr-devices.png'
          width={889}
          height={560}
          alt='Thomas B. Orr, Esq.'
        />
      </div>
      <div className='slide-inner w-full'>
        <Image
          src='/images/janetogle-devices.png'
          width={889}
          height={560}
          alt='Janet Ogle'
        />
      </div>
      <div className='slide-inner w-full'>
        <Image
          src='/images/bridge22-devices.png'
          width={889}
          height={560}
          alt='Bridge22'
        />
      </div>
      <div className='slide-inner w-full'>
        <Image
          src='/images/therooseveltdoctor-devices.png'
          width={889}
          height={560}
          alt='Jack Resnick, M.D.'
        />
      </div>
      <div className='slide-inner w-full'>
        <Image
          src='/images/miltoncleaners-devices.png'
          width={889}
          height={560}
          alt='Milton Cleaners'
        />
      </div>
    </Slider>
  )
}
