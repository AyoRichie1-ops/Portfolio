import React from "react";
import { Projects } from "../portfolio.js";

const Project = () => {
    return (
        <div className="mx-auto container p-[1rem]">
            {Projects.map((p, index) => {
                const { image, title, description } = p; // Removed _id since it's not in your data
                return (
                    <div key={index} className="mb-8"> {/* Use index if no unique id */}
                        <img className="rounded-xl w-[350px] h-[350px] mb-6" src={image} alt={title} />
                        <h3 className="font-bold xl:text-[26px] text-center">{title}</h3>
                        <p className="xl:text-[20px] text-[#5A5A5A] text-center">{description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Project;
