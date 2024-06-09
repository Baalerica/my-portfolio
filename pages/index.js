import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si hay una sesión iniciada (puedes ajustar esto según tu lógica de autenticación)
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    // Aquí iría tu lógica de cierre de sesión
    localStorage.removeItem('authToken'); // O el método que uses para manejar la sesión
    setIsAuthenticated(false);
  };

  return (
    <>
      <Head>
        <title>Portfolio | Erica Rdz</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Un chingo de cosas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div
        className="h-screen w-full"
        style={{
          backgroundImage: "url(/fondo-azul.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Baalerica</span>
                <Image className="h-8 w-auto" src="/logo.png" alt="" width={32} height={32} />
              </a>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#about" className="text-sm font-semibold leading-6 text-white">
                About
              </a>
              <a href="#services" className="text-sm font-semibold leading-6 text-white">
                Services
              </a>
              <a href="#portfolio" className="text-sm font-semibold leading-6 text-white">
                Portfolio
              </a>
              <a href="#clients" className="text-sm font-semibold leading-6 text-white">
                Projects
              </a>
              <a href="#work" className="text-sm font-semibold leading-6 text-white">
                Work
              </a>
              <a href="#statistics" className="text-sm font-semibold leading-6 text-white">
                Statistics
              </a>
              <a href="#contact" className="text-sm font-semibold leading-6 text-white">
                Contact
              </a>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link href="/accounting" legacyBehavior>
                  <a className="text-sm font-semibold leading-6 text-white">
                    Hire me! <span aria-hidden="true">&rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">

              {isAuthenticated ? (
                <button onClick={handleLogout} className="text-sm font-semibold leading-6 text-white">
                  Logout <span aria-hidden="true">&rarr;</span>
                </button>
              ) : (
                <Link href="/login" legacyBehavior>
                  <a className="text-sm font-semibold leading-6 text-white">
                    Log in <span aria-hidden="true">&rarr;</span>
                  </a>
                </Link>
              )}
            </div>
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div>

            {menuOpen && (
              <div className="lg:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-50 bg-black opacity-50" onClick={() => setMenuOpen(false)}></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Baalerica</span>
                      <Image className="h-8 w-auto" src="/logo.png" alt="" width={32} height={32} />
                    </a>

                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        <a
                          href="#about"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          About
                        </a>
                        <a
                          href="#services"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Services
                        </a>
                        <a
                          href="#portfolio"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Portfolio
                        </a>
                        <a
                          href="#clients"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Clients
                        </a>
                        <a
                          href="#work"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Work
                        </a>
                        <a
                          href="#statistics"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Statistics
                        </a>
                        <a
                          href="#contact"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Projects
                        </a>
                        <div className="py-6">
                          <Link href="/accounting" legacyBehavior>
                            <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                              Hire me! <span aria-hidden="true">&rarr;</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="py-6">
                        <Link href="/login" legacyBehavior>
                          <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Log in <span aria-hidden="true">&rarr;</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>


        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex items-center">
            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                Hello I&apos;m Baalerica!
              </h1>
              <p className="mt-6 text-lg leading-8 text-black">
                Let&apos;s connect!
              </p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                {/* <!-- Github --> */}
                <a href="https://github.com/Baalerica" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    style={{ color: "#000000" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* <!-- Facebook --> */}
                <a href="https://www.facebook.com/ericardzb" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    style={{ color: "#000000" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

                {/* <!-- Linkedin --> */}
                <a href="www.linkedin.com/in/erica-rodríguez" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    style={{ color: "#000000" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img src="/blog-author.jpg"
                width={700}
                height={600}
                alt="Description of the image"
                className="rounded-full border-8 border-primary shadow-xl" />
            </div>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row mx-auto">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <div className="p-5">
              <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl pb-4">
                Who am I?
              </h2>
              <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl pb-4">
                I&apos;m Erica Rodr&apos;guez, I&apos;m going to become A Web Developer
              </h4>
              <p className="pt-6 font-body leading-relaxed text-grey-20 pb-4">
                I&apos;m an engineer in Business Management,
                currently pursuing a Masters degree in Industrial Engineering.
                Alongside my academic endeavors, Ive embarked on the exciting
                journey of learning front-end programming. This dual focus
                reflects my dedication to expanding my skills and knowledge base in
                both business and technology domains. I am eager to leverage this
                diverse expertise to drive innovation and make meaningful contributions
                in the fields of business management and industrial engineering.
              </p>


              <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
                  <p className="font-body text-lg font-semibold uppercase text-grey-20 mb-4 sm:mb-0 sm:mr-4">
                    Connect with me
                  </p>
                </div>
                <div className="flex gap-4 justify-center">
                  {/* <!-- Github --> */}
                  <a href="https://github.com/Baalerica" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      style={{ color: "#333" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  {/* <!-- Facebook --> */}
                  <a href="https://www.facebook.com/ericardzb" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      style={{ color: "#1877f2" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>

                  {/* <!-- Linkedin --> */}
                  <a href="www.linkedin.com/in/erica-rodríguez" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="currentColor"
                      style={{ color: "#0077b5" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>

            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  HTML & CSS
                </h4>
                <div className="w-full h-2 bg-blue-500 my-4 shadow-md rounded-lg transition-opacity duration-300 opacity-75 hover:opacity-100"></div>
                <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ width: "98%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Python</h4>
                <div className="w-full h-2 bg-blue-500 my-4 shadow-md rounded-lg transition-opacity duration-300 opacity-75 hover:opacity-100"></div>
                <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ width: "98%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  Javascript
                </h4>
                <div className="w-full h-2 bg-blue-500 my-4 shadow-md rounded-lg transition-opacity duration-300 opacity-75 hover:opacity-100"></div>
                <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ width: "98%" }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Figma</h4>
                <div className="w-full h-2 bg-blue-500 my-4 shadow-md rounded-lg transition-opacity duration-300 opacity-75 hover:opacity-100"></div>
                <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ width: "91%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20 mx-auto" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here&apos;s what I&apos;m good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the services I offer
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow hover:bg-custom-purple2">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/icon-development-white.svg"
                  alt="development icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/icon-development-black.svg"
                  alt="development icon"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                WEB DEVELOPMENT
              </h3>

            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-custom-purple2">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/icon-content-white.svg"
                  alt="content marketing icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/icon-content-black.svg"
                  alt="content marketing icon"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Project Management
              </h3>

            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-custom-purple2">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/icon-mobile-white.svg"
                  alt="Mobile Application icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/icon-mobile-black.svg"
                  alt="Mobile Application icon"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Social media management
              </h3>

            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-custom-purple2">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/icon-email-white.svg"
                  alt="Email Marketing icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/icon-email-black.svg"
                  alt="Email Marketing icon"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Accounting services
              </h3>

            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-custom-purple2">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/icon-design-white.svg"
                  alt="Theme Design icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/icon-design-black.svg"
                  alt="Theme Design icon"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Web Design
              </h3>

            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-custom-purple2">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <Image
                  src="/icon-graphics-white.svg"
                  alt="Graphic Design icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="block group-hover:hidden">
                <Image
                  src="/icon-graphics-black.svg"
                  alt="Graphic Design icon"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Consultancy
              </h3>

            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20 mx-auto" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here&apos;s what I have done with the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <a
            href="https://refuzzed.vercel.app/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <Image
              src="/portfolio-fuzze.png"
              width={700}
              height={600}
              className="w-full shadow"
              alt="portfolio image"
            />
          </a>
          <a href="https://cavycorner.vercel.app/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <Image
              src="/portfolio-cavycorner.png"
              width={700}
              height={600}
              className="w-full shadow"
            />
          </a>
          <a href="https://www.microforge.me/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <Image src="/portfolio-microforge.png"
              width={700}
              height={600}
              className="w-full shadow"
              alt="portfolio image"
            />
          </a>
          <a href="https://github.com/TriceraGod/Awuita"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <Image src="/portfolio-ecoflow.png"
              width={700}
              height={600}
              className="w-full shadow"
              alt="portfolio image"
            />
          </a>
        </div>
      </div>

      <div className="bg-grey-50" id="clients">
        <div className="container py-16 md:py-20 mx-auto">
          <div className="mx-auto w-full sm:w-3/4 lg:w-full">
            <h5 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My latest projects
            </h5>
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              <span className="m-8 block">
                <Image
                  src="/icon-cavy.png"
                  alt="client logo"
                  width={20}
                  height={20}
                  className="mx-auto block h-12 w-auto"
                />
              </span>
              <span className="m-8 block">
                <Image
                  src="/icon-fuzze.png"
                  alt="client logo"
                  width={20}
                  height={20}
                  className="mx-auto block h-12 w-auto"
                />
              </span>

              <span className="m-8 block">
                <Image
                  src="/icon-microforge.png"
                  alt="client logo"
                  width={20}
                  height={20}
                  className="mx-auto block h-12 w-auto"
                />
              </span>

              <span className="m-8 block">
                <Image
                  src="/icon-ecoflow.png"
                  alt="client logo"
                  width={20}
                  height={20}
                  className="mx-auto block h-12 w-auto"
                />
              </span>
              <span className="m-8 block">
                <Image
                  src="/icon-cyberguard.png"
                  alt="client logo"
                  width={20}
                  height={20}
                  className="mx-auto block h-12 w-auto"
                />
              </span>
              <span className="m-8 block">
                <Image
                  src="/icon-optimia.png"
                  alt="client logo"
                  width={20}
                  height={20}
                  className="mx-auto block h-12 w-auto"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-16 md:py-20 mx-auto" id="work">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My work experience
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here&apos;s what I did before freelancing
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex flex-col items-center md:items-start">
                <span className="m-8 block">
                  <Image
                    src="/logo-imbera.png"
                    alt="client logo"
                    width={200}
                    height={200}
                    className="mx-auto block h-12 w-auto"
                  />
                </span>
                <div className="w-full h-2 bg-blue-500 my-4 shadow-md rounded-lg transition-opacity duration-300 opacity-75 hover:opacity-100"></div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Jul 2021 - Present</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Accounting</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">Tax return and SAT documents</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex flex-col items-center md:items-start">
                <span className="m-8 block">
                  <Image
                    src="/logo-citc.png"
                    alt="client logo"
                    width={200}
                    height={200}
                    className="mx-auto block h-12 w-auto"
                  />
                </span>
                <div className="w-full h-2 bg-blue-500 my-4 shadow-md rounded-lg transition-opacity duration-300 opacity-75 hover:opacity-100"></div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Jun 2024 - Present</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Cluster Administrator</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">Managed accounting and organized events.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex flex-col items-center md:items-start">
                <span className="m-8 block">
                  <Image
                    src="/logo-imbera.png"
                    alt="client logo"
                    width={200}
                    height={200}
                    className="mx-auto block h-12 w-auto"
                  />
                </span>
                <div className="w-full h-2 bg-blue-500 my-4 shadow-md rounded-lg transition-opacity duration-300 opacity-75 hover:opacity-100"></div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Jul 2021 - Dic 2022</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Warehouse management</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">Manage work order inventories with Oracle PeopleSoft software.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>


      <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
        style={{ backgroundImage: "url(/experience-figure.png)" }}
        id="statistics">

        <div className="container mx-auto">
          <div className="w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-25 xl:py-35">
            <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div className="w-32">
                  <Image
                    src="/icon-project.svg"
                    alt="client logo"
                    width={20}
                    height={20}
                    className="mx-auto block h-12 w-auto"
                  />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    5
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Participation in hackathons
                  </h4>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <Image
                    src="/icon-award.svg"
                    alt="client logo"
                    width={20}
                    height={20}
                    className="mx-auto block h-12 w-auto"
                  />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    2
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    School competitions won
                  </h4>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <Image
                    src="/icon-happy.svg"
                    alt="client logo"
                    width={20}
                    height={20}
                    className="mx-auto block h-12 w-auto"
                  />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    80
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Happy Clients
                  </h4>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <Image
                    src="/icon-puzzle.svg"
                    alt="client logo"
                    width={20}
                    height={20}
                    className="mx-auto block h-12 w-auto"
                  />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    99
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Bugs Fixed
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20 mx-auto">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to play
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest scores!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
            <a href="https://www.op.gg/summoners/lan/Val%C3%A9rica-LAN" class="shadow">
              <div style={{ backgroundImage: "url(/steam-erythea.png)" }}

                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">League of Legends</span>
                <span className="block pt-2 font-body text-grey-20">Op.gg.</span>
              </div>
            </a>
            <a href="https://steamcommunity.com/id/Erythea" className="shadow">
              <div style={{ backgroundImage: "url(/steam-erythea.png)" }}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">Steam</span>
                <span className="block pt-2 font-body text-grey-20">Add me.</span>
              </div>
            </a>
            <a href="https://osu.ppy.sh/users/14718815" className="shadow">
              <div style={{ backgroundImage: "url(/osu.png)" }}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">Ossu!</span>
                <span className="block pt-2 font-body text-grey-20">Follow me.</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20 mx-auto" id="contact">
        <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here&apos;s a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
          <p className="font-body text-grey-10">
            Feel free to tell me what you want or contact me.
          </p>
        </div>
        <form className="mx-auto w-full pt-10 sm:w-3/4">
          <div className="flex flex-col md:flex-row">
            <input class="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
              placeholder="Name" type="text" id="name" />
            <input
              className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
              placeholder="Email" type="text" id="email" />
          </div>
          <textarea className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
            placeholder="Message" id="message" cols="30" rows="10"></textarea>
          <button
            className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
            Send
            <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
          </button>
        </form>
        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <i className="bx bx-phone text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Phone
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              (+614) 3r1c4
            </p>
          </div>
          <div
            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-envelope text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Email
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              erica_rdzb@hotmail.com
            </p>
          </div>
          <div
            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-map text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Address
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              Chihuahua Chih.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}
