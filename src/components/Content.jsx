import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../styles/Content.css'
import Logo from '../assets/react.svg';
import GradientCircle from './GradientCircle'

import FigmaLogo from '../assets/figma.png';
import ReactLogo from '../assets/react.png';
import NodeLogo from '../assets/nodejs.png';
import CPlusPlus from '../assets/cplusplus.png';
import ElectronjsLogo from '../assets/electron-icon.png';
import JsLogo from '../assets/js.png';
import CssLogo from '../assets/css.png';
import MongoDBLogo from '../assets/MongoDB.png';
import JavaLogo from '../assets/java.png';
import PythonLogo from '../assets/python.png';
import BootStrapLogo from '../assets/bootstrap.png';
import PostGreLogo from '../assets/postgre.png';
import MySqlLogo from '../assets/mysql.png';
import GitLogo from '../assets/git.png';
import GitHubLogo from '../assets/github.png';      
import PostmanLogo from '../assets/postman.png';
import ScrumLogo from '../assets/scrum.png';                                                                                                                    

import LogoCircle from './LogoCircle';

function Content() {
  const logoList = [
    FigmaLogo,
    ReactLogo,
    NodeLogo,
    CPlusPlus,
    ElectronjsLogo,
    JsLogo,
    CssLogo,
    MongoDBLogo,
    JavaLogo,
    PythonLogo,
    BootStrapLogo,
    PostGreLogo,
    MySqlLogo,
    GitLogo,
    GitHubLogo,
    PostmanLogo,
    ScrumLogo
  ]

  const keySplines = [
    ".73,.15 .45,.92",
    ".19 .51 .75 .38"
  ]

  const pathList = [
    "M 150 110 A 225 105 0 1 0 450 110 A 225 105 0 0 0 150 110",
    "M 150 266 A 225 105 0 1 1 450 266 A 225 105 0 0 1 150 266",

    "M 125 110 A 260 105 0 1 0 475 110 A 260 105 0 0 0 125 110",
    "M 125 265 A 260 105 0 1 1 475 265 A 260 105 0 0 1 125 265",

    "M 100 110 A 300 105 0 1 0 500 110 A 300 105 0 0 0 100 110",
    "M 100 267 A 300 105 0 1 1 500 267 A 300 105 0 0 1 100 267"
  ]

  return (
    <div className='bg-[#11071F]'>
        <div className='container text-white py-5'>

            <div className="d-flex flex-column flex-md-row py-[64px]">
                <div className='position-relative d-flex justify-center align-center'>
                    <GradientCircle width={300} height={370}/>
                    <img className='position-absolute top-50 start-50 translate-middle' src={Logo} width={100} alt="logo" />
                </div>
                <div className='text-white d-flex flex-col justify-content-center text-center text-md-start'>
                    <p className='fs-5'>Hello world</p>
                    <p className='fs-2'>Judges a book
                    by its <span className='text-[#7127BA]'>cover</span>...</p>
                    <p className='fs-6'>Because if the cover does not impress you what else can?</p>
                </div>
            </div>

            <div className="px-0 px-md-[64px] pb-[64px]">
                <p className='fs-2 fs-md-1 pb-[64px]'>I'm a Software Engineer.|</p>
                <p className='fs-6 pb-2'>Currently, I'm a Software Engineer at <FontAwesomeIcon icon={faFacebook}/> Facebook,</p>
                <p className='fs-6 pb-2'>A self-taught UI/UX designer, functioning in the industry for 3+ years now.</p>
                <p className='fs-6 pb-2'>I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.</p>
            </div>

            <div className='px-0 px-md-[64px] pb-[64px]' id='project'>
                <p className='fs-1 pb-[64px]'>My project</p>

                <div className="position-relative mb-[128px] text-start">
                    <p className='text-[#9857D3] fs-6'>Featured project</p>
                    <p className='fs-4'>Example project</p>
                    <div className='mw-100 position-absolute start-0 start-md-10 start-xl-50 top-50 translate-middle-y d-inline-block z-0'>
                        <GradientCircle width={702} height={620}/>
                        <img className='position-absolute top-50 start-50 translate-middle d-none d-md-block' src={Logo} width={100} alt="logo" />
                    </div>
                    <div className='my-4 position-relative z-10 text-start d-flex justify-start' >
                        <p className='p-4 bg-secondary rounded-3 w-100 w-md-50' style={{"--bs-bg-opacity": 0.2}}>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                    </div>
                    <div className='d-flex gap-3 justify-start'>
                        <a target='_blank' href="https://github.com/bluez44/Monkeyjob-Frontend"><FontAwesomeIcon icon={faGithub} className='fs-3 me-4;'/></a>
                        <a target='_blank' href="https://monkey-job.vercel.app/"><FontAwesomeIcon icon={faLaptopCode} className='fs-3 me-4;'/></a>
                    </div>
                </div>

                <div className="position-relative my-[64px] text-end">
                    <p className='text-[#9857D3] fs-6'>Featured project</p>
                    <p className='fs-4'>Example project</p>
                    <div className='my-4 position-relative z-10 text-start d-flex justify-end' >
                        <p className='p-4 bg-secondary rounded-3 w-100 w-md-50' style={{"--bs-bg-opacity": 0.2}}>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                    </div>
                    <div className='mw-100 position-absolute end-0 end-md-25 end-xl-50 top-50 translate-middle-y d-inline-block z-0'>
                        <GradientCircle width={702} height={620}/>
                        <img className='position-absolute top-50 start-50 translate-middle d-none d-md-block' src={Logo} width={100} alt="logo" />
                    </div>
                    <div className='d-flex gap-3 justify-end'>
                        <a target='_blank' href="https://github.com/bluez44/Monkeyjob-Frontend"><FontAwesomeIcon icon={faGithub} className='fs-3 me-4;'/></a>
                        <a target='_blank' href="https://monkey-job.vercel.app/"><FontAwesomeIcon icon={faLaptopCode} className='fs-3 me-4;'/></a>
                    </div>
                </div>
            </div>

            <div className="px-[0px] pb-[64px]" id="skills">
                <p className="text-center fs-4">I'm currently looking to join a cross-functional team</p>
                <p className="text-center fs-6">that values improving people's lives through accessible design </p>

                <div className='d-flex gap-3 justify-center flex-wrap w-100 w-md-50 mx-0 mx-md-auto my-5'>
                    {logoList.map((logo, index) => (
                        <LogoCircle key={index} width={30} height={30} LogoSrc={logo} />
                    ))}
                </div>

                <div className='d-flex justify-center position-relative'>
                    <svg width="100%" height="800" viewBox="0 0 600 400">
                        <defs>
                            <linearGradient id="gradient-stroke" x1="0" y1="50" x2="600" y2="50" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="rgba(50, 15, 133, 0.4)"/> 
                                <stop offset="35%" stopColor="rgba(118, 60, 172, 0.8)"/> 
                                <stop offset="65%" stopColor="rgba(118, 60, 172, 0.8)"/> 
                                <stop offset="100%" stopColor="rgba(50, 15, 133, 0.4)"/>
                            </linearGradient>
                        </defs>

                        <path d="M 150 110 A 225 105 0 1 0 450 110" stroke="url(#gradient-stroke)" fill="transparent" strokeWidth="1"/>
                        <path d="M 125 110 A 260 105 0 1 0 475 110" stroke="url(#gradient-stroke)" fill="transparent" strokeWidth="1"/>
                        <path d="M 100 110 A 300 105 0 1 0 500 110" stroke="url(#gradient-stroke)" fill="transparent" strokeWidth="1"/>

                        {
                            logoList.map((logo, index) => {
                             const ranDur = Math.floor(Math.random() * (20 - 9 + 1)) + 9;
                             const ranKeySpline = Math.floor(Math.random() * keySplines.length);
                             const ranPath = Math.floor(Math.random() * pathList.length);

                             return   (
                                <g key={index}>
                                    <image xlinkHref={logo} width="16" height="16" style={{top: 0, left: 0}}>
                                        <animateMotion 
                                            repeatCount="indefinite" 
                                            dur={`${ranDur}s`}
                                            keyTimes="0; 0.5; 1"
                                            keySplines={`${keySplines[ranKeySpline]}; ${keySplines[ranKeySpline]}`}
                                            calcMode="spline"
                                            rotate={"auto"}
                                            path={`${pathList[ranPath]}`}
                                        />
                                    </image>
                                </g>
                            )})
                        }
                    </svg>

                    <div className='position-absolute top-50 start-50 translate-middle text-center'>
                        <p className='fs-1'>I'm currently looking to join a cross-functional team</p>
                        <p className='fs-6'>that values improving people's lives through accessible design </p>
                    </div>
                </div>



            </div>

            <div id="contact">
                <p className='fs-1 pb-[64px]'>My contact</p>
                <p className='fs-6 w-100 w-md-50 pb-4'>I'm currently looking to join a cross-functional team that values improving people's lives
                through accessible design. or have a project in mind? Let's connect.</p>
                <p className='fs-5 pb-4'>vlqvinh444@gmail.com</p>

                <div className='d-flex gap-5 justify-start'>
                    <a href="https://www.facebook.com/bluez1404" target='_blank'>
                        <FontAwesomeIcon size="2x" icon={faFacebook} />
                    </a>
                    <a href="https://www.linkedin.com/in/quang-vinh-485331286/" target='_blank'>
                        <FontAwesomeIcon size="2x" icon={faLinkedin} />
                    </a>
                    <a href="mailto:vlqvinh444@gmail.com">
                        <FontAwesomeIcon size="2x" icon={faEnvelope} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content