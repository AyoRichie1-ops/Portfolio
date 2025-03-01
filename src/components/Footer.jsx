import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMail } from "react-icons/md";
const Footer = () => {
    return (
        <footer className=" py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-center gap-[2rem] items-center px-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} Onanusi Abdullateef. All Rights Reserved.</p>

                {/* <nav className="flex space-x-4 my-4 md:my-0">
                    <a href="#home" className="hover:text-blue-500">Home</a>
                    <a href="#about" className="hover:text-blue-500">About</a>
                    <a href="#projects" className="hover:text-blue-500">Projects</a>
                    <a href="#contact" className="hover:text-blue-500">Contact</a>
                </nav> */}

                <div className="flex space-x-4">
                    <a href="https://github.com/AyoRichie1-ops" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/abdul-lateef-onanusi-080b03303/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:onanusiabdullateef@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500">
                        <MdMail />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;