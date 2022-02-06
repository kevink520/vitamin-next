import Image from 'next/image';
import Header from 'src/components/Header';
import Slider from 'react-slick';
import MainTyped from 'src/components/MainTyped';

const settings = {
  className: 'main-slider',
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function MainSlider() {
  return (
    <Slider {...settings}>
      <div className="slide-inner w-full">
        <Image
          src="/images/newportlaworr-devices.png"
          width={889}
          height={560}
          alt="Thomas B. Orr, Esq."
        />
      </div>
      <div className="slide-inner w-full">
        <Image
          src="/images/janetogle-devices.png"
          width={889}
          height={560}
          alt="Janet Ogle"
        />
      </div>
      <div className="slide-inner w-full">
        <Image
          src="/images/bridge22-devices.png"
          width={889}
          height={560}
          alt="Bridge22"
        />
      </div>
      <div className="slide-inner w-full">
        <Image
          src="/images/therooseveltdoctor-devices.png"
          width={889}
          height={560}
          alt="Jack Resnick, M.D."
        />
      </div>
      <div className="slide-inner w-full">
        <Image
          src="/images/miltoncleaners-devices.png"
          width={889}
          height={560}
          alt="Milton Cleaners"
        />
      </div>
    </Slider>
  );
}
