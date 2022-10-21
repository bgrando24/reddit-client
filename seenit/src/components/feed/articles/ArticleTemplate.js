import { Link } from "react-router-dom"

export function ArticleTemplate({ article }) {
    return (
        <Link to={`/article/${article.data.title}`} className="cursor-pointer bg-white rounded border w-[90%] max-w-[700px] my-1 p-3 h-max">

            <p className="text-sm text-gray-400">Posted by u/{article.data.author_fullname}</p>
            <h3 className="font-bold">{article.data.title}</h3>
            
            <div className="flex justify-center">
                <img 
                    src={article.data.thumbnail} 
                    alt=""
                    className="w-auto h-auto" />
            </div>

        </Link>
    )
}
