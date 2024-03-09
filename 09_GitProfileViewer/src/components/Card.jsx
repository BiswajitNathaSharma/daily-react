import React,{useState, useEffect} from 'react'
export default function Card() {
    const [username, setUsername] = useState("github");
    const [noUser, setNoUser] = useState(false);
    const [userProfile, setUserProfile] = useState('https://avatars.githubusercontent.com/u/9919?v=4');
    const [loginName, setLoginName] = useState("Github");
    const [githubAc, setGithubAc] = useState("https://github.com/github");
    const [twiterAc, setTwiterAc] = useState("");
    const [Portfolio, setPortfolio] = useState("https://github.com/about");
    const [location, setLocation] = useState("LocatSan Francisco, CAion");
    const [locationUrl, setLocationUrl] = useState("");
    const [company, setCompany] = useState("Company")
    const [followers, setFollowers] = useState("35890")
    const [following, setFollowing] = useState("0")
    const [bio, setBio] = useState("How people build software.")
    const [repo, setRepo] = useState("489")
    const [type, setType] = useState("Organization")
    // Conditionally call the useGitApi hook only when the button is clicked
    const [data, setData] = useState(null);
    function handleSearch() {
            fetch(`https://api.github.com/users/${username}`)
                    .then(response => response.json())
                    .then(response => setData(response))
                    .catch(error => console.error('Error fetching data:', error));
                    setNoUser(false);
            }
            

    // Update state with fetched user data when it changes
useEffect(() => {
    
    if (data) {
        setNoUser(false);
        if (data.id) {
            setUserProfile(data.avatar_url);
            setLoginName(data.login);
            data.html_url === null ? setGithubAc("https://docs.github.com/can't-go"):setGithubAc(data.html_url);

            data.twitter_username === null ? setTwiterAc("https://docs.github.com/can't-go") : setTwiterAc(`https://twitter.com/${data.twitter_username}`);

            data.blog === null ? setPortfolio("https://docs.github.com/can't-go") : setPortfolio(`https://${data.blog}`);

            data.location === null ? setLocation("N/A") && setLocationUrl("#") : setLocation(data.location)
            data.company === null ? setCompany(data.organizations_url) :setCompany(data.company);

            data.bio ===null ? setBio("N/A") : setBio(data.bio);
            setFollowers(data.followers);
            setFollowing(data.following);
            setRepo(data.public_repos);
            setType(data.type);
            console.log(data);
            
        }
    if (!data.id) {
            setNoUser(true)
            console.log(data.message)
    }
}
}, [data])
useEffect(()=>{
    setNoUser(false)
},[username])
    return (
        <>
            <div className="flex w-full items-center space-x-2 md:w-full max-w-sm mx-auto my-5 ">
            <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                type="text"
                placeholder="Github User Name"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={handleSearch}
            >
                Find
            </button>
        </div>
            {noUser ? <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 min-h-96 flex justify-center items-center sm:text-2xl text-center"> <p><span className='text-gray-900 dark:text-gray-200'> {username} </span> not a user of Github... <br /> <br /> <a className='underline text-sm' href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home">Create account</a> </p></div> :
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        
            <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5 dark:bg-gray-800 dark:border-gray-700">
                <img className="w-32 h-32 rounded-full mx-auto" src={userProfile} alt="Profile picture" />
                <h2 className="text-center text-2xl font-semibold mt-3">{loginName}</h2>
                <p className="text-center text-gray-600 mt-1 dark:text-gray-200">Type: {type}</p>
                <div className="flex justify-around mt-5 flex-wrap gap-4">
                    <span className='flex items-center' id='links'>
                    <i className='bx bxl-twitter bx-sm'></i>
                    <a href={twiterAc} className="text-blue-500 hover:text-blue-700 mx-3 "> Twitter</a>
                    </span>
                    <span className='flex items-center' id='links'>
                    <i className='bx bx-world bx-sm'></i>
                    <a href={Portfolio} className="text-blue-500 hover:text-blue-700 mx-3 "> Blog</a>
                    </span>
                    <span className='flex items-center' id='links'>
                    <i className='bx bxl-github bx-sm' ></i>
                    <a href={githubAc} className="text-blue-500 hover:text-blue-700 mx-3 "> Github</a>
                    </span>
                    <span className='flex items-center'>
                    <i className='bx bxs-map-pin bx-sm'></i>
                    <a href={`https://www.google.com/maps/place/${location}`}className="text-blue-500 hover:text-blue-700 mx-3 "> {location}</a>
                    </span>
                    <span className='flex items-center'>
                    <i className='bx bxs-buildings bx-sm'></i>
                    <a href={`https://www.google.com/maps/place/${company}`} className="text-blue-500 hover:text-blue-700 mx-3 "> Company</a>
                    </span>
                    
                </div>
                <div className='flex justify-between mt-5 '>
                    <span href="" className='border-none bg-gray-800 text-white p-1 rounded-md dark:bg-gray-100 dark:text-gray-800' >followers: {followers}</span>
                    <span href="" className='border-none bg-gray-800 text-white p-1 rounded-md  dark:bg-gray-100 dark:text-gray-800'>following: {following}</span>
                    <span href="" className='border-none bg-gray-800 text-white p-1 rounded-md dark:bg-gray-100 dark:text-gray-800'>Repo Count: {repo}</span>
                </div>
                <div className="mt-5">
                    <h3 className="text-xl font-semibold">Bio</h3>
                    <p className="text-gray-600 mt-2 dark:text-gray-300">{bio}</p>
                </div>
            </div>
            
        </div>
}
        </>
    );
}
