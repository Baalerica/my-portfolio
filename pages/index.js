import Head from "next/head";
import Image from "next/image";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Erica Rdz</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Un chingo de cosas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-custom-purple">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Baalerica</span>
                <Image
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt=""
                  width={32}
                  height={32}
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                About
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Services
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Portfolio
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Clients
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Work
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Statistics
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Contact
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Baalerica</span>
                  <Image
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt=""
                    width={32}
                    height={32}
                  />
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
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
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Portfolio
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Clients
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Work
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Statistics
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hello I&apos;m Baalerica!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Let&apos;s connect!
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <FacebookShareButton url={"http://localhost:3000"}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <PinterestShareButton url={"http://localhost:3000"}>
                  <PinterestIcon size={32} round />
                </PinterestShareButton>
                <RedditShareButton url={"http://localhost:3000"}>
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <WhatsappShareButton url={"http://localhost:3000"}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <LinkedinShareButton url={"https://www.linkedin.com/in/erica-rodr%C3%ADguez/"}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>
            </div>
            <div className="flex-1">
              <img src="/blog-author.jpg"
                width={700}
                height={600}
                alt="Description of the image"
                className="w-full h-auto rounded-full border-2 border-purple-500"
              />
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
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Who am I?
      </h2>
      <h3 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        I&apos;m Erica Rodríguez, I&apos;m going to become A Web Developer
      </h3>
      <p className="pt-6 font-body leading-relaxed text-grey-20">
        I&apos;m an engineer in Business Management,
        currently pursuing a Masters degree in Industrial Engineering.
        Alongside my academic endeavors, Ive embarked on the exciting
        ourney of learning front-end programming. This dual focus
        reflects my dedication to expanding my skills and knowledge base in
        both business and technology domains. I am eager to leverage this
        diverse expertise to drive innovation and make meaningful contributions
        in the fields of business management and industrial engineering.
      </p>

      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Here&apos;s what I&apos;m good at
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the services I offer
      </h3>
      <div className="container py-16 md:py-20" id="portfolio">
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
        <div className="container py-16 md:py-20">
          <div className="mx-auto w-full sm:w-3/4 lg:w-full">
            <h5 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My latest clients
            </h5>
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              <span className="m-8 block">
                <Image
                  src="/logo-citc.png"
                  alt="client logo"
                  width={20}
                  height={20}
                  className="mx-auto block h-12 w-auto"
                />
              </span>
              <span className="m-8 block">
                <Image
                  src="/logo-citc.png"
                  alt="client logo"
                  width={20}
                  height={20}
                  className="mx-auto block h-12 w-auto"
                />
              </span>

              <span className="m-8 block">
                <Image
                  src="/logo-citc.png"
                  alt="client logo"
                  width={20}
                  height={20}
                  className="mx-auto block h-12 w-auto"
                />
              </span>

              <span className="m-8 block">
                <Image
                  src="/logo-citc.png"
                  alt="client logo"
                  width={20}
                  height={20}
                  className="mx-auto block h-12 w-auto"
                />
              </span>
              <span className="m-8 block">
                <Image
                  src="/logo-citc.png"
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
      <div className="container py-16 md:py-20" id="work">
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
              <div className="flex justify-center md:justify-start">
                <span className="m-8 block">
                  <Image
                    src="/logo-citc.png"
                    alt="client logo"
                    width={20}
                    height={20}
                    className="mx-auto block h-12 w-auto"
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

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
              <div className="flex justify-center md:justify-start">
                <span className="m-8 block">
                  <Image
                    src="/logo-citc.png"
                    alt="client logo"
                    width={20}
                    height={20}
                    className="mx-auto block h-12 w-auto"
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Jun 2023 - Dic 2023</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Professional
                      residences</span>
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
              <div className="flex justify-center md:justify-start">
                <span className="m-8 block">
                  <Image
                    src="/logo-citc.png"
                    alt="client logo"
                    width={20}
                    height={20}
                    className="mx-auto block h-12 w-auto"
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Jul 2021 - Dic 2022</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Warehouse
                      management</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">Manage work order inventories with Oracle PeopleSoft
                        software.</span>
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
        <div className="container">
          <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
            <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div className="w-32">
                  <Image
                    src="/logo-citc.png"
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

              <div class="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  <Image
                    src="/logo-citc.png"
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

              <div
                className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <Image
                    src="/logo-citc.png"
                    alt="client logo"
                    width={20}
                    height={20}
                    className="mx-auto block h-12 w-auto"
                  />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    8
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Happy Clients
                  </h4>
                </div>
              </div>

              <div
                className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  <Image
                    src="/logo-citc.png"
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
        <div className="container py-16 md:py-20">
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
                <span className="block pt-2 font-body text-grey-20">In proces.</span>
              </div>
            </a>
            <a href="/post" className="shadow">
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
                <span className="block pt-2 font-body text-grey-20">In process.</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="contact">
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
              (+881) 111 222 333
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
