
import { useEffect, useState } from "react";
import { ArticleTemplate } from "./ArticleTemplate";

export function Articles() {

    // holds the articles to display
    const [articles, setArticles] = useState([]);

    // holds the current subreddit 
    const [subreddit, setSubreddit] = useState('cats');


    const fetchArticles = async () => {
        try {

            // fetching the subreddit through the reddit API
            const articleRequest = await fetch(`https://www.reddit.com/r/${subreddit}/.json?limit=10`);
            const loadedArticles = await articleRequest.json().then(data => {

                if(data !== null) {
                    // console.log(data.data.children);
                    setArticles(data.data.children);

                } else {
                    console.error("Empty data returned from Reddit API");
                }
            });

        } catch (e) {

            console.error(e.message);
        }
    }

    // fetch the reddit API data on mounting of component or changing of subreddit
    useEffect( ()=> {
        fetchArticles();
        console.log(subreddit);
    }
    , [subreddit]);    //subreddit as a dependency means the articles will update each time the subreddit is changed

    return (
        <div className="flex flex-col items-center">

        <form onSubmit={e => {
            e.preventDefault();
            setSubreddit(e.target.subreddit.value); //gets the value from the input field 
            }}
            className="my-3"
            >

            <label htmlFor="subreddit">
                <input 
                    id="subreddit" 
                    name="subreddit" 
                    type="text"
                    placeholder={subreddit}
                    className="p-1 text-center rounded-md"
                    />
            </label>
            

        </form>
        
        {
            articles.map( (article, i) => {
                return (
                    <ArticleTemplate key={i} article={article} />
                )
            })
        }
        </div>
    )
}