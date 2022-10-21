import { Articles } from "../feed/articles/Articles";
import { Popular } from "../feed/homepage/Popular";

export function Frontpage({ setSubreddit }) {
    return (
        <div>
            <Popular setSubreddit={setSubreddit}/>
        </div>
    )
}