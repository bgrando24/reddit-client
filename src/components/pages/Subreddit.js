import { Articles } from "../feed/articles/Articles";

export function Subreddit({ subreddit, setSubreddit }) {
    return (
        <div>
            <Articles subreddit={subreddit} setSubreddit={setSubreddit}/>
        </div>
    )
}