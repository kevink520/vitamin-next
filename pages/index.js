import { NextSeo } from 'next-seo'
import Layout from 'src/components/Layout'
import Header from 'src/components/Header'
import MainTyped from 'src/components/MainTyped'
import MainSlider from 'src/components/MainSlider'
import Services from 'src/components/Services'
import Portfolio from 'src/components/Portfolio'
import About from 'src/components/About'
import Contact from 'src/components/Contact'

export default function Home () {
  return (
    <>
      <NextSeo
        title='Home - Vitamin Digital Media - Freelance Web/App Developer'
        description='I build websites and apps that are better looking, more enjoyable, and more useful to people.'
        canonical='https://www.digitalmedia.nyc/'
      />
      <Layout>
        <Header />
        <div id='home' className='container px-4 pb-12 mx-auto'>
          <div className='lg:flex -mx-4'>
            <div className='inline-block lg:w-1/3 px-4 lg:pt-20 xl:pt-24 mb-12'>
              <MainTyped />
            </div>
            <div className='lg:w-2/3 px-4'>
              <MainSlider />
            </div>
          </div>
        </div>
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </Layout>
    </>
  )
}
