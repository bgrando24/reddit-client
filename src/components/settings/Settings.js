import { useEffect, useState } from "react"

export function Settings() {

    // Handles setting dark mode to on or off
    const [darkMode, setDarkMode] = useState(false);


    useState(()=> {
        if(document.querySelector("html").classList.contains('dark')) {
            setDarkMode(true);
            // console.log('Dark mode set by useEffect');
        } else {
            setDarkMode(false);
            // console.log('Light mode set by useEffect');
        }
    });


    return (
        <div>
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <p className="text-center dark:text-white">{darkMode ? "Dark Mode" : "Light Mode"}</p>
        </div>
    )
}




function DarkModeToggle({ darkMode, setDarkMode }) {

    // Toggles state controlling dark mode and applies tailwind 'dark' class to html element when on
    const toggleDarkMode = () => {

        setDarkMode(!darkMode);
        // console.log(darkMode);

        if(!darkMode) {
            console.log("Dark mode detected");
            document.querySelector("html").classList.add("dark");
            document.querySelector("html").style.backgroundColor = "rgb(3 3 3)";
            document.querySelector("html").style.transition = "1s";
            document.querySelector("body").style.backgroundColor = "rgb(3 3 3)";
            document.querySelector("body").style.transition = "1s";
            
            
        } else {
            console.log("Dark mode NOT detected");
            document.querySelector("html").classList.remove("dark");
            document.querySelector("html").style.backgroundColor = "";
            document.querySelector("body").classList.remove("dark");
            document.querySelector("body").style.backgroundColor = "";
        }
    }

    return (
        <div className="flex justify-center">
            <div 
                onClick={toggleDarkMode}
                className="bg-blue-500 text-white px-10 py-2 cursor-pointer "
                >
                    Toggle
            </div>
        </div>
    )
}