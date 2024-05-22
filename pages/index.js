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
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Un chingo de cosas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div classNameName="bg-white">
        <header classNameName="absolute inset-x-0 top-0 z-50">
          <nav classNameName="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div classNameName="flex lg:flex-1">
              <a href="#" classNameName="-m-1.5 p-1.5">
                <span classNameName="sr-only">Baalerica</span>
                <Image
                  classNameName="h-8 w-auto"
                  src="/logo.png"
                  alt=""
                  width={32}
                  height={32}
                />
              </a>
            </div>
            <div classNameName="flex lg:hidden">
              <button
                type="button"
                classNameName="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span classNameName="sr-only">Open main menu</span>
                <svg
                  classNameName="h-6 w-6"
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
            <div classNameName="hidden lg:flex lg:gap-x-12">
              <a href="#" classNameName="text-sm font-semibold leading-6 text-gray-900">
                About
              </a>
              <a href="#" classNameName="text-sm font-semibold leading-6 text-gray-900">
                Services
              </a>
              <a href="#" classNameName="text-sm font-semibold leading-6 text-gray-900">
                Portfolio
              </a>
              <a href="#" classNameName="text-sm font-semibold leading-6 text-gray-900">
                Clients
              </a>
              <a href="#" classNameName="text-sm font-semibold leading-6 text-gray-900">
                Work
              </a>
              <a href="#" classNameName="text-sm font-semibold leading-6 text-gray-900">
                Statistics
              </a>
              <a href="#" classNameName="text-sm font-semibold leading-6 text-gray-900">
                Contact
              </a>
            </div>
            <div classNameName="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" classNameName="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <div classNameName="lg:hidden" role="dialog" aria-modal="true">
            <div classNameName="fixed inset-0 z-50"></div>
            <div classNameName="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div classNameName="flex items-center justify-between">
                <a href="#" classNameName="-m-1.5 p-1.5">
                  <span classNameName="sr-only">Baalerica</span>
                  <Image
                    classNameName="h-8 w-auto"
                    src="/logo.png"
                    alt=""
                    width={32}
                    height={32}
                  />
                </a>
                <button type="button" classNameName="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span classNameName="sr-only">Close menu</span>
                  <svg
                    classNameName="h-6 w-6"
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
              <div classNameName="mt-6 flow-root">
                <div classNameName="-my-6 divide-y divide-gray-500/10">
                  <div classNameName="space-y-2 py-6">
                    <a
                      href="#"
                      classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Portfolio
                    </a>
                    <a
                      href="#"
                      classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Clients
                    </a>
                    <a
                      href="#"
                      classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Work
                    </a>
                    <a
                      href="#"
                      classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Statistics
                    </a>
                    <a
                      href="#"
                      classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Contact
                    </a>
                  </div>
                  <div classNameName="py-6">
                    <a
                      href="#"
                      classNameName="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div classNameName="relative isolate px-6 pt-14 lg:px-8">
          <div
            classNameName="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              classNameName="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div classNameName="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div classNameName="text-center">
              <h1 classNameName="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hello I&apos;m Baalerica!
              </h1>
              <p classNameName="mt-6 text-lg leading-8 text-gray-600">
                Let&apos;s connect!
              </p>
              <div>
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
          </div>
          <div
            classNameName="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              classNameName="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <h2 classNameName="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Who am I?
      </h2>
      <h3 classNameName="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        I&apos;m Erica Rodríguez, I&apos;m going to become A Web Developer
      </h3>
      <p classNameName="pt-6 font-body leading-relaxed text-grey-20">
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

        <div classNameName="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <a
            href="https://refuzzed.vercel.app/"
            classNameName="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <Image
              src="/portfolio-fuzze.png"
              width={700}
              height={600}
              classNameName="w-full shadow"
              alt="portfolio image"
            />
          </a>
          <a href="https://cavycorner.vercel.app/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <Image
              src="/portfolio-cavycorner.png"
              width={700}
              height={600}
              classNameName="w-full shadow"
            />
          </a>
          <a href="https://www.microforge.me/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <Image src="/portfolio-microforge.png"
              width={700}
              height={600}
              classNameName="w-full shadow"
              alt="portfolio image"
            />
          </a>
          <a href="https://github.com/TriceraGod/Awuita"
            classNameName="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <Image src="/portfolio-ecoflow.png"
              width={700}
              height={600}
              classNameName="w-full shadow"
              alt="portfolio image"
            />
          </a>
        </div>
      </div>

      <div classNameName="bg-grey-50" id="clients">
        <div classNameName="container py-16 md:py-20">
          <div classNameName="mx-auto w-full sm:w-3/4 lg:w-full">
            <h5 classNameName="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
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


    </>
  );
}
