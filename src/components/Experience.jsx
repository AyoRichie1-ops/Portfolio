import React, { useState } from 'react';

const Experience = ({ darkMode }) => {
    const [selectedCompany, setSelectedCompany] = useState(null);

    const companies = [
        // {
        //     name: "Selfbook",
        //     position: "Software Developer (Remote)",
        //     location: "Selfbook / US - New York",
        //     duration: "Jun 2021 - Present",
        //     responsibilities: [
        //         "Developing screens and UI components for the web application using React and Tailwind.",
        //         "Fixing UI issues and integrating backend APIs with Redux Saga.",
        //     ],
        // },
        // {
        //     name: "Wevoz",
        //     position: "Backend Developer",
        //     location: "Wevoz / US",
        //     duration: "2018 - 2020",
        //     responsibilities: [
        //         "Developed and maintained RESTful APIs for the platform.",
        //         "Optimized database queries and improved server response times.",
        //     ],
        // },
        {
            name: "Tech Studio Academy",
            position: "Front-End Developer",
            location: "Lagos",
            duration: "2023 - present",
            responsibilities: [
                "Created a website in  which small businesses are being helped to gain online presence by helping them create their own website.",
                "Integrating with the backend APIs.",
            ],
        },
    ];

    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-[#edecec] text-black"} font-itim pt-[3rem] pb-[3rem]`}>
            <div className="flex flex-col md:flex-row gap-5 mx-auto container p-[1rem] md:p-0">
                <div className="relative w-full md:w-1/4 pl-4">
                    <h2 className="text-[18px] lg:text-2xl font-semibold mb-[4rem]">EXPERIENCE</h2>
                    <ul className={`space-y-2 border-l-2 ${darkMode ? 'border-white' : 'border-black'}`}>
                        {companies.map((company, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedCompany(company)}
                                className={`cursor-pointer px-4 py-2 transition-colors duration-300
                                    ${selectedCompany === company
                                        ? darkMode
                                            ? 'bg-white text-black font-semibold' // Selected company styling in dark mode
                                            : 'bg-black text-white font-semibold' // Selected company styling in light mode
                                        : darkMode
                                            ? 'hover:bg-white hover:text-black' // Hover effect for dark mode
                                            : 'hover:bg-black hover:text-white' // Hover effect for light mode
                                    }`}
                            >
                                {company.name}
                            </li>
                        ))}
                    </ul>

                </div>

                <div className="w-full md:w-3/4 mt-4 md:mt-[5.2rem] lg:mt-[5.5rem]">
                    {selectedCompany ? (
                        <div className={`p-4 border ${darkMode ? 'border-white' : 'border-black'} rounded-md transition-opacity duration-500 opacity-100`}>
                            <div className="flex justify-between items-baseline">
                                <h2 className="text-2xl font-bold">{selectedCompany.position}</h2>
                                <p className="text-sm">{selectedCompany.duration}</p>
                            </div>
                            <a href='https://techstudioacademy.com/' target='blank' className="text-[0.9rem] mt-3 text-blue-500">{selectedCompany.name}</a>
                            <ul className="mt-4 list-disc list-inside space-y-2">
                                {selectedCompany.responsibilities.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p className="text-[14px] mt-2 mb-5 border py-[2rem] text-center border-black rounded-md">
                            Select a company to view details.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experience;
