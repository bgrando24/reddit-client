import { AiOutlineArrowRight } from "react-icons/ai";

export function ArticlesHeader({ articles }) {

    // variable used to store this so the string can be manipulated to display with capital letter
    let subredditString;
    let sentenceCaseString;
    if(articles[0]) {
        subredditString = articles[0].data.subreddit;
        sentenceCaseString = subredditString[0].toUpperCase() + subredditString.slice(1);
    }
    // const subredditString = articles[0].data.subreddit;
    // const sentenceCaseString = subredditString[0].toUpperCase() + subredditString.slice(1);

    return (
        <div className="flex flex-col items-center w-[90%] max-w-[700px] rounded-md bg-white my-5 dark:bg-[#030303] dark:text-white">
            <h1 className="font-bold">{sentenceCaseString ? sentenceCaseString : ""}</h1>
            <span className="flex my-1 p-1 bg-blue-500 text-white rounded-lg hover:scale-110 duration-150 ease-linear">
                <a href={`https://www.reddit.com/r/${subredditString}`}>View r/{sentenceCaseString} in Reddit</a>
                <AiOutlineArrowRight className="ml-2 mt-1"/> 
            </span>
        </div>
    )
}