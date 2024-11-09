import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://formsubmit.co/1f845537690f2cc0d10804408221877d", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    setStatus("Success");
                    setFormData({ name: '', email: '', message: '' });
                } else {
                    setStatus("Failed");
                }
                setIsModalOpen(true);
            })
            .catch((error) => {
                console.error("Error:", error);
                setStatus("Failed");
                setIsModalOpen(true);
            });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setStatus('');
    };

    return (
        <div className={`${darkMode ? "bg-black text-gray-100" : "bg-gray-100 text-gray-900"} min-h-screen flex items-center justify-center py-10 px-4`}>
            <div className={`container mx-auto max-w-2xl rounded-lg p-6 lg:p-12 ${darkMode ? "shadow-xl shadow-gray-800" : "shadow-lg shadow-gray-300"}`}>
                <h1 className="text-3xl font-bold mb-6 text-center  dark:text-gray-200">Contact Me</h1>
                <p className="text-center dark:text-gray-4200 mb-8">
                    I’d love to hear from you! Whether you have a question or just want to connect, feel free to send me a message.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            rows="5"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-md hover:bg-gradient-to-l transition-colors"
                    >
                        Send Message
                    </button>
                </form>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg p-6 max-w-md w-full text-center shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">
                                {status === 'Success' ? 'Message Sent' : 'Submission Failed'}
                            </h2>
                            <p className="mb-6">
                                {status === 'Success' ?
                                    'Thank you! Your message has been successfully sent.' :
                                    'Oops! Something went wrong. Please try again later.'}
                            </p>
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
