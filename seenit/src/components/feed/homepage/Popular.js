
import { useEffect, useState } from "react";

export function Popular() {

    // holds the articles to display
    const [popularSubreddits, setPopularSubreddits] = useState([]);


    const fetchPopular = async () => {
        try {

            // fetching popular subreddits through the reddit API
            const articleRequest = await fetch(`https://www.reddit.com/subreddits/popular.json`);

            if (articleRequest.status == 404) {
                console.log("404 FROM REQUEST");
            }

            const loadedArticles = await articleRequest.json().then(data => {

                if(data !== null) {
                    console.log(data.data.children);
                    setPopularSubreddits(data.data.children);

                } else {
                    console.error("Empty data returned from Reddit API for popular subreddits");
                }
            });

        } catch (e) {

            console.error(e.message);
        }
    }

    // fetch the reddit API data on mounting of component or changing of subreddit
    useEffect( ()=> {
        fetchPopular();
    }
    , []);  //only run on mounting


    return (
        <div>
            {
                popularSubreddits.map(sub => {
                    return (
                        <div className="flex flex-col justify-between bg-white p-1 my-3 h-20">
                            <h1>r/{sub.data.display_name}</h1>
                            <p className=" text-sm opacity-80">{sub.data.public_description.length > 80 ? sub.data.public_description.slice(0,81) + "..." : sub.data.public_description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}