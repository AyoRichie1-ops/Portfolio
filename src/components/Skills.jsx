// SkillsSection.jsx
import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiMongodb, SiWebpack, SiJest, SiTailwindcss, SiBootstrap } from 'react-icons/si';

const SkillsSection = () => {
    const skills = [
        {
            category: "Frontend", skills: [
                { name: "React", icon: <FaReact /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "CSS", icon: <SiCss3 /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "BootStrap", icon: <SiBootstrap /> }

            ]
        },
        {
            category: "Backend", skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "MongoDB", icon: <SiMongodb /> }
            ]
        },
        {
            category: "Tools", skills: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Webpack", icon: <SiWebpack /> },
                { name: "Jest", icon: <SiJest /> }
            ]
        }
    ];

    return (
        <section className="my-12 px- mx-auto container font-itim">
            <h2 className="text-[18px] lg:text-2xl font-bold mb-8 text">SKILLS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skillCategory, index) => (
                    <div key={index} className="p-6  border border-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4 text-center text-indigo-300">{skillCategory.category}</h3>
                        <ul className="space-y-4">
                            {skillCategory.skills.map((skill, i) => (
                                <li key={i} className="flex items-center space-x-3 group">
                                    <span className="text-2xl p-2 rounded-full group-hover:bg-indigo-600 group-hover:text-white">
                                        {skill.icon}
                                    </span>
                                    <span className="text-lg  transition duration-300">{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
