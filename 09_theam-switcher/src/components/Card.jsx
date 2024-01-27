import React from 'react'


export default function Card({
    imgSrc,
    userName,
    gitlink,
    followers,
    bio,
    
}) {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src= {imgSrc} alt="user image" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {userName}
                    </h5>
                    <h5 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">
                        Bio: {bio}
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">

                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">Followers: {followers}</span>
                    <a
                        href={gitlink}
                        className="text-white hover:text-gray-200 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Visit On Github
                    </a>
                </div>
            </div>
        </div>
    );
}