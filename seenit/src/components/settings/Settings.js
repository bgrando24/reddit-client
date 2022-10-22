import { useEffect, useState } from "react"

export function Settings() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if(darkMode) {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}


function DarkModeToggle({ darkMode, setDarkMode }) {

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="flex justify-center">
            <div 
                onClick={toggleDarkMode}
                className="bg-blue-500 text-white px-10 py-2 cursor-pointer dark:bg-gray-300 dark:text-black"
                >
                    Toggle
            </div>
        </div>
    )
}