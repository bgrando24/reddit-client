import { Articles } from "../feed/Articles";

export function Subreddit({ subreddit }) {
    return (
        <div>
            <Articles subreddit={subreddit}/>
        </div>
    )
}