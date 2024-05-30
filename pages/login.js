import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import React from "react";
import LoginButton from "@/components/LoginButton";

export default function Home() {
    return (
        <>
            <Head>
                <title>Log in | Erica Rdz</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Un chingo de cosas" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div
                className="h-screen w-full"
                style={{ backgroundImage: "url(/fondo-azul.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Baalerica</span>
                                <Image
                                    className="h-8 w-auto"
                                    src="/logo.png"
                                    alt="Baalerica logo"
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
                            <Link href="/" legacyBehavior>
                                <a className="text-sm font-semibold leading-6 text-gray-900">
                                    Home <span aria-hidden="true">&rarr;</span>
                                </a>
                            </Link>
                        </div>
                    </nav>
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 z-50"></div>
                        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <Link href="/" legacyBehavior>
                                    <a className="-m-1.5 p-1.5">
                                        <span className="sr-only">Baalerica</span>
                                        <Image
                                            className="h-8 w-auto"
                                            src="/logo.png"
                                            alt="Baalerica logo"
                                            width={32}
                                            height={32}
                                        />
                                    </a>
                                </Link>
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
                                        <Link href="/login" legacyBehavior>
                                            <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Home <span aria-hidden="true">&rarr;</span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Log In</h1>
                        <LoginButton />
                    </div>
                </header>
            </div>

        </>
    );
}
