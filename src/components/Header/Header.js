import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { highlightCurrentPath } from 'src/utils/navigation'
import styles from './Header.module.scss'

const links = [
  {
    text: 'Home',
    url: '/#home',
    pathname: '/#home'
  },
  {
    text: 'Services',
    url: '/#services',
    pathname: '/#services'
  },
  {
    text: 'Portfolio',
    url: '/#portfolio',
    pathname: '/#portfolio'
  },
  {
    text: 'About',
    url: '/#about',
    pathname: '/#about'
  },
  {
    text: 'Contact',
    url: '/#contact',
    pathname: '/#contact'
  }
]

export default function Header ({ dark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useRouter()
  return (
    <nav className={`w-full fixed top-0 z-50 ${dark ? 'bg-brand-black text-brand-white' : 'bg-brand-white text-brand-black'}`}>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between py-6'>
        <div className='w-full lg:w-auto flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0 mr-6'>
            <Link href='/'>
              <a className=''>
                <Image
                  src={`/images/vitamin-logo${dark ? '-2' : ''}.png`}
                  alt='Vitamin Digital Media'
                  width={112}
                  height={70}
                />
              </a>
            </Link>
          </div>
          <div className='lg:hidden flex justify-end'>
            <button
              className='toc-toggler relative w-12 h-12 outline-none'
              onClick={() => setIsMenuOpen((val) => !val)}
            >
              <span className='sr-only'>Menu</span>
              <span
                aria-hidden='true'
                className={`block absolute h-1 w-12 bg-brand-black transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-3'
                  }`}
              />
              <span
                aria-hidden='true'
                className={`layer-2 block absolute h-1 w-12 bg-brand-black transform transition duration-500 ease-in-out${isMenuOpen ? ' opacity-0' : ''
                  }`}
              />
              <span
                aria-hidden='true'
                className={`layer-3 block absolute h-1 w-12 bg-brand-black transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-3'
                  }`}
              />
            </button>
          </div>
        </div>
        <div
          className={`${isMenuOpen ? 'max-h-96' : 'max-h-0'
            } lg:max-h-full w-full lg:w-auto overflow-hidden transition-all duration-1000 flex-grow text-center lg:flex lg:justify-end lg:items-center lg:ml-auto lg:text-right`}
        >
          {links.map((link, i) => (
            <Link key={link.url} href={link.url}>
              <a
                className={`${styles.navLink
                  } block mt-4 lg:inline-block lg:mt-0${dark ? '' : ' hover:text-brand-black'}${i < links.length - 1 ? ' lg:mr-8' : ''
                  } ${highlightCurrentPath(pathname, link.pathname)}`}
              >
                {link.text}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
