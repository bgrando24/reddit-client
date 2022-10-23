import { useEffect } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function PortfolioRedirect() {

    useEffect(() => {
        setTimeout(() => {
            window.location.href = "https://bgrando24.github.io/portfolio-2022/";
        }, 3000);
    })

    return (
        <div className="flex flex-col items-center text-3xl h-screen dark:text-white">
            <h1 className="my-10">Redirecting you...</h1>
            <AiOutlineLoading3Quarters 
                size="100"
                className="animate-spin"
            />
        </div>
    )
}