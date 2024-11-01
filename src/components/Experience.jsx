import React, { useState } from 'react';

const Experience = ({ darkMode }) => {
    const [selectedCompany, setSelectedCompany] = useState(null);

    const companies = [
        {
            name: "Selfbook",
            position: "Software Developer (Remote)",
            location: "Selfbook / US - New York",
            duration: "Jun 2021 - Present",
            responsibilities: [
                "Developing screens and UI components for the web application using React and Tailwind.",
                "Fixing UI issues and integrating backend APIs with Redux Saga.",
            ],
        },
        {
            name: "Wevoz",
            position: "Backend Developer",
            location: "Wevoz / US",
            duration: "2018 - 2020",
            responsibilities: [
                "Developed and maintained RESTful APIs for the platform.",
                "Optimized database queries and improved server response times.",
            ],
        },
        {
            name: "Tech Studio Academy",
            position: "Front-End Developer",
            location: "Lagos",
            duration: "2023 - present",
            responsibilities: [
                "Created a website in which small businesses are being help to gain online prescenc by having their own website.",
                "INtegrating with the backend APIs.",
            ],
        },
    ];

    return (
        <div className={`${darkMode ? "bg-black text-white" : "bg-[#edecec] text-black"} font-itim pt-[3rem]`}>
            <div className="flex flex-col md:flex-row gap-5 mx-auto container p-3">
                <div className="relative w-full md:w-1/4">
                    <h2 className="text-xl font-semibold mb-[4rem]">EXPERIENCE</h2>
                    <ul className="space-y-2">
                        {companies.map((company, index) => (
                            <li
                                key={index}
                                onClick={() => setSelectedCompany(company)}
                                className={`cursor-pointer px-4 py-2 rounded-md transition-colors duration-300 relative
                                ${selectedCompany === company
                                        ? 'bg-gray-700 border-l-4 border-blue-500 font-semibold text-blue-300' // Active state styling
                                        : 'hover:bg-gray-800 hover:text-white'
                                    }`}
                            >
                                {selectedCompany === company && (
                                    <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2">
                                        <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-blue-500 border-b-4 border-b-transparent" />
                                    </div>
                                )}
                                {company.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-3/4 mt-4 md:mt-0 lg:mt-[5.8rem]">
                    <div className={`transition-opacity duration-500 ${selectedCompany ? 'opacity-100' : 'opacity-0'}`}>
                        {selectedCompany ? (
                            <div className="p-4 border border-gray-700 rounded-md">
                                <div className="flex items-baseline">
                                    <h2 className="text-2xl font-bold">{selectedCompany.position}</h2>
                                    <p className="text-sm md:ml-10">{selectedCompany.duration}</p> {/* Add margin only for larger screens */}
                                </div>
                                <p className="text-sm mt-3">{selectedCompany.location}</p>
                                <ul className="mt-4 list-disc list-inside space-y-2">
                                    {selectedCompany.responsibilities.map((task, index) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p className="text-[34px]">Select a company to view details.</p>
                        )}
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Experience;