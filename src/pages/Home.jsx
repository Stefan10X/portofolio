/* eslint-disable react/no-unescaped-entities */
import image from "../images/photoOfMe.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { ReactComponent as LogoTailwind } from "../images/tailwind-logo.svg";
import { ReactComponent as LogoPhotoshop } from "../images/Photoshop-logo.svg";
import { ReactComponent as LogoCsharp } from "../images/csharp-logo.svg";
import { ReactComponent as LogoDotnet } from "../images/Microsoft_.NET_logo.svg";
import { ReactComponent as LogoPostgreSQL } from "../images/postgresql-logo.svg";
import LogoEF from "../images/ef-logo.png";
import LogoWordPress from "../images/wordpress-logo.png";
import LogoFigma from "../images/figma-logo.png";
import Reveal from "../components/Reveal";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

function Home() {
  const [text] = useTypewriter({
    words: ["FullStack Developer", "Web Designer", "Photo Editor"],
    loop: {},
  });

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 5,
      speed: 10,
      glare: true,
      "max-glare": 0.5,
    });
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className=" bg-blue-800 text-white z-0">
        <div className="grid max-w-screen-xl h-[650px] px-4 py-8 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12 justify-center">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="flex flex-col gap-2 max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-4xl xl:text-5xl">
              <p>Hello!</p>
              <p>
                My name is <br />
                Ștefan Pisică
              </p>
            </div>
            <div className="max-w-2xl mb-6 font-light text-xl lg:mb-8  lg:text-4xl dark:text-gray-400">
              <span>I'm a </span>
              <span>{text}</span>
              <Cursor />
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex lg: items-center">
            <LazyLoadImage
              className="w-60  xl:w-80 card rounded-3xl z-0 border-4 "
              src={image}
              alt="My Image"
              effect="blur"
            />
          </div>
        </div>
      </section>
      {/* Introduction */}
      <section className="bg-color-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 justify-center">
          <div className="flex flex-col gap-8 xl:gap-16 justify-center items-center ">
            <div className="flex gap-2 items-center">
              <svg
                className="mb-2 fill-gray-800"
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="2.5em"
                width="2.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
              </svg>
              <p className="xl:text-4xl text-3xl text-gray-800 font-bold">
                About me
              </p>
            </div>

            <div className="flex flex-col xl:gap-6 gap-2 text-xl xl:text-3xl text-gray-500 ">
              <Reveal>
                <p
                  className=" "
                  style={{
                    textIndent: "50px",
                  }}
                >
                  I am a passionate full-stack developer with experience in
                  React and .NET, focused on creating complete web solutions.
                  From front-end to back-end, I am eager to continuously improve
                  my skills by developing high-performance applications and
                  websites. Additionally, I possess an analytical and objective
                  mindset, supported by a solid academic background in economic
                  informatics.
                </p>
              </Reveal>
              <Reveal>
                <div className="flex gap-4 mt-6 items-center ">
                  <p className=" font-bold text-gray-800">Email:</p>
                  <p>stefan.pisica01@gmail.com</p>
                </div>

                <div className="flex gap-4 justify-self-start ">
                  <p className="font-bold text-gray-800">Phone:</p>
                  <p>+40764589289</p>
                </div>
              </Reveal>
              <Reveal>
                <div className="mt-6 flex justify-center items-center">
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1UJ1VD5QoibckWl9WvyejOWAM8u4EV4LV/view?usp=drive_link",
                        "_blank"
                      )
                    }
                    className="xl:w-64 w-56 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg"
                  >
                    Open Resume
                  </button>
                </div>
              </Reveal>
            </div>

            <p className="justify-center text-3xl xl:text-4xl mb-2 xl:mb-6 font-bold text-gray-800 mt-6 xl:mt-14">
              Skills:
            </p>
            <Reveal>
              <div className="grid grid-cols-3 justify-items-center xl:grid-cols-4 gap-6 xl:gap-8">
                <Card
                  logo={
                    <svg
                      className="fill-yellow-300 h-16 w-16 xl:h-24 xl:w-24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="5.5em"
                      height="5.5em"
                      viewBox="0 0 512 512"
                    >
                      <title>ionicons-v5_logos</title>
                      <path d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z" />
                    </svg>
                  }
                  name="JavaScript"
                />
                <Card
                  logo={
                    <svg
                      className="fill-orange-500 h-16 w-16 xl:h-24 xl:w-24"
                      stroke="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 384 512"
                      height="5.5em"
                      width="5.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                    </svg>
                  }
                  name="HTML"
                />
                <Card
                  logo={
                    <svg
                      className="fill-blue-600 h-16 w-16 xl:h-24 xl:w-24"
                      stroke="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
                    </svg>
                  }
                  name="CSS"
                />
                <Card
                  logo={<LogoTailwind className="h-16 w-16 xl:h-24 xl:w-24" />}
                  name="Tailwind"
                />

                <Card
                  logo={
                    <svg
                      className="fill-cyan-300 h-16 w-16 xl:h-24 xl:w-24"
                      stroke="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="5.5em"
                      width="5.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
                    </svg>
                  }
                  name="React"
                />
                <Card
                  logo={<LogoCsharp className="h-16 w-16 xl:h-24 xl:w-24" />}
                  name="C#"
                />
                <Card
                  logo={<LogoDotnet className="h-16 w-16 xl:h-24 xl:w-24" />}
                  name=".NET"
                />

                <Card
                  logo={
                    <img src={LogoEF} className="h-16 w-16 xl:h-24 xl:w-24" />
                  }
                  name="Entity Framework"
                />

                <Card
                  logo={
                    <LogoPostgreSQL className="h-16 w-16 xl:h-24 xl:w-24" />
                  }
                  name="PostgreSQL"
                />
                <Card
                  logo={
                    <img
                      src={LogoWordPress}
                      className="h-16 w-16 xl:h-24 xl:w-24"
                    />
                  }
                  name="WordPress"
                />
                <Card
                  logo={
                    <img
                      src={LogoFigma}
                      className="h-16 w-16 xl:h-24 xl:w-24"
                    />
                  }
                  name="Figma"
                />
                <Card
                  logo={<LogoPhotoshop className="h-16 w-16 xl:h-24 xl:w-24" />}
                  name="Photoshop"
                />
              </div>
            </Reveal>
            <div className="flex flex-col items-center gap-6 text-xl xl:text-3xl text-gray-500 ">
              <div className="flex gap-2 items-center">
                <p className="text-3xl xl:text-4xl text-gray-800 font-bold">
                  Projects
                </p>
              </div>

              <Reveal>
                <p
                  style={{
                    textIndent: "50px",
                  }}
                >
                  In my personal projects, I’ve had the opportunity to apply a
                  wide range of technologies, including HTML, CSS, Vanilla
                  JavaScript, React, .NET, and Entity Framework. I’ve also
                  worked with various online REST APIs to enhance the
                  functionality of my applications. These projects showcase my
                  ability to build both front-end and back-end solutions,
                  demonstrating my full-stack development skills.
                </p>
              </Reveal>

              <Reveal>
                <div className="mt-6 flex justify-center items-center">
                  <Link
                    to="/projects"
                    className="text-center xl:w-64 w-56 bg-blue-500 hover:bg-blue-400 text-white
                    font-bold py-2 px-4 border-b-4 border-blue-700
                    hover:border-blue-500 rounded-lg"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Go to Projects
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <div className="mt-14 flex flex-col items-center">
                <p className="text-4xl font-bold text-gray-800">FIND ME ON</p>
                <p className="text-xl text-gray-500">
                  Feel free to connect with me
                </p>
                <div className="flex gap-10 mt-6">
                  <svg
                    onClick={() =>
                      window.open("https://github.com/Stefan10X", "_blank")
                    }
                    className="cursor-pointer border border-gray-300 border-solid rounded-lg p-2 w-14 h-14 bg-indigo-700
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300"
                    stroke="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                  <svg
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/stefan-pisica-b6110a258/",
                        "_blank"
                      )
                    }
                    className="cursor-pointer border border-gray-300 border-solid rounded-lg p-3 w-14 h-14 bg-blue-600
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300"
                    stroke="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                  <svg
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/stefan10x/",
                        "_blank"
                      )
                    }
                    className="cursor-pointer border border-gray-300 border-solid rounded-lg p-2 w-14 h-14 bg-pink-500
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300"
                    stroke="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
