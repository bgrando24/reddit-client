import { Articles } from "../feed/articles/Articles";

export function Subreddit({ subreddit }) {
    return (
        <div>
            <Articles subreddit={subreddit}/>
        </div>
    )
}