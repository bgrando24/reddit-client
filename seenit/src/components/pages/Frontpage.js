import { Articles } from "../feed/articles/Articles";
import { Popular } from "../feed/homepage/Popular";

export function Frontpage({ subreddit }) {
    return (
        <div>
            <Popular />
        </div>
    )
}