import React, { useEffect } from 'react';
import Link from 'next/link';
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/router';

const SignIn = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push('/index');
        }
    }, [status, router]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn("credentials", {
            email,
            password,
            callbackUrl: "/index",
        }).catch((error) => {
            console.error("Error al iniciar sesión:", error);
        });
    };

    const handleRegisterGoogle = () => {
        signIn("google", { callbackUrl: "/index" });
    };

    const handleRegisterGitHub = () => {
        signIn("github", { callbackUrl: "/index" });
    };

    const handleRegisterDiscord = () => {
        signIn("discord", { callbackUrl: "/index" });
    };

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>LogIn</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Login" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>


            <div className="min-h-screen bg-custom-image flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 max-w">
                        Or
                        <br />
                        {/*
                        <Link href="/signup" legacyBehavior>
                            <a className="font-medium text-blue-600 hover:text-blue-500">
                                Create an account
                            </a>
                        </Link>
    */}
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your password"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember_me"
                                        name="remember_me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            {/*
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                            </div>
    */ }
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-100 text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-3 gap-3">
                                <div>
                                    <button
                                        onClick={handleRegisterGitHub}
                                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        <img
                                            className="h-5 w-5"
                                            src="logo-github.png"
                                            alt="Github"
                                        />
                                    </button>
                                </div>
                                <div>
                                    <button
                                        onClick={handleRegisterGoogle}
                                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        <img
                                            className="h-6 w-6"
                                            src="logo-google.png"
                                            alt="Google"
                                        />
                                    </button>
                                </div>
                                <div>
                                    <button
                                        onClick={handleRegisterDiscord}
                                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                    >
                                        <img
                                            className="h-6 w-6"
                                            src="logo-discord.png"
                                            alt="Discord"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
