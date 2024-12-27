import React from "react";
import { Projects } from "../portfolio.js";

const Project = () => {
    return (
        <div className="mx-auto container p-[1rem]">
            {Projects.map((p, index) => {
                const { image, title, description } = p;
                return (
                    <div
                        key={index}
                        className="mb-8 flex flex-col md:flex-row items-center md:items-start md:space-x-6"
                    >
                        {/* Image */}
                        <div className="bg-slate-600">
                            <img
                                className="rounded-xl w-[400px] h-[300px] mb-4 md:mb-0"
                                src={image}
                                alt={title}
                            />
                        </div>
                        {/* Text Content */}
                        <div className="text-center md:text-left">
                            <h3 className="font-bold xl:text-[26px] p-1">{title}</h3>
                            <hr />
                            <p className="xl:text-[20px] text-[#5A5A5A] p-2">{description}</p>
                            <hr />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Project;
