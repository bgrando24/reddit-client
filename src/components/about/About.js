
export function About() {
    return (
        <div className="flex flex-col items-center dark:text-white">
            <h1 className="text-2xl text-blue-500 font-bold my-5">Seenit</h1>
            <h2 className="italic mb-10">A front-end project by Brandon Grando</h2>
            <p className="max-w-[80%] text-sm mb-5">
                Seenit is a clone of the Reddit web client. 

                It consumes the publically available&nbsp; 
                <a className="text-blue-500 underline" href="https://www.reddit.com/dev/api/" target="_blank">Reddit API</a> 
                &nbsp;to display the 'popular' subreddits page
                as well as the subreddit search page. The API data is retrieved via a GET request and responds with a JSON payload.
            </p>

            <p className="max-w-[80%] text-sm">
                    'Seenit' is built using HTML, Tailwind/CSS, JavaScript and React, with development occuring in a Node environment. It leverages Tailwind for the bulk of the
                     styling for components and pages, including the light/dark modes (which also uses JavaScript for the logic behind switching 
                     from light and dark mode). Vanilla CSS is used for custom styling outside of Tailwind.
            </p>

            <p className="max-w-[80%] text-sm mb-5">
                    Functional React (v6) is used to make Seenit into a single-page web application (SPA) through the use of React Router. 
                    Seenit also makes use of React state and hooks to provide a dynamic experience. 
                    For example, the useEffect hook is utilised in fetching a specific subreddit's posts and state is used to store
                     the posts from the API response. Additionally, vanilla JavaScript is used for scripting and logic functions. 
            </p>

            <p className="max-w-[80%] text-sm mb-5">
                    The purpose of this project is to demonstrate both my front-end development skills and my knowledge in utilising a 
                    3rd party API.
            </p>

            <p className="max-w-[80%] text-sm my-5">
                    Thanks for checking out Seenit!
            </p>

            <p className="max-w-[80%] text-sm my-5 opacity-50">
                    Brandon Grando 2022
            </p>
        </div>  
    )
}