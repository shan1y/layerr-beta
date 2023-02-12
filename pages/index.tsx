import Head from 'next/head'
import { gsap } from 'gsap';
import { useEffect } from 'react';
import circle from "../public/Rectangle.webp"
import Image from 'next/image';
import mobileBackground from '../public/mobileBackground.webp'
import desktopBackgroud from '../public/largeBackground.png'
import join from "../public/join.webp"
import Socials from '../components/socials';
import { useState } from 'react';


export default function Home() {
  const [isLoading,setIsLoading] = useState(true)
  const [dots, setDots] = useState([0.5, 0.5, 0.5, 0.5]);

  useEffect(() => {
    if(isLoading===false){
    setTimeout(() => {
    gsap.to('.main-content', {
      duration: 1,
      opacity: 1,
      ease: "sine.out",
    })
    }, 0)}
  }, [isLoading]);

  useEffect(() => {
    setTimeout(() => {
      gsap.to('.dot1', {
        duration: 0.5,
        opacity: 1,
        ease: 'sine.out',
      });
    }, 500);
    setTimeout(() => {
      gsap.to('.dot2', {
        duration: 1,
        opacity: 1,
        ease: 'sine.out',
      });
    }, 1000);
    setTimeout(() => {
      gsap.to('.dot3', {
        duration: 1.5,
        opacity: 1,
        ease: 'sine.out',
      });
    }, 1500);
    setTimeout(() => {
      gsap.to('.dot4', {
        duration: 2,
        opacity: 1,
        ease: 'sine.out',
      });
      setIsLoading(false);
    }, 2000);
  }, [dots]);

  if (isLoading === true) {
    return (
      <div style={{ textAlign: 'center', marginTop: '40vh' }}>
        {dots.map((dot, i) => (
          <span key={i} className={`dot${i + 1}`} style={{ opacity: dot, fontSize: '50px', color: 'white' }}>
            .
          </span>
        ))}
      </div>
    );
  }



  return (
    <>
      <Head>
        <title>Join Beta</title>
        <link rel="preload" as="image" href="	https://layerr-join-beta.netlify.app/_next/image?u…atic%2Fmedia%2FRectangle.e4533d54.webp&w=828&q=75" />
        <link rel="preload" as="image" href="https://layerr-join-beta.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FmobileBackground.6aa2f645.webp&w=1920&q=75" />
        <link rel="preload" as="image" href="https://layerr-join-beta.netlify.app/_next/image?u…tic%2Fmedia%2FRectangle.e4533d54.webp&w=1920&q=75"/>
        <link rel="preload" as="image" href="	https://layerr-join-beta.netlify.app/_next/image?u…2Fstatic%2Fmedia%2Fjoin.9b5984df.webp&w=1920&q=75"/>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-black px-4 min-h-[100vh]'>
      <div className="hidden max-w-[1280px] m-auto lg:flex main-content left-animation-desktop">
        <Socials/>
      </div>
        <div className='w-full main-content flex flex-col relative'>
        <Image className='h-[200px] z-20 -translate-y-20 m-auto w-auto background-bottom-right lg:hidden'alt="gradient circle" src={circle}></Image>
        <Image className=" absolute shadow-xl mobile-waffle md:-top-[100px]  h-[600px] md:min-h-[700px] top-0 opacity-50 -translate-x-[50%] lg:hidden  translate-y-24 md:translate-y-8 lg:hidden" src={mobileBackground} alt="waffle for background"/>
        <div className="absolute waffle-shadow -translate-x-[60%] inset-0 h-[600px] md:h-[800px] top-0  rounded-lg bg-white-shadow opacity-75 lg:hidden"></div>
        <div className="absolute circle-shadow  top-[0] md:top-[0%] inset-0 h-[300px] md:h-[500px] top-0  rounded-lg bg-white-shadow opacity-75 lg:hidden"></div>
          <div className='absolute  left-animation center-div flex flex-col justify-center items-center lg:hidden'>
            <h1 className='title   max-w-[400px]  flex justify-center z-10 text-white font-semibold text-3xl md:text-4xl text-center'>Focus on Your Craft. Leave the Rest to Us.</h1>
            <p className='font-Raleway mid-content text-white  text-justify md:text-xl text-center top-[200px] flex justify-center'>Unleash the power of your art. Monetize, build your brand and connect with collectors.</p>
            <a href="https://twitter.com" className='flex w-full justify-center'><Image className='top-[400px]  w-[200px]'alt="join beta button" src={join}></Image></a>
            <div className="lg:hidden">
        <Socials/>
      </div>
        </div>
      </div>
      <div className='hidden z-10 max-w-[1280px] left-animation-desktop m-auto  main-content  relative lg:flex flex min-h-[100vh] px-[2%] items-center'>
        <div className='flex -translate-y-[40px]   gap-12 min-w-[600px] flex-col '>
        <h1 className='title lg:w-[800px] z-10 text-white font-semibold text-3xl lg:text-5xl text-left'>Focus on Your Craft,<br/> Leave the Rest to Us.</h1>
        <a href="https://twitter.com" className='flex w-full '><Image className='top-[400px]  w-[200px]'alt="join beta button" src={join}></Image></a>
        </div>
        <div className='flex flex-col min-h-[80vh] justify-center'>
        <div className=" mt-36 flex justify-center items-center  top-0 left-[45%] absolute min-h-[80vh] ">
        <Image src={desktopBackgroud} alt="waffle for background" className=' cover   w-[650px]  -z-10'></Image>
        </div>
        <p className='hidden w-[400px] mt-[540px] lg:translate-x-[10px] xl:translate-x-[50px] lg:-translate-y-[50px] xl:-translate-y-[50px] font-Raleway text-white lg:flex md:text-xl '>Unleash the power of your art. Monetize, build your brand and connect with collectors.</p>
        </div>
        </div>
      </main>

    </>
  )
}
