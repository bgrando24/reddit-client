
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdAlternateEmail } from "react-icons/md"

export function Socials() {
    return (
            <div className="flex flex-col items-center mt-52">

                <h1 className="text-center mb-10 text-lg font-bold">Check out my socials</h1>

                <div className="flex justify-center">
                    <SocialIcon 
                        link="https://github.com/bgrando24" 
                        icon={<AiFillGithub size="50"/>} />
                    <SocialIcon 
                        link="https://au.linkedin.com/in/brandon-grando-388437192" 
                        icon={<AiFillLinkedin size="50" />} />
                    <SocialIcon 
                        link="mailto:brandongrando@gmail.com" 
                        icon={<MdAlternateEmail size="50" />} />
                </div>

            </div>
    )
}


function SocialIcon({ icon, link }) {

    return (
        <a href={link} target="_blank" className="px-1 hover:scale-105 hover:text-blue-500 duration-200">
            {icon}
        </a>
    )
}