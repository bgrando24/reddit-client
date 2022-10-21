
import { useEffect, useState } from "react";
import { ArticlesHeader } from "./ArticlesHeader";
import { ArticleTemplate } from "./ArticleTemplate";

export function Articles({ subreddit }) {

    // holds the articles to display
    const [articles, setArticles] = useState([]);


    const fetchArticles = async () => {
        try {

            // fetching the subreddit through the reddit API
            const articleRequest = await fetch(`https://www.reddit.com/r/${subreddit}/.json`);

            if (articleRequest.status == 404) {
                console.log("404 FROM REQUEST");
            }

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
        console.log("Subreddit changed to: " + subreddit);
        console.log(articles);
    }
    , [subreddit]);    //subreddit as a dependency means the articles will update each time the subreddit is changed

    
    return (
        <div className="flex flex-col items-center"> 

        { articles.length == 0 ? <><ArticlesHeader articles={articles} />
        
        {
            articles.map( (article, i) => {
                return (
                    <ArticleTemplate key={i} article={article} />
                )
            })
        }
        </>
        : <div className="container mx-auto bg-white my-5 py-4 w-1/4 text-center rounded-lg">Serarch for something!</div>
        }
        </div>
        
    )
}