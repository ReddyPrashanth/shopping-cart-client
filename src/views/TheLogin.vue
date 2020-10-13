<template>
    <div class="h-screen flex justify-center items-center px-16">
        <form class="w-full sm:w-1/2 lg:w-1/3 p-4 rounded shadow-xl">
            <h2 class="text-lg font-semibold text-center mb-4">User Login</h2>
            <div class="flex items-center mb-6">
                <div class="w-1/3">
                    <label class="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" for="username">Username</label>
                </div>
                <div class="w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800" type="email" id="username">
                </div>
            </div>
            <div class="flex items-center mb-6">
                <div class="w-1/3">
                    <label class="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4" for="password">Password</label>
                </div>
                <div class="w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800" type="password" id="password">
                </div>
            </div>
            <div class="flex items-center mb-6">
                <div class="w-1/3"></div>
                <div class="w-2/3">
                <a href="#" class="no-underline hover:underline text-blue-500">
                    Forgot Password
                </a>
                </div>
            </div>
            <div class="flex items-center">
                <div class="w-1/3"></div>
                <div class="w-2/3">
                <button class="btn px-6" type="button">
                    Sign In
                </button>
                </div>
            </div>
        </form>
    </div>
</template>