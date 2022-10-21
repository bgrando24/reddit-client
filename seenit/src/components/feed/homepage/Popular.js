
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Popular.css';

export function Popular({ setSubreddit }) {

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
                    // console.log(data.data.children);
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
        setSubreddit('');
    }
    , []);  //only run on mounting


    // handles changing the subreddit state when user navigates to see a specific subreddit
    const handleSeeSubreddit = (e) => {
        e.preventDefault();
        console.log("Subreddit: " + e.target.id);
    }



    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center font-bold text-lg my-5">Popular Subreddits</h1>
            {
                popularSubreddits.map((sub, i) => {
                    return (
                        <Link 
                            key={i}
                            to={`/see/${sub.data.display_name}`}
                            id={sub.data.title}
                            className="container flex flex-col justify-between bg-white p-1 my-3 max-w-[700px] min-h-[60px] cursor-pointer hover:scale-105 duration-100"
                        >

                            <div className="flex items-center justify-between mx-5">
                                <h1 className="text-lg">r/{sub.data.display_name}</h1>
                                <img src={sub.data.header_img} className="w-min max-h-10 my-2" />
                            </div>

                            <p className=" text-sm opacity-50">
                                {sub.data.public_description.length > 80 ? sub.data.public_description.slice(0,81) + "..." : sub.data.public_description}
                            </p>

                        </Link>
                    )
                })
            }
        </div>
    )
}
