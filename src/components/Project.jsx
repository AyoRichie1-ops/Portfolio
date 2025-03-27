import React from "react";
import { Projects } from "../portfolio.js";
import { FaGithub } from "react-icons/fa6";

const Project = () => {
    return (
        <div className="mx-auto container p-[1rem]">
            <h2 className="text-[18px] lg:text-2xl font-semibold mb-[4rem]">FEATURED PROJECTS</h2>
            {Projects.map((p, index) => {
                const { image, title, description, technologies, livelinks, repo } = p;

                return (
                    <div
                        key={index}
                        className="mb-8 flex flex-col md:flex-row items-center md:items-start md:space-x-6"
                    >
                        {/* Image */}
                        <div className="bg-black md:w-[400px] md:h-[300px] p-[0.1rem]">
                            <img
                                className="w-full h-full object-cover"
                                src={image}
                                alt={title}
                                loading="lazy"
                            />
                        </div>
                        {/* Text Content */}
                        <div className="text-center md:text-left">
                            <h3 className="font-bold xl:text-[26px] p-1">{title}</h3>
                            <hr />
                            <p className="xl:text-[20px] text-[#5A5A5A] p-2">{description}</p>
                            <hr />
                            {/* Technologies */}
                            <div className="mt-4">
                                <h4 className="font-bold text-[18px]">Technologies:</h4>
                                <div className="flex md:flex-wrap md:flex-row gap-2 mt-2 justify-center md:justify-start">
                                    {/* Front-End */}
                                    {technologies.frontEnd && (
                                        <div className="md:flex items-center">
                                            <span className="font-semibold text-[16px] ">
                                                Front-End:
                                            </span>
                                            <div className="flex md:flex-wrap flex-col md:flex-row gap-1">
                                                {technologies.frontEnd.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 py-1 text-base rounded text-[#5A5A5A]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {/* Back-End */}
                                    {technologies.backEnd && (
                                        <div className="md:flex items-center md:mt-0">
                                            <span className="font-semibold text-[16px] mr-2">
                                                Back-End:
                                            </span>
                                            <div className="flex md:flex-wrap flex-col md:flex-row gap-2">
                                                {technologies.backEnd.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 py-1 text-base rounded text-[#5A5A5A]"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>


                            {/* Buttons */}
                            <div className="mt-4 flex space-x-4 justify-center md:justify-start">
                                {livelinks && (
                                    <a
                                        href={livelinks}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 border-2 border-purple-500 rounded-md font-semibold duration-900 transform transition-transform hover:scale-110"
                                    >
                                        <span className="mr-2">🔗</span> Live Demo
                                    </a>
                                )}
                                {repo && (
                                    <a
                                        href={repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 duration-900 transform transition-transform hover:scale-110"
                                    >
                                        <span><FaGithub className='text-[20px]' /></span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Project;
