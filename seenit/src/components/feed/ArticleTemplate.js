
export function ArticleTemplate({ article }) {
    return (
        <div className="bg-white rounded border w-[90%] max-w-[700px] my-1 p-3 h-max">
            <p className=" text-sm text-gray-400">Posted by u/{article.data.author_fullname}</p>
            <h3 className="font-bold">{article.data.title}</h3>
            
            <div className="flex justify-center">
                <img 
                    src={article.data.thumbnail} 
                    onError={ e=> e.target.style.display="none"} 
                    className="w-auto h-auto" />
            </div>
        </div>
    )
}


// style={{width: `"${article.data.thumbnail_width}"`, height: `"${article.data.thumbnail_height}"`}}